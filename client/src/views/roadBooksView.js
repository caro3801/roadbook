"use strict";
var dot = require('dot');
var roadBooksTemplate = require('../templates/roadBooksTemplate.html');
var roadBooksListTemplate = require('../templates/roadBooksListTemplate.html');

function RoadBooksView(domRequest) {
   this.domRequest = domRequest;
   this.roadBooksTemplateFunc = dot.template(roadBooksTemplate, undefined, {});
   this.roadBooksListTemplateFunc = dot.template(roadBooksListTemplate, undefined, {});
}

RoadBooksView.prototype.installRoadBookHandler = function roadBooksViewInstallRoadBookHandler(roadBookHandler) {
    var lis = this.domRequest.querySelectorAll("li");

    if (lis.length === 0){
        throw new Error("Longueur de la liste à zéro");
    }
    var i=0;
    for (;i<lis.length;i++){
        lis[i].addEventListener("click", function callBackInstallRoadBookHandler(domEvent) {
            var domObject = domEvent.currentTarget;
            /** @namespace domObject.dataset.roadbookId : id du roadbook cliqué */
            var roadBookId = domObject.dataset.roadbookId;
            /** @namespace domObject.dataset.roadbookTitle : titre du roadbook cliqué */
            var roadBookTitle = domObject.dataset.roadbookTitle;
            roadBookHandler(roadBookId, roadBookTitle);
        });
    }
};

RoadBooksView.prototype.installAddRoadBookToBasketHandler = function installAddRoadBookToBasketHandler(addRoadBookToBasketHandler){
    var buttons = this.domRequest.querySelectorAll("button");

    if (buttons.length === 0){
        throw new Error("Longueur de la liste à zéro");
    }
    var i=0;
    for (;i<buttons.length;i++){
        buttons[i].addEventListener("click", function callBackInstallRoadBookHandler(domEvent) {
            var domObject = domEvent.currentTarget;
            /** @namespace domObject.dataset.roadbookId : id du roadbook cliqué */
            var roadBookId = domObject.dataset.roadbookId;
            addRoadBookToBasketHandler(roadBookId);
        });
    }
};

RoadBooksView.prototype.installFilterRoadBookHandler = function installFilterRoadBookHandler(filterRoadBookHandler){
    var button = this.domRequest.querySelector("#roadbook-filter");

    button.addEventListener("keyup",function callBackfilterRoadBookHandler(domEvent){
        var domObject = domEvent.currentTarget;
        filterRoadBookHandler(domObject.value);
    })
};

RoadBooksView.prototype.render = function roadBooksViewRender(dtoRoadBooks) {
    this.domRequest.querySelector(".content").innerHTML = this.roadBooksTemplateFunc(dtoRoadBooks);
    this.renderList(dtoRoadBooks);
};

RoadBooksView.prototype.renderList = function roadBooksListViewRender(dtoRoadBooks) {
    this.domRequest.querySelector("#roadbook-list-wrapper").innerHTML = this.roadBooksListTemplateFunc(dtoRoadBooks);
};

module.exports = RoadBooksView;