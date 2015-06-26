var args = arguments[0] || {};
var parent = args.parent;

function init() {
    parent.header.fireEvent('set_title', {title: 'Dashboard', position: 'center' });
};

init();

