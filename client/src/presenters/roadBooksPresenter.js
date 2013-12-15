var roadBookStore = require("../stores/RoadBookStore");
var RoadBooksView = require("../views/RoadBooksView");

var roadBooksPresenter = {};

roadBooksPresenter.init = function roadBooksPresenterInit(domRequest, basket) {
    this.view = new RoadBooksView(domRequest);
    this.model = roadBookStore.getAll();
    this.basket = basket;
    this.updateView();
};

roadBooksPresenter.updateView = function roadBooksPresenterUpdateView() {
    var dtoRoadBooks = {};
    dtoRoadBooks.roadBooks = this.model.roadBooks.map(function (elem){
        return {"id":elem.id,"title" :elem.title};
    });
    this.view.render(dtoRoadBooks);
    this.attachHandler();
};

roadBooksPresenter.attachHandler = function basketPresenterAttachHandler() {
    this.view.installRoadBookHandler(roadBooksPresenter.roadBookHandler);
    this.view.installAddRoadBookToBasketHandler(roadBooksPresenter.roadBookAddRoadBookToBasketHandler);
};

roadBooksPresenter.roadBookAddRoadBookToBasketHandler = function roadBookAddRoadBookToBasketHandler(roadBookId) {
    roadBooksPresenter.basket.addRoadBook(roadBookStore.getById(roadBookId));
};

roadBooksPresenter.roadBookHandler = function roadBooksPresenterRoadBookHandler(roadBookId, roadBookTitle) {
    window.location.hash="roadbook/"+roadBookId+"/"+encodeURI(roadBookTitle);
};

module.exports = roadBooksPresenter;