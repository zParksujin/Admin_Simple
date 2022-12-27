export const customWindowOpener = (url, name, options) => {
    const popup = {};
    popup.width = '400';
    popup.height = '700';
    popup.toolbar = 'no';
    popup.location = 'no';
    popup.status = 'no';
    popup.scrollbars = 'no';
    popup.resizeable = 'no';
    popup.menubar = 'no';
    if (options) {
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const _key in options) {
            popup[_key] = options[_key];
        }
    }

    const isInIframe = (window.location !== window.parent.location);
    let _window = window;
    if (isInIframe) _window = window.parent;

    const dualScreenLeft = _window.screenLeft ?? 0;
    const dualScreenTop = _window.screenTop ?? 0;
    // eslint-disable-next-line no-nested-ternary
    const width = _window.innerWidth ? _window.innerWidth : _window.document.documentElement.clientWidth ? _window.document.documentElement.clientWidth : window.screen?.width;
    // eslint-disable-next-line no-nested-ternary
    const height = _window.innerHeight ? _window.innerHeight : _window.document.documentElement.clientHeight ? _window.document.documentElement.clientHeight : window.screen?.height;
    popup.left = ((width / 2) - (popup.width / 2)) + dualScreenLeft;
    popup.top = ((height / 2) - (popup.height / 2)) + dualScreenTop;
    let specs = '';
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const _key in popup) {
        if (specs.length > 0) {
            specs += ",";
        }
        specs += `${_key}=${popup[_key]}`;
    }

    return window.open(url, name, specs);
};