$("document").ready(function() {

  all_notes.on("keyup", function () {
    note_content = $(this).text();
    item_key = "list_" + $(this).index();
    data = { content: note_content };
    window.localStorage.setItem(item_key, JSON.stringify(data));
});

all_notes.each(function (index) {
    data = JSON.parse(window.localStorage.getItem("list_" + index));
    if (data !== null) {
        note_content = data.content;
        $(this).text(note_content);
    }
});

  
    

});