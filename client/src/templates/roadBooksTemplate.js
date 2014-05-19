module.exports="" +
    "<ul>" +
        "{{~ it.roadBooks : roadBook}}" +
            "<li>" +
                "<article>" +
                    "<a href='/#/roadbook/{{=roadBook.id}}/{{=roadBook.title}}'>" +
                        "<div class='roadbook-img'></div>"+
                        "<div class='roadbook-details'>" +
                            "<div class='roadbook-title'>{{=roadBook.title}}</div>"+
                            "<div class='informations'>" +
                                "<ul>" +
                                    "<li class='difficulty-{{=roadBook.difficulty}}'></li>"+
                                    "<li class='time-{{=roadBook.time}}'></li>"+
                                    "<li class='ground-{{=roadBook.ground}}'></li>"+
                                "</ul>"+
                            "</div>"+
                            "<div class='keywords'></div>"+
                        "</div>"+
                    "</a>"+
                    "<div class='roadbook-price'>" +
                        "<div class='sticker-info'></div>"+
                        "<div class='basket-price'>" +
                            "<button data-roadbook-id='{{=roadBook.id}}'>Ajouter au panier</button>" +
                        "</div>"+
                    "</div>"+
                "</article>"+
            "</li>" +
        "{{~}}" +
    "</ul>";