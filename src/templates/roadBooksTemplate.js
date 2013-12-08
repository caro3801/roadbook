module.exports="<div>Road Book</div>" +
    "<ul>" +
        "{{~ it.roadBooks : roadBook}}" +
            "<li data-roadbook-id='{{=roadBook.id}}'>{{=roadBook.title}}</li>" +
        "{{~}}" +
    "</ul>";