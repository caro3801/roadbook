"use strict";
var itemListDescriptor = {
    'prototype': {
        'addItem': function (item) {
            this.items.push(item);
        }
    },
    'property': {
        'items':{'value':null, "writable":true, "enumerable":true},
        'shipping_address':{'value':[], "writable":true, "enumerable":false}
    }
};
var ItemList = {
    create:function(){
        var o = Object.create(itemListDescriptor.prototype, itemListDescriptor.property);
        o.items = [];
        return o;
    }
};
module.exports = ItemList;