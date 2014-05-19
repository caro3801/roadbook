/**
 * Created with IntelliJ IDEA.
 * User: Tigrou
 * Date: 18/11/2013
 * Time: 22:36
 * To change this template use File | Settings | File Templates.
 */
var roadBookStore = require("../stores/RoadBookStore");
var RoadBookView = require("../views/RoadBookView");
var BasketMiniView = require("../views/BasketMiniView");
var RoadBookFormView = require("../views/RoadBookFormView");

var roadBookPresenter = {};

roadBookPresenter.init = function roadBookPresenterInit(domRequest, basket, id) {
    this.dom = domRequest;
    this.view = new RoadBookView(domRequest);
    this.view2 = new BasketMiniView(domRequest);
    this.model = roadBookStore.getById(id);
    this.basket = basket;
    this.updateView();
};

roadBookPresenter.editRoadBook = function roadBookPresenterEditRoadBook() {
    var view = new RoadBookFormView(roadBookPresenter.dom);
    view.render(roadBookPresenter.model);
    view.installSaveRoadBook(roadBookPresenter.saveRoadBookHandler);
};

roadBookPresenter.updateView = function roadBookPresenterUpdateView() {
    var roadBook = this.model ;
    this.view.render(roadBook);
    this.attachHandler();
};
roadBookPresenter.updateMiniView = function roadBookPresenterUpdateMiniView(){
    var dtoBasketMini = {};
    dtoBasketMini.nbItems = this.basket.getNbTotalItem();
    this.view2.render(dtoBasketMini);
};
roadBookPresenter.attachHandler = function basketPresenterAttachHandler() {
    this.view.installAddRoadBookToBasketHandler(roadBookPresenter.roadBookAddRoadBookToBasketHandler);
    this.view.installEditRoadBookHandler(roadBookPresenter.editRoadBook);
};

roadBookPresenter.roadBookAddRoadBookToBasketHandler = function roadBookAddRoadBookToBasketHandler(roadBookId) {
    roadBookPresenter.basket.addRoadBook(roadBookStore.getById(roadBookId));
    roadBookPresenter.updateMiniView();
};

roadBookPresenter.saveRoadBookHandler = function saveRoadBookHandler(roadBookData) {
    for(var key in roadBookData) {
        roadBookPresenter.model[key] = roadBookData[key];
    }
    roadBookStore.save(roadBookPresenter.model);
    roadBookPresenter.updateView();
};

module.exports = roadBookPresenter;
