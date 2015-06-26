var defaultView = 'dashboard';
var currentView = null;
var menuOpen = false;

var toggleMenu = function() {
    if (menuOpen) {
        // slider menu is open so close it
        $.mainview.animate({
            left : 0,
            right : 0,
            duration : 150,
            curve : Ti.UI.ANIMATION_CURVE_EASE_OUT
        });
        menuOpen = false;
    } else {
        // slider menu is NOT open so open it
        $.mainview.animate({
            left : 200,
            right : -200,
            duration : 200,
            curve : Ti.UI.ANIMATION_CURVE_EASE_IN
        });
        menuOpen = true;
    }
};

$.header.addEventListener('set_title', function(e) {
    $.header.removeAllChildren();
    $.header.add($.UI.create("Label", {
        classes : ['titleLabel', e.position],
        text : e.title
    }));  
});

$.menu.getView('menuTableView').addEventListener('click', function selectRow(e) {
    if (e.row.id !== 'inactive') {
        // row is not marked as inactive
        if (currentView.id !== e.row.id) {
            // selected menu item different than current view
            $.content.remove(currentView);
            currentView = Alloy.createController(e.row.id, {parent: $}).getView();
            $.content.add(currentView);
        }
    }
    toggleMenu();
});

$.mainview.addEventListener('swipe', function(e) {
    toggleMenu();
});

$.menubutton.addEventListener('click', function(e) {
    toggleMenu();
});

function init() {
    currentView = Alloy.createController(defaultView, {parent: $}).getView();
    $.content.add(currentView);
    $.index.open();
};

init();

