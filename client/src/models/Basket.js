var basket = {
    basketTotalPrice : 0,
    items : []
};

basket.getNbItem = function basketNbItem(){
    return this.items.length ;
};

basket.getTotalPrice = function basketTotalPrice(){
    return this.basketTotalPrice ;
};
basket.addRoadBook = function addRoadBook(item){
    this.basketTotalPrice +=item.price;
    var basketItem = this.getBasketItemByItem(item);
    if(basketItem) {
        basketItem.incrementQuantity();
    } else {
        this.items.push(new BasketItem(item));
    }
};

basket.decrementRoadBook = function decrementRoadBook(item){
    this.basketTotalPrice -=item.price;
    var basketItem = this.getBasketItemByItem(item);
    if(basketItem) {
        if(basketItem.quantity<=1){
            this.deleteBasketItem(basketItem);
        }else {
            basketItem.decrementQuantity();
        }
    } else {
        throw new Error("l'élément que vous cherchez à supprimer n'existe pas");
    }
};

basket.deleteRoadBook = function deleteRoadBook(item){
    var basketItem = this.getBasketItemByItem(item);
    if(basketItem) {
        this.basketTotalPrice -= basketItem.quantity*basketItem.item.price;
        basketItem.quantity=0;
        this.deleteBasketItem(basketItem);
    } else {
        throw new Error("l'élément que vous cherchez à supprimer n'existe pas");
    }
};

basket.deleteBasketItem = function deleteBasketItem(basketItem) {
    this.items.splice(this.items.indexOf(basketItem),1);
};

basket.getBasketItemByItem = function getBasketItemByItem(item){
    var filterBasket = this.items.filter(function(basketItem){
        return basketItem.item.id === item.id;
    });
    return filterBasket.length > 0 ? filterBasket[0] : null;
};

basket.getQuantityOfItem = function getBasketQuantityOfItem(item){

    var basketItem = this.getBasketItemByItem(item);
    var quantity=0;

    if(basketItem) {
        quantity= basketItem.quantity;
    }

    return quantity;
};


basket.getNbTotalItem = function getBasketTotalItem(){
    var nbTotalItem = 0;
    var nb=this.getNbItem();

    for (var i=0;i<nb;i++){
        nbTotalItem+=this.items[i].quantity;
    }
    return nbTotalItem;
};

basket.toJSON = function toJSON(){
    var json = [];
    for(var i = 0; i<this.items.length; i++){
        json.push(this.items[i]);
    }
    return {basket:json};
};

function BasketItem(item){
    this.item=item;
    this.quantity=1;
}
BasketItem.prototype.incrementQuantity = function(){
    this.quantity++;
};
BasketItem.prototype.decrementQuantity = function(){
    this.quantity--;
};

BasketItem.prototype.toJSON = function toJSON(){
    return {id:this.item.id,quantity:this.quantity};
};


module.exports = basket;