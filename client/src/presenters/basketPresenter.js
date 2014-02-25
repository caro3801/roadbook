"use strict";

var BasketView = require('../views/BasketView');
var roadBookStore = require('../stores/RoadBookStore');

var basketPresenter = {};

basketPresenter.init = function initBasketViewPresenter(domRequest,basket) {
    this.view = new BasketView(domRequest);
    this.model = basket;
    this.updateView();
};

basketPresenter.updateView = function basketPresenterView() {
    var dto = {};
    dto.basketTotalPrice = this.model.getTotalPrice();
    dto.items = [];
    var basketItems = this.model.items;
    for(var i= 0; i < basketItems.length; i++) {
        var basketItem = basketItems[i];
        dto.items.push({
            'id' : basketItem.item.id,
            'title': basketItem.item.title,
            'quantity':basketItem.quantity,
            'uprice': basketItem.item.price,
            'price':basketItem.quantity * basketItem.item.price
        });
    }
    this.view.render(dto);
    this.attachHandler();

};
basketPresenter.attachHandler = function basketPresenterAttachHandler() {
    this.view.installIncrementRoadBookToBasketHandler(basketPresenter.basketIncrementRoadBookToBasketHandler);
    this.view.installDecrementRoadBookToBasketHandler(basketPresenter.basketDecrementRoadBookToBasketHandler);
    this.view.installDeleteRoadBookToBasketHandler(basketPresenter.basketDeleteRoadBookToBasketHandler);
    this.view.installBasketPaymentHandler(basketPresenter.basketPaymentHandler);
};
basketPresenter.basketIncrementRoadBookToBasketHandler = function basketIncrementRoadBookToBasketHandler(roadBookId) {
    basketPresenter.model.addRoadBook(roadBookStore.getById(roadBookId));
    basketPresenter.updateView();
};
basketPresenter.basketDecrementRoadBookToBasketHandler = function basketDecrementRoadBookToBasketHandler(roadBookId) {
    basketPresenter.model.decrementRoadBook(roadBookStore.getById(roadBookId));
    basketPresenter.updateView();
};
basketPresenter.basketDeleteRoadBookToBasketHandler = function basketDeleteRoadBookToBasketHandler(roadBookId) {
    basketPresenter.model.deleteRoadBook(roadBookStore.getById(roadBookId));
    basketPresenter.updateView();
};
basketPresenter.basketPaymentHandler = function basketPaymentHandler() {
    var redirectUrl = roadBookStore.sendBasket(basketPresenter.model);
    window.location.assign(redirectUrl);
};
module.exports = basketPresenter;