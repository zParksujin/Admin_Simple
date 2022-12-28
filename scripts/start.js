// 이것을 읽는 모든 코드가 올바른 환경을 알 수 있도록 가장 먼저 이것을 수행하십시오.
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.

// 처리되지 않은 거부에 자동으로 스크립트가 충돌하는 대신 스크립트 충돌이 발생합니다.
// 무시합니다. 처리되지 않은 Promise 거절은 앞으로
// 0이 아닌 종료 코드로 Node.js 프로세스를 종료합니다.
process.on('unhandledRejection', (err) => {
  throw err;
});

// 환경 변수를 읽었는지 확인합니다.
require('../config/env');

const fs = require('fs');
const chalk = require('react-dev-utils/chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const semver = require('semver');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config');
const createDevServerConfig = require('../config/webpackDevServer.config');
const getClientEnvironment = require('../config/env');
// eslint-disable-next-line import/no-dynamic-require
const react = require(require.resolve('react', { paths: [paths.appPath] }));

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));
const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = 3000;
// const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(process.env.HOST)
      )}`
    )
  );
  console.log(`If this was unintentional, check that you haven't mistakenly set it in your shell.`);
  console.log(`Learn more here: ${chalk.yellow('https://cra.link/advanced-config')}`);
  console.log();
}

// 명시적으로 브라우저를 설정하고
// browserslist 기본값입니다.
// eslint-disable-next-line import/order
const { checkBrowsers } = require('react-dev-utils/browsersHelper');

checkBrowsers(paths.appPath, isInteractive)
  .then(() =>
    // 기본 포트를 사용하려고 시도하지만 사용 중인 경우 사용자에게 다음을 제공합니다.
    // 다른 포트에서 실행합니다. `choosePort()` Promise는 다음 사용 가능한 포트로 확인됩니다.
    choosePort(HOST, DEFAULT_PORT)
  )
  .then((port) => {
    if (port == null) {
      // 포트를 찾지 못했습니다.
      return;
    }

    const config = configFactory('development');
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const appName = require(paths.appPackageJson).name;

    const useTypeScript = fs.existsSync(paths.appTsConfig);
    const urls = prepareUrls(protocol, HOST, port, paths.publicUrlOrPath.slice(0, -1));
    // 사용자 지정 메시지로 구성된 웹팩 컴파일러를 생성합니다.
    const compiler = createCompiler({
      appName,
      config,
      urls,
      useYarn,
      useTypeScript,
      webpack,
    });
    // Load proxy config
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const proxySetting = require(paths.appPackageJson).proxy;
    const proxyConfig = prepareProxy(proxySetting, paths.appPublic, paths.publicUrlOrPath);
    // 웹 서버를 통해 컴파일러가 생성한 웹팩 자산을 제공합니다.
    const serverConfig = {
      ...createDevServerConfig(proxyConfig, urls.lanUrlForConfig),
      host: HOST,
      port,
    };
    const devServer = new WebpackDevServer(serverConfig, compiler);
    // WebpackDevServer를 시작합니다.
    devServer.startCallback(() => {
      if (isInteractive) {
        clearConsole();
      }

      if (env.raw.FAST_REFRESH && semver.lt(react.version, '16.10.0')) {
        console.log(
          chalk.yellow(
            `Fast Refresh requires React 16.10 or higher. You are using React ${react.version}.`
          )
        );
      }

      console.log(chalk.cyan('Starting the development server...\n'));
      openBrowser(urls.localUrlForBrowser);
    });

    ['SIGINT', 'SIGTERM'].forEach((sig) => {
      process.on(sig, () => {
        devServer.close();
        process.exit();
      });
    });

    if (process.env.CI !== 'true') {
      // stdin이 종료되면 정상적으로 종료
      process.stdin.on('end', () => {
        devServer.close();
        process.exit();
      });
    }
  })
  .catch((err) => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
