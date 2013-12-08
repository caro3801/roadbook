/**
 * Created with IntelliJ IDEA.
 * User: Tigrou
 * Date: 18/11/2013
 * Time: 22:54
 * To change this template use File | Settings | File Templates.
 */
module.exports="<div>{{=it.roadBook.id}} - {{=it.roadBook.title}} - {{=it.roadBook.country}}</div>" +
    "<p>{{=it.roadBook.summary}}</p>" +
    "<ul>" +
    "<li>{{=it.roadBook.distance}} km</li>" +
    "<li>{{=it.roadBook.difficulty}} / 5</li>" +
    "<li>{{=it.roadBook.price}} EUR</li>" +
    "</ul>"