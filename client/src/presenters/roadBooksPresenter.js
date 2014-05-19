var roadBookStore = require("../stores/RoadBookStore");
var RoadBooksView = require("../views/RoadBooksView");
var BasketMiniView = require("../views/BasketMiniView");

var roadBooksPresenter = {};

roadBooksPresenter.init = function roadBooksPresenterInit(domRequest, basket) {
    this.view = new RoadBooksView(domRequest);
    this.view2 = new BasketMiniView(domRequest);
    this.model = roadBookStore.getAll();
    this.basket = basket;
    this.updateMiniView();
    this.updateView();
};

roadBooksPresenter.updateView = function roadBooksPresenterUpdateView() {
    var dtoRoadBooks = {};
    dtoRoadBooks.roadBooks = this.model.roadBooks.map(function (elem){
        return {"id":elem.id,"title" :elem.title,'time': elem.time, 'difficulty':elem.difficulty, 'ground': elem.ground};
    });
    this.view.render(dtoRoadBooks);
     this.attachHandler();
};

roadBooksPresenter.updateMiniView = function roadBooksPresenterUpdateMiniView(){
    var dtoBasketMini = {};
    dtoBasketMini.nbItems = this.basket.getNbTotalItem();
    this.view2.render(dtoBasketMini);
}

roadBooksPresenter.attachHandler = function basketPresenterAttachHandler() {
    this.view.installAddRoadBookToBasketHandler(roadBooksPresenter.roadBookAddRoadBookToBasketHandler);
};

roadBooksPresenter.roadBookAddRoadBookToBasketHandler = function roadBookAddRoadBookToBasketHandler(roadBookId) {
    roadBooksPresenter.basket.addRoadBook(roadBookStore.getById(roadBookId));
    roadBooksPresenter.updateMiniView();
};

module.exports = roadBooksPresenter;