module.exports="<a href='/#basket'>Sac à dos</a>" +
    "<div>Road Book</div>" +
    "<ul>" +
        "{{~ it.roadBooks : roadBook}}" +
            "<li data-roadbook-id='{{=roadBook.id}}'>{{=roadBook.title}}</li><button data-roadbook-id='{{=roadBook.id}}'>Ajouter au panier</button>" +
        "{{~}}" +
    "</ul>";