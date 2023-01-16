interface IPopup {
  [key: string]: string | number;
}
export const customWindowOpener = (
  url: string,
  name: string,
  options: { [key: string]: string | number }
) => {
  const popup: IPopup | undefined = {
    width: '400',
    height: '700',
    toolbar: 'no',
    location: 'no',
    status: 'no',
    scrollbars: 'no',
    resizeable: 'no',
    menubar: 'no',
    left: 0,
    top: 0,
  };
  if (options) {
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const _key in options) {
      popup[_key] = options[_key];
    }
  }

  const isInIframe = window.location !== window.parent.location;
  let _window: any = window;
  if (
    window.frameElement &&
    window.frameElement.getAttribute('tiledesk_context') === 'parent' &&
    isInIframe
  ) {
    _window = window.parent;
  }

  const dualScreenLeft = _window.screenLeft ?? 0;
  const dualScreenTop = _window.screenTop ?? 0;
  // eslint-disable-next-line no-nested-ternary
  const width = _window.innerWidth
    ? _window.innerWidth
    : _window.document.documentElement.clientWidth
    ? _window.document.documentElement.clientWidth
    : window.screen?.width;
  // eslint-disable-next-line no-nested-ternary
  const height = _window.innerHeight
    ? _window.innerHeight
    : _window.document.documentElement.clientHeight
    ? _window.document.documentElement.clientHeight
    : window.screen?.height;
  popup.left = width / 2 - +popup.width / 2 + dualScreenLeft;
  popup.top = height / 2 - +popup.height / 2 + dualScreenTop;
  let specs = '';
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const _key in popup) {
    if (specs.length > 0) {
      specs += ',';
    }
    specs += `${_key}=${popup[_key]}`;
  }

  return window.open(url, name, specs);
};
