"use strict";
var Details = require('./details');

var amountDescriptor = {
    'prototype': {
        'addItemPrice':function(price){
            this.totalValue+=price;
        }
    },
    'property': {
        'totalValue':{'value':0, "writable":true, "enumerable":false},
        'tva':{'value':0.20,'writable':false},
        'currency':{'value':"EUR", 'writable':false, "enumerable":true},
        'total':{
            get:function(){
                var value = this.totalValue+this.details.taxValue+this.details.shippingValue;
                return value.toFixed(2);
            }
            , "enumerable":true
        },
        'details':{
            get:function(){
                var shipping = 5;
                var totalSumItems = this.totalValue;
                var tva =totalSumItems*this.tva;
                return Details.create({'subtotal':totalSumItems, 'tax':tva, 'shipping':shipping});
            }
            , "enumerable":true
        }
    }
};
var Amount = {
    create:function(){
        var o =Object.create(amountDescriptor.prototype, amountDescriptor.property);
        return o;
    },
    createByItemList: function(item_list){
        var o = this.create();
        var items = item_list.items;
        for(var i = 0; i< items.length; i++) {
            o.addItemPrice(items.priceValue);
        }
        return o;
    }
};
module.exports = Amount;