/**
 * Created with IntelliJ IDEA.
 * User: Tigrou
 * Date: 18/11/2013
 * Time: 22:54
 * To change this template use File | Settings | File Templates.
 */
module.exports="" +
    "<a href='/#/home'>home</a><button id='addToBasket' data-roadbook-id='{{=it.id}}'>Ajouter au panier</button><button id='editRoadBook'>Editer</button>" +
    "<div>{{=it.id}} - {{=it.title}} - {{=it.country}}</div>" +
    "<p>{{=it.summary}}</p>" +
    "<ul>" +
    "<li>{{=it.distance}} km</li>" +
    "<li>{{=it.difficulty}} / 5</li>" +
    "<li>{{=it.price}} EUR</li>" +
    "</ul>"