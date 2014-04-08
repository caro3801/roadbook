"use strict";
var detailsDescriptor = {
    'prototype': {
    },
    'property': {
        'subtotalValue':{'value':0, "writable":true, "enumerable":false},
        'shippingValue':{'value':0, "writable":true, "enumerable":false},
        'taxValue':{'value':0, "writable":true, "enumerable":false},
        'shipping':{
            get:function(){
                return ''+this.shippingValue;
            }
            , set:function(value){
                this.shippingValue = value;
            }
            , "enumerable":true
        },
        'subtotal':{
            get:function(){
                return ''+this.subtotalValue.toFixed(2);
            }
            , set:function(value){
                this.subtotalValue = value;
            }
            , "enumerable":true
        },
        'tax':{
            get:function(){
                return ''+this.taxValue.toFixed(2);
            }
            , set:function(value){
                this.taxValue = value;
            }
            , "enumerable":true
        },
        'fee':{'value':"", "writable":true, "enumerable":false},
        'tva':{'value':0.20,'writable':false}
    }
};
var Details = {
    create:function(values){
        var o = Object.create(detailsDescriptor.prototype, detailsDescriptor.property);
        for(var key in detailsDescriptor.property) {
            if(values[key]) {
                o[key] = values[key];
            }
        }
        return o;
    }
};
module.exports = Details;