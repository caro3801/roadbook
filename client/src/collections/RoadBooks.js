var RoadBook = require("../models/RoadBook");

function RoadBooks() {
    this.roadBooks = [];
}

RoadBooks.fromJSON = function roadBooksFromJson(stringData) {
    var data = JSON.parse(stringData);
    var roadBooks = new RoadBooks();
    roadBooks.parse(data);
    return roadBooks;
};

RoadBooks.prototype.parse = function roadBooksParse(data) {
    var i=0;
    for(;i<data.roadBooks.length;i++) {
        var currentRoadBook = new RoadBook();
        currentRoadBook.parse(data.roadBooks[i]);
        this.roadBooks.push(currentRoadBook);
    }
};

module.exports = RoadBooks;
  