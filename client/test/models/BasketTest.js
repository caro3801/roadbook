var expect = require("chai").expect;

var basket = require("../../src/models/Basket");
var RoadBook = require("../../src/models/RoadBook");

describe('basket', function(){
    beforeEach(function(){
        basket.items = [];
        basket.basketTotalPrice = 0;
    });
    describe('getNbItem', function(){
        it('si le panier est vide il doit retourner zero', function(){
            var actual = basket;

            expect(actual.getNbItem()).to.be.equal(0);
        });
        it('si le panier n est pas vide il doit retourner le nombre d items que le panier contient', function(){
            var expected = [0,1];

            var actual = basket;
            basket.items = expected;

            expect(actual.getNbItem()).to.be.equal(expected.length);
        });
    });

    describe('addRoadBook', function(){
        it('le roadbook ajouté doit etre present dans le panier', function(){
            var expected = new RoadBook();

            basket.addRoadBook(expected);

            expect(basket.items[0].item).to.be.equal(expected);
        });
        it('lors de l ajout d un roadbook, le prix total du panier doit etre mis a jour (addition des prix des roadbooks)', function(){
            var roadBook = new RoadBook();
            roadBook.price = 50;

            basket.addRoadBook(roadBook);

            expect(basket.getTotalPrice()).to.be.equal(roadBook.price);
        });
        it('lors de l ajout d un meme roadbook, le prix total du panier est mis a jour et la quantite de ce RB est incrementee)', function(){
            var quantite = 3;
            var items = [new RoadBook(),new RoadBook()];
            items[0].id = 1;
            items[0].price = 50;
            items[1].id = 2;
            items[1].price = 25;
            var totalprice=0;
            for (var j=0; j< items.length;j++){

                for (var i=0; i < quantite ; i++){
                    basket.addRoadBook(items[j]);
                    totalprice+=items[j].price;
                }
            }

            expect(basket.getNbItem()).to.be.equal(items.length);
            expect(basket.getTotalPrice()).to.be.equal(totalprice);
            expect(basket.getQuantityOfItem(items[0])).to.be.equal(quantite);
            expect(basket.getNbTotalItem()).to.be.equal(items.length*quantite);

        })
    });
    describe('deleteRoadBook',function(){
       it('lors de la suppression totale d un item, l item n existe plus dans le panier et son prix et sa quantite sont reitres du prix total',function (){

        //THEN
           var roadBook1 = new RoadBook();
           var roadBook2 = new RoadBook();

           roadBook1.id= 1;
           roadBook2.id = 2;
           roadBook1.price = 50;
           roadBook2.price = 25;
           basket.addRoadBook(roadBook1);
           basket.addRoadBook(roadBook1);
           basket.addRoadBook(roadBook2);
           expect(basket.getNbItem()).to.be.equal(2);
        //when
           basket.deleteRoadBook(roadBook1);
        //expected
           expect(basket.getNbItem()).to.be.equal(1);
           expect(basket.getBasketItemByItem(roadBook1)).to.be.null;

       })
    });
    describe('decrementRoadBook',function(){
        it('lors de la suppression d un item n existant qu en une seule quantite dans le panier, l item n est plus present et on met a jour le prix total)',function(){

            //THEN
            var roadBook = new RoadBook();
            basket.addRoadBook(roadBook);
            expect(basket.getTotalPrice()).to.be.equal(roadBook.price);

            //WHEN
            basket.decrementRoadBook(roadBook);

            //EXPECTED
            expect(basket.getNbItem()).to.be.equal(0);
            expect(basket.getTotalPrice()).to.be.equal(0);

        });
        it('lors de la suppression d un item existant en plus d une quantite dans le panier, la quantite de l item doit etre diminuee (et donc maj le prix total)',function(){

            //THEN
            var roadBook = new RoadBook();

            basket.addRoadBook(roadBook);
            basket.addRoadBook(roadBook);
            basket.addRoadBook(roadBook);

            expect(basket.getBasketItemByItem(roadBook).quantity).to.be.equal(3);

            //WHEN
            basket.decrementRoadBook(roadBook);

            //EXPECT
            expect(basket.getBasketItemByItem(roadBook).quantity).to.be.equal(2);
            expect(basket.getTotalPrice()).to.be.equal(roadBook.price*2);

        });
        it('lors de la suppression d un item n existant pas dans le panier, il doit lever une exception',function(){
            //THEN
            var roadBook = new RoadBook();

            //WHEN
            var fn = function(){
                basket.decrementRoadBook(roadBook);
            };

            //EXPECTED
            expect(fn).to.throw("l'élément que vous cherchez à supprimer n'existe pas");
        })
    });

});

