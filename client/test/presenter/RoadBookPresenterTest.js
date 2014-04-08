/**
 * Created by Tigrou on 14/12/2013.
 */
"use strict";
var chai = require("chai");
var expect = chai.expect;

var XHR = require('../../src/libs/xhr');
var documentMock = require('../lib/domMock');

var RoadBook = require("../../src/models/RoadBook");
var roadBookPresenter = require("../../src/presenters/roadBookPresenter");
var basket = require("../../src/models/Basket");

var xhrStub = {
    'open':function(){},
    'send':function(){},
    'status':200
};

describe ('RoadBook Presenter', function (){
    before(function(){
        this.roadbook = new RoadBook();
        this.roadbook.id = 1;
        this.roadbook.title = "proot";
        this.roadbook.country = "france";
        this.roadbook.summary = "test";
        this.roadbook.distance = 20;
        this.roadbook.difficulty = 1;
        this.roadbook.price = 10;
        var roadbooktmp = this.roadbook;
        XHR.createXMLHttpRequest = function createXMLHttpRequest() {
            xhrStub.responseText = JSON.stringify(roadbooktmp);
            return xhrStub;
        };
        roadBookPresenter.init(documentMock, basket, this.roadbook.id);
    });
    describe('gestion du panier', function(){
        it('ajouter un roadbook dans le panier',function(){
            //given
            roadBookPresenter.model=this.roadbook;
            expect(roadBookPresenter.basket.getNbItem()).to.equal(0);
            //when
            roadBookPresenter.basket.addRoadBook(this.roadbook);
            // then
            expect(roadBookPresenter.basket.getNbItem()).to.equal(1);
            expect(roadBookPresenter.basket.getQuantityOfItem(this.roadbook)).to.equal(1);
        })
    });
});
