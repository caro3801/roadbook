"use strict";
var paypal = require('paypal-rest-sdk');
var PaypalBasket = require("../models/paypalBasket");
var repositoryOrders = require('../repository/orders');
var uuid = require('node-uuid');
var config = {};
var order_id = 0;
var execute_url = "";
var payment_id = 0;
exports.order = function (req, res) {
    var paypalBasket = PaypalBasket.create();
    var transaction = paypalBasket.createTransaction();
    var basket = req.body.basket;
    for(var i=0; i<basket.length; i++) {
        var item = basket[i];
        transaction.addItem(item.id, item.quantity);
    }
    order_id = uuid.v4();
    paypalBasket.redirect_urls.return_url = "http://localhost:3000/payment/execute?order_id=" + order_id;
    paypalBasket.redirect_urls.cancel_url = "http://localhost:3000/payment/cancel?order_id=" + order_id;
    paypal.payment.create(paypalBasket, {}, function (err, resp) {
        if (err) {
            //FIXME à gérer
            res.json({'redirect':"http://localhost:3000/#/paypal/error/create"});
        }

        if (resp) {
            repositoryOrders.create({'id':order_id, 'basket': req.body.basket, 'status':'create'}, function () {
                payment_id = resp.id;
                var link = resp.links;
                for (var i = 0; i < link.length; i++) {
                    console.log(link[i].href);
                    if (link[i].rel === 'approval_url') {
                        res.json({'redirect':link[i].href});
                    } else if(link[i].rel === 'execute') {
                        execute_url = link[i].href;
                    }
                }
            });
        }
    });
};

exports.consult = function(req, res) {
    repositoryOrders.consult(req.params.id, function(order){
        res.json(order.basket);
    });
};

exports.orderCancel = function(req, res) {
    res.redirect("http://localhost:3000/#/basket/"+req.query.order_id);
};

exports.orderExecute =  function(req, res) {
    var payer = { payer_id : req.query.PayerID };
    paypal.payment.execute(payment_id, payer, {}, function (err, resp) {
        if (err) {
            //FIXME à gérer
            res.redirect("http://localhost:3000/#/paypal/error/execute");
        }
        if (resp) {
            repositoryOrders.payed(req.query.order_id, function(){
                res.redirect("http://localhost:3000/#/basket/"+req.query.order_id);
            });
        }
    });
};

exports.init = function (c) {
    config = c;
    paypal.configure(c.api);
};