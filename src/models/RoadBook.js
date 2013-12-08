function RoadBook() {
    var _price = 0;
    this.id = 0;
    this.title = "";
    this.country = "";
    this.distance = 0;
    this.difficulty = 0;
    this.summary = "";
    Object.defineProperty(this, "price", {
        get: function getRoadBookPrice() {
            return _price;
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
};

RoadBook.fromJSON = function roadBookFromJson(stringData) {
    var data = JSON.parse(stringData);
    var roadBook = new RoadBook();
    roadBook.parse(data);
    return roadBook;
};

module.exports = RoadBook;