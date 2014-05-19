var timeEnum = {
    EXPRESS:0,
    SHORT:1,
    MEDIUM:2,
    LONG:4
};

var difficultyEnum = {
    EASY:0,
    MEDIUM:1,
    HARD:2
};

var groundEnum = {
    FOREST:0,
    PLAIN:1,
    MOUNTAIN:2
};

var utils = require("../utils");

function RoadBook() {
    var _price = 0;
    this.id = 0;
    this.title = "";
    this.country = "";
    this.distance = 0;
    this.time = timeEnum.SHORT;
    this.difficulty = difficultyEnum.EASY;
    this.ground = groundEnum.FOREST;
    this.summary = "";
    Object.defineProperty(this, "price", {
        get: function getRoadBookPrice() {
            return _price*utils.tvaMulti;
        },
        set: function setRoadBookPrice(price) {
            if (price<0){
                throw new Error("prix du roadbook negatif");
            }
            _price = price;
        }
    });
}

RoadBook.prototype.parse = function roadBookParse(data) {
    this.id = data.id;
    this.title = data.title;
    this.country = data.country;
    this.distance = data.distance;
    this.difficulty = data.difficulty;
    this.price = data.price;
    this.summary = data.summary;
    this.time = data.time;
    this.difficulty = data.difficulty;
    this.ground = data.ground;
};

RoadBook.fromJSON = function roadBookFromJson(stringData) {
    var data = JSON.parse(stringData);
    var roadBook = new RoadBook();
    roadBook.parse(data);
    return roadBook;
};

module.exports = RoadBook;