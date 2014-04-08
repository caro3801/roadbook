/**
 * Created with IntelliJ IDEA.
 * User: Tigrou
 * Date: 22/02/2014
 * Time: 19:19
 * To change this template use File | Settings | File Templates.
 */
var chai = require("chai");

var expect = chai.expect;
var assert = chai.assert;
var PaypalBasket = require("../../models/paypalBasket");

describe('PaypalBasket', function(){
    var paypalBasket = {};
    var transaction = {};
    beforeEach(function(){
        paypalBasket = PaypalBasket.create();
        transaction = paypalBasket.createTransaction();
    });
    it('test structure api paypal', function(){
        var expected = {
           "intent": "sale",
           "payer": {
               "payment_method": "paypal"
           },
           "redirect_urls": {},
           "transactions": [
               {
                   "amount": {
                       "currency": "EUR",
                       "total": "605.00",
                       "details": {
                           "shipping": "5",
                           "subtotal": "500.00",
                           "tax": "100.00"
                       }
                   },
                   'item_list': {
                       'items': [
                           {
                               'quantity':'1',
                               'name':'proot',
                               'price':'500.00',
                               'currency': "EUR"
                           }
                       ]
                   }
               }
           ]
        };
        expected.redirect_urls.return_url = "return";
        expected.redirect_urls.cancel_url = "cancel";
        paypalBasket.redirect_urls.return_url = "return";
        paypalBasket.redirect_urls.cancel_url = "cancel";

        transaction.addItem(1, 1);

        assert.equal(JSON.stringify(paypalBasket), JSON.stringify(expected));
    })
});