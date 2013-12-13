function Basket(items){
    this.total=0;
    this.items = items ? items : [];
}

Basket.prototype.getNbItem = function basketNbItem(){
    return this.items.length ;
};

Basket.prototype.getTotalPrice = function basketTotalPrice(){
    return this.total ;
};
Basket.prototype.addRoadBook = function addRoadBook(item){
    this.total +=item.price;
    var basketItem = this.getBasketItemByItem(item);
    if(basketItem) {
        basketItem.incrementQuantity();
    } else {
        this.items.push(new BasketItem(item));
    }
};

Basket.prototype.delRoadBook = function delRoadBook(item){
    this.total -=item.price;
    var basketItem = this.getBasketItemByItem(item);
    if(basketItem) {
        if(basketItem.quantity<=1){
            this.items.splice(this.items.indexOf(basketItem));
        }else {
            basketItem.decrementQuantity();
        }
    } else {
        throw new Error("l'élément que vous cherchez à supprimer n'existe pas");
    }
};


Basket.prototype.getBasketItemByItem = function getBasketItemByItem(item){
    var filterBasket = this.items.filter(function(basketItem){
        return basketItem.item === item;
    });
    return filterBasket.length > 0 ? filterBasket[0] : null;
};

Basket.prototype.getQuantityOfItem = function getBasketQuantityOfItem(item){

    var basketItem = this.getBasketItemByItem(item);
    var quantity=0;

    if(basketItem) {
        quantity= basketItem.quantity;
    }

    return quantity;
};


Basket.prototype.getNbTotalItem = function getBasketTotalItem(){
    var nbTotalItem = 0;
    var nb=this.getNbItem();

    for (var i=0;i<nb;i++){
        nbTotalItem+=this.items[i].quantity;
    }
    return nbTotalItem;
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

module.exports = Basket;