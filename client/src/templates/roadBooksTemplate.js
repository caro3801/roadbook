module.exports="" +
    "<div>Road Book</div>" +
    "<ul>" +
        "{{~ it.roadBooks : roadBook}}" +
            "<li><a href='/#/roadbook/{{=roadBook.id}}/{{=roadBook.title}}'>{{=roadBook.title}}</a></li><button data-roadbook-id='{{=roadBook.id}}'>Ajouter au panier</button>" +
        "{{~}}" +
    "</ul>";