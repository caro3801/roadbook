var RoadBooks = require("../services/roadBooksService");

var RoadBooksPresenter = {};

RoadBooksPresenter.listView = function roadBooksPresenterListView() {
    var roadBooksService = RoadBooks.all();

    var dtoRoadBooks = {};
    dtoRoadBooks.roadBooks = roadBooksService.roadBooks.map(function (elem){
       return {"id":elem.id,"title" :elem.title};
    });
    return dtoRoadBooks;
};

module.exports = RoadBooksPresenter;