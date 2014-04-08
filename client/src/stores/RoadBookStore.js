/**
 * Created by Tigrou on 15/12/2013.
 */
var RoadBook = require("../models/RoadBook");
var RoadBooks = require("../collections/RoadBooks");
var XHR = require('../libs/xhr');

var roadBookStore = {
    getById : function roadBookStoreGetById(id) {
        var roadBook = null;
        var xhr = new XHR(XHR.createXMLHttpRequest());
        xhr.get("/roadBook/"+id, false);
        xhr.addSuccessCallBack(function roadBookServiceSuccessCallBack(json){
            roadBook = RoadBook.fromJSON(json);
        });
        xhr.send(null);
        return roadBook;
    },
    getAll : function roadBookStoreGetAll() {
        var roadBooks = null;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/roadbooks", false);
        xhr.send(null);
        if(xhr.status == 200)
            roadBooks = RoadBooks.fromJSON(xhr.responseText);
        return roadBooks;
    },
    sendBasket : function sendBasket(basket) {
        var redirectUrl = "";
        var xhr = new XHR(XHR.createXMLHttpRequest());
        xhr.post("/payment", false);
        xhr.addSuccessCallBack(function roadBookServiceSuccessCallBack(json){
            redirectUrl = JSON.parse(json).redirect;
        });
        xhr.send(JSON.stringify(basket));
        return redirectUrl;
    }
};

module.exports = roadBookStore;