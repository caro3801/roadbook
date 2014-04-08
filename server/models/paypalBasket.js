"use strict";
var Transaction = require("./transaction");
var taxeFR = 0.2;
var paypalBasketDescriptor = {
    'prototype': {
        'createTransaction': function() {
            var transaction = Transaction.create();
            this.transactions.push(transaction);
            return transaction;
        },
        'getSubTotal': function () {
            var sum = 0;
            for (var i = 0; this.items.length; i++) {
                var taxe = this.items[i].price * taxeFR;
                sum += (this.items[i].price - taxe) * this.items[i].quantity;
            }
            return sum;
        },
        'getTotal': function (shipping) {
            shipping = shipping || 0;
            var totalTaxe = this.getSubTotal() * taxeFR;
            return this.getSubTotal() + totalTaxe + shipping;
        }
    },
    'property': {
        'intent': {'value': "sale", "writable":true, "enumerable":true},
        'payer': {'value':{
            "payment_method": "paypal"
        }, "writable":true, "enumerable":true},
        "redirect_urls": {'value':{'return_url':"",'cancel_url':""}, "writable":true, "enumerable":true},
        "transactions": {'value':null, "writable":true, "enumerable":true}
    }
};
var PaypalBasket = {
    create:function(){
        var o = Object.create(paypalBasketDescriptor.prototype, paypalBasketDescriptor.property);
        o.transactions = [];
        return o;
    }
};
module.exports = PaypalBasket;