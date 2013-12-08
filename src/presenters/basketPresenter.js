"use strict";

var BasketViewPresenter = {};

BasketViewPresenter.basketFullView = function basketViewPresenterBasketFullView(basket) {
    var dto = {};
    dto.totalPrice = basket.getTotalPrice();
    dto.items = [];
    var basketItems = basket.items;
    for(var i= 0; i < basketItems.length; i++) {
        var basketItem = basketItems[i];
        dto.items.push({
            'title': basketItem.item.title,
            'quantity':basketItem.quantity,
            'unityPrice': basketItem.item.price,
            'totalPriceItem':basketItem.quantity * basketItem.item.price
        });
    }
    return dto;
};


module.exports = BasketViewPresenter;