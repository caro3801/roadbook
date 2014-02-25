"use strict";
var roadBooks = require("../data/roadBooks").roadBooks;
var Amount = require("./amount");
var Item = require("./item");
var ItemList = require("./itemList");
var transactionDescriptor = {
    'prototype': {
        'addItem': function (itemId, quantity) {
            var filterItems = roadBooks.filter(function (roadBook) {
                return roadBook.id == itemId;
            });
            var filterItem = filterItems[0];
            var item = Item.create({
                'quantity': quantity,
                'name': filterItem.title,
                'price': filterItem.price
            });
            this.item_list.addItem(item);
            this.amount.addItemPrice(item.priceValue);
        }
    },
    'property': {
        'amount':{'value':null, "writable":true, "enumerable":true},
        'description':{'value':"", "writable":true, "enumerable":false},
        'item_list':{'value':null, "writable":true, "enumerable":true},
        'related_resources':{'value':[], "writable":true, "enumerable":false}
    }
};
var Transaction = {
    create:function(){
        var o = Object.create(transactionDescriptor.prototype, transactionDescriptor.property);
        o.amount=Amount.create();
        o.item_list=ItemList.create();
        return o;
    }
};
module.exports = Transaction;