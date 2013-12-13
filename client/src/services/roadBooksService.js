var RoadBook = require("../models/RoadBook");

function RoadBooksService() {
    this.roadBooks = [];
}

RoadBooksService.all = function roadBooksAll() {
    var roadBooks = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/roadbooks", false);
    xhr.send(null);
    if(xhr.status == 200)
        roadBooks = RoadBooksService.fromJSON(xhr.responseText);
    return roadBooks;
};

RoadBooksService.fromJSON = function roadBooksFromJson(stringData) {
    var data = JSON.parse(stringData);
    var roadBooks = new RoadBooksService();
    roadBooks.parse(data);
    return roadBooks;
};

RoadBooksService.prototype.parse = function roadBooksParse(data) {
    var i=0;
    for(;i<data.roadBooks.length;i++) {
        var currentRoadBook = new RoadBook();
        currentRoadBook.parse(data.roadBooks[i]);
        this.roadBooks.push(currentRoadBook);
    }
};

module.exports = RoadBooksService;
  