"use strict";
var dot = require('dot');
var basketViewTemplate = require('../templates/basketTemplate');

function BasketView(domRequest) {
    this.domRequest = domRequest;
    this.basketViewTemplateFunc = dot.template(basketViewTemplate, undefined, {})
}

BasketView.prototype.render = function basketViewRender(dto) {
    this.domRequest.querySelector("#content").innerHTML = this.basketViewTemplateFunc(dto);
};


BasketView.prototype.installIncrementRoadBookToBasketHandler = function installIncrementRoadBookToBasketHandler(basketIncrementRoadBookToBasketHandler){
    this.installBasketListHandler(basketIncrementRoadBookToBasketHandler,".increment") ;
};
BasketView.prototype.installDecrementRoadBookToBasketHandler = function installDecrementRoadBookToBasketHandler(basketDecrementRoadBookToBasketHandler){
    this.installBasketListHandler(basketDecrementRoadBookToBasketHandler,".decrement") ;
};
BasketView.prototype.installDeleteRoadBookToBasketHandler = function installDeleteRoadBookToBasketHandler(basketDeleteRoadBookToBasketHandler){
    this.installBasketListHandler(basketDeleteRoadBookToBasketHandler,".trashMe") ;
};
BasketView.prototype.installBasketListHandler = function installBasketListHandler(basketListHandler, DOMSelector){
    var buttons = this.domRequest.querySelectorAll(DOMSelector);
    var i=0;
    for (;i<buttons.length;i++){
        buttons[i].addEventListener("click", function callBackInstallRoadBookHandler(domEvent) {
            var domObject = domEvent.currentTarget;
            /** @namespace domObject.dataset.roadbookId : id du roadbook cliqué */
            var roadBookId = domObject.dataset.roadbookId;
            basketListHandler(roadBookId);
        });
    }
};
BasketView.prototype.installBasketPaymentHandler = function installBasketPaymentHandler(basketPaymentHandler) {
    var payment = this.domRequest.querySelector("#payment");
    payment.addEventListener("click", basketPaymentHandler);
};
module.exports = BasketView;