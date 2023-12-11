$("document").ready(function() {

    // Function to save content to local storage
    function saveContent(key, content) {
        localStorage.setItem(key, content);
    }

    // Function to retrieve content from local storage
    function getContent(key) {
        return localStorage.getItem(key);
    }

    // Make text within elements with class "editable" editable
    $(".notifcations1").each(function() {
        const key = $(this).data("key");
        const content = getContent(key);

        if (content) {
            $(this).html(content);
        }

        $(this).on("click", function() {
            $(this).attr("contenteditable", true).focus();
        });

        $(this).on("input", function() {
            saveContent(key, $(this).html());
        });

        $(this).on("blur", function() {
            $(this).removeAttr("contenteditable");
        });
    });

    $(".notifcations2").each(function() {
        const key = $(this).data("key");
        const content = getContent(key);

        if (content) {
            $(this).html(content);
        }

        $(this).on("click", function() {
            $(this).attr("contenteditable", true).focus();
        });

        $(this).on("input", function() {
            saveContent(key, $(this).html());
        });

        $(this).on("blur", function() {
            $(this).removeAttr("contenteditable");
        });
    });

    $(".notifcations3").each(function() {
        const key = $(this).data("key");
        const content = getContent(key);

        if (content) {
            $(this).html(content);
        }

        $(this).on("click", function() {
            $(this).attr("contenteditable", true).focus();
        });

        $(this).on("input", function() {
            saveContent(key, $(this).html());
        });

        $(this).on("blur", function() {
            $(this).removeAttr("contenteditable");
        });
    });

});
