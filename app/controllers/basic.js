var args = arguments[0] || {};
var parent = args.parent;

function init() {
    parent.header.fireEvent('set_title', {
        title : 'Basic',
        position : 'center'
    });

    $.myId.text = "I like big books\nand i cannot lie\nYou other readers can't deny;\nwhen a book walks in with\na good plot base\nand a big spine in your face\nyou get sprung!\nwanna get out your notepads\n'cause you noticed that book\nwas dense.\ndeep in the book i'm reading,\ni'm hooked and i can't stop\nspeeding, through baby\ni wanna get that litertature,\nand instagram that picture,\nmy teachers try to train me\nbut that book you've got\nmakes me so brainy\nbaby got books";

};

init();
