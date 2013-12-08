/**
 * Created with IntelliJ IDEA.
 * User: Tigrou
 * Date: 18/11/2013
 * Time: 22:36
 * To change this template use File | Settings | File Templates.
 */

var RoadBookServices = require("../services/roadBookService");

var RoadBookPresenter = {};

RoadBookPresenter.displayInfos = function roadBookPresenterDisplayInfos(id){
    var roadBook = RoadBookServices.findById(id) ;
    var dtoRoadBook = {};
    dtoRoadBook.roadBook = roadBook;
    return dtoRoadBook;

};
module.exports = RoadBookPresenter;
