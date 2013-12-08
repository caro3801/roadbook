/**
 * Created with IntelliJ IDEA.
 * User: Tigrou
 * Date: 17/11/2013
 * Time: 18:05
 * To change this template use File | Settings | File Templates.
 */
var chai = require("chai");

var expect = chai.expect;
var RoadBook = require('../../src/models/RoadBook');

describe('RoadBook', function(){
    describe('parse', function(){
        it('il doit retourner un roadbook à partir d\'un object js', function(){
            var objRoadBook = {
                "id": 1,
                "title": "proot",
                "country": "france",
                "distance": 15,
                "difficulty": 5,
                "price": 500,
                "summary": "Nam congue nulla in lorem suscipit, in egestas risus tempor. Cras non nisl posuere, accumsan dolor vel, feugiat dui. Suspendisse facilisis nec nibh sed vehicula. Aenean id condimentum purus. Praesent tincidunt tellus non ultrices viverra. "
            };

            var actual = new RoadBook();
            actual.parse(objRoadBook);

            expect(actual).to.be.an.instanceof(RoadBook);
        }),
        it('toutes les propriétés doivent être bien positionnées', function(){
            var objRoadBook = {
                "id": 1,
                "title": "proot",
                "country": "france",
                "distance": 15,
                "difficulty": 5,
                "price": 500,
                "summary": "Nam congue nulla in lorem suscipit, in egestas risus tempor. Cras non nisl posuere, accumsan dolor vel, feugiat dui. Suspendisse facilisis nec nibh sed vehicula. Aenean id condimentum purus. Praesent tincidunt tellus non ultrices viverra. "
            };

            var actual = new RoadBook();
            actual.parse(objRoadBook);

            expect(actual.id).to.equal(objRoadBook.id);
            expect(actual.title).to.equal(objRoadBook.title);
            expect(actual.country).to.equal(objRoadBook.country);
            expect(actual.distance).to.equal(objRoadBook.distance);
            expect(actual.difficulty).to.equal(objRoadBook.difficulty);
            expect(actual.price).to.equal(objRoadBook.price);
            expect(actual.summary).to.equal(objRoadBook.summary);
        }),
        it('si le roadbook a un prix negatif on leve une exception', function(){

            var actual = new RoadBook();
            var fn = function(){
                actual.price = -50;
            };
            expect(fn).to.throw("prix du roadbook negatif");
        })
    }),
    describe('fromJSON',function(){
      it('il doit retourner un RoadBook à partir d\'un JSON le représentant',function(){
          var jsonRoadBook = {
              "id": 1,
              "title": "proot",
              "country": "france",
              "distance": 15,
              "difficulty": 5,
              "price": 500,
              "summary": "Nam congue nulla in lorem suscipit, in egestas risus tempor. Cras non nisl posuere, accumsan dolor vel, feugiat dui. Suspendisse facilisis nec nibh sed vehicula. Aenean id condimentum purus. Praesent tincidunt tellus non ultrices viverra. "
          };
          var actual = RoadBook.fromJSON(JSON.stringify(jsonRoadBook));

          expect(actual instanceof RoadBook).to.equal(true);

      })  
    })        
})