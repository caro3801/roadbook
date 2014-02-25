"use strict";
var itemDescriptor = {
    'prototype': {
    },
    'property': {
        'quantityValue':{'value':0, "writable":true, "enumerable":false},
        'priceValue':{'value':0, "writable":true, "enumerable":false},
        'quantity':{
            get:function(){
                return ''+this.quantityValue;
            }
            , set:function(value){
                    this.quantityValue = value;
                }
            , "enumerable":true
        },
        'name':{'value':"", "writable":true, "enumerable":true},
        'price':{
            get:function(){
                return this.priceValue.toFixed(2);
            }
            , set:function(value){
                this.priceValue = value;
            }
            , "enumerable":true
        },
        'currency': {'value':'EUR', "writable":true, "enumerable":true}
    }
};
var Item = {
    create:function(elem){
        var o = Object.create(itemDescriptor.prototype, itemDescriptor.property);
        for(var key in itemDescriptor.property){
            if(elem[key]) {
                o[key] = elem[key];
            }
        }
        return o;
    }
};
module.exports = Item;