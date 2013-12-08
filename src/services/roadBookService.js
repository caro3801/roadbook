/**
 * Created with IntelliJ IDEA.
 * User: Tigrou
 * Date: 18/11/2013
 * Time: 22:41
 * To change this template use File | Settings | File Templates.
 */
var RoadBook = require("../models/RoadBook");
var XHR = require('../libs/xhr');
var RoadBookService = {};

RoadBookService.findById = function roadBookFindById(id) {
    var roadBook = null;
    var xhr = new XHR(XHR.createXMLHttpRequest());
    xhr.get("/roadBook/"+id, false);
    xhr.addSuccessCallBack(function roadBookServiceSuccessCallBack(json){
        roadBook = RoadBook.fromJSON(json);
    });
    xhr.send(null);
    return roadBook;
};

module.exports = RoadBookService;