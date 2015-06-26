var args = arguments[0] || {};
var id = args.id;

$.navbutton.addEventListener('click', function(e) {
    $.detail.animate({
        left : 500,
        duration : 300
    }, function() {
        $.detail.close();
    });
});

function init() {
    $.title.text = "Details";
    $.itemId.text = "My ID = " + id;
};

init();

