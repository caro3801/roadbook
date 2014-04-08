/**
 * Created by Tigrou on 06/12/2013.
 */
"use strict";
var chai = require("chai");
var expect = chai.expect;

var Basket = require("../../src/models/Basket");
var RoadBook = require("../../src/models/RoadBook");
var BasketPresenter = require("../../src/presenters/basketPresenter");

describe ('Basket Presenter', function (){
    before(function(){
        this.basket = new Basket();
        this.roadBook1 = new RoadBook();
        this.roadBook1.title = "toto";
        this.roadBook1.price = 50;

        this.roadBook2 = new RoadBook();
        this.roadBook2.title = "titi";
        this.roadBook2.price = 500;

        this.basket.addRoadBook(this.roadBook1);

        this.basket.addRoadBook(this.roadBook2);
        this.basket.addRoadBook(this.roadBook2);

    });
});