"use strict";
var paypal = require('paypal-rest-sdk');
var PaypalBasket = require("../models/paypalBasket");
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
        console.log("create ",resp);
        if (err) {
            console.log(err);
        }

        if (resp) {
            var now = (new Date()).toISOString().replace(/\.[\d]{3}Z$/, 'Z ');
//            db.insertOrder(order_id, req.session.email, resp.id, resp.state, req.session.amount, req.session.desc, now, function (err, order) {
//                if (err || !order) {
//                    console.log(err);
//                    res.render('order_detail', { message: [{desc: "Could not save order details", type: "error"}]});
//                } else {
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
//                }
//            });
        }
    });
};

exports.orderCancel = function(req, res) {
    res.redirect("http://localhost:3000/");
};

exports.orderExecute =  function(req, res) {
    var payer = { payer_id : req.query.PayerID };
    paypal.payment.execute(payment_id, payer, {}, function (err, resp) {
        if (err) {
            console.log(err);
        }
        if (resp) {
            console.log(resp);
            res.redirect("http://localhost:3000/");
        }
    });
};

exports.init = function (c) {
    config = c;
    paypal.configure(c.api);
    //db.configure(c.mongo);
};