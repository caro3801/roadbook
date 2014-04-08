/**
 * Created by Tigrou on 15/12/2013.
 */
var basket = require("../models/Basket");
var XHR = require('../libs/xhr');

var basketStore = {
    getById : function roadBookStoreGetById(id) {
        var xhr = new XHR(XHR.createXMLHttpRequest());
        xhr.get("/basket/"+id, false);
        xhr.addSuccessCallBack(function (json){
            basket = basket.fromJSON(json);
        });
        xhr.send(null);
        return basket;
    }
};

module.exports = basketStore;