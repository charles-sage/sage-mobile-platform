var args = arguments[0] || {};
var parent = args.parent;

var slideAnimation = Titanium.UI.createAnimation({
    left : 0,
    duration : 300
});

$.table.addEventListener('click', function(e) {
    var detail = Alloy.createController('detail', {
        id : e.row.id,
    }).getView();
    detail.open(slideAnimation);
});

function init() {
    parent.header.fireEvent('set_title', {
        title : 'Master',
        position : 'center'
    });
};

init();
