"use strict";
var chai = require("chai");
var sinon = require("sinon");

var XHR = require('../../src/libs/xhr');
var expect = chai.expect;
var RoadBook = require('../../src/models/RoadBook');
var RoadBookService = require('../../src/services/roadBookService');

var xhrStub = {
    'open':function(){},
    'send':function(){},
    'status':200
};

describe('RoadBook Service', function(){

    before(function () {
        XHR.createXMLHttpRequest = function createXMLHttpRequest() {
            return xhrStub;
        };
    }),

    after(function () {}),

    describe('findById', function(){
        it('il doit retourner un roadbook à partir de son identifiant', function(){
            var srcRoadBook = {
                "id": 1,
                "title": "proot",
                "country": "france",
                "distance": 15,
                "difficulty": 5,
                "price": 500,
                "summary": "Nam congue nulla in lorem suscipit, in egestas risus tempor. Cras non nisl posuere, accumsan dolor vel, feugiat dui. Suspendisse facilisis nec nibh sed vehicula. Aenean id condimentum purus. Praesent tincidunt tellus non ultrices viverra. "
            };

            xhrStub.responseText = JSON.stringify(srcRoadBook);

            var expectedRoadBook = new RoadBook();
            expectedRoadBook.parse(srcRoadBook);

            var actual = RoadBookService.findById(expectedRoadBook.id);

            expect(actual).to.deep.equal(expectedRoadBook);
        })

    })
});