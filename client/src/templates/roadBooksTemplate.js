module.exports="" +
    "<div>Road Book</div>" +
    "<ul>" +
        "{{~ it.roadBooks : roadBook}}" +
            "<li>" +
                "<a href='/#/roadbook/{{=roadBook.id}}/{{=roadBook.title}}'>" +
                    "<article>" +
                        "<div class='roadbook-img'></div>"+
                        "<div class='roadbook-details'>" +
                            "<div class='roadbook-title'>{{=roadBook.title}}</div>"+
                            "<div class='informations'></div>"+
                            "<div class='keywords'></div>"+
                        "</div>"+
                        "<div class='roadbook-price'>" +
                            "<div class='sticker-info'></div>"+
                            "<div class='basket-price'>" +
                                "<button data-roadbook-id='{{=roadBook.id}}'>Ajouter au panier</button>" +
                            "</div>"+
                        "</div>"+
                    "</article>"+
                "</a>"+
            "</li>" +
        "{{~}}" +
    "</ul>";