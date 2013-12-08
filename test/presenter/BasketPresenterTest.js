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
        this.roadBook = new RoadBook();
        this.roadBook.price = 50;
        this.basket.addRoadBook(this.roadBook);

    })  ,
    describe('full view', function(){
        it('il doit generer un objet qui contient tous les items du panier',function(){
           //given

           //when
            // then

        }),
        it('il doit restituer l\'intitulé de chaque item ',function(){
            //given
            var expectTitle = "toto";
            this.roadBook.title = expectTitle;
            //when
            var actualBPFV = BasketPresenter.basketFullView(this.basket);
            // then
            expect(actualBPFV.items.length).to.equal(1);
            expect(actualBPFV.items[0].title).to.equal(expectTitle);
        }),
        it('il doit restituer la quantité de chaque item ',function(){

        }) ,
        it('il doit restituer le prix unitaire de chaque item ',function(){

        }) ,
        it('il doit calculer le prix total d un item ',function(){

        })  ,
        it('il doit restituer le prix total du panier',function(){

        })
    })
});