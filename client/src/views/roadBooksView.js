var dot = require('dot');
var eventBus = require('../utils/EventBus');
var roadBooksTemplate = require('../templates/roadBooksTemplate.js');
var roadBooksPresenter = require('../presenters/roadBooksPresenter');

function RoadBooksView() {
   this.roadBooksTemplateFunc = dot.template(roadBooksTemplate, undefined, {});
}

RoadBooksView.prototype.render = function roadBooksViewRender() {
    var html = this.roadBooksTemplateFunc(roadBooksPresenter.listView());
    document.querySelector("#content").innerHTML = html;
    this.bindEvent();
};

function linkToRoadBook(event){
    eventBus.emit("routes.roadbook.view",event.currentTarget.dataset.roadbookId);
}

RoadBooksView.prototype.bindEvent = function roadBooksViewBindEvent(){
    var lis = document.querySelectorAll("li");

    if (lis.length === 0){
        throw new Error("Longueur de la liste à zéro");
    }
    var i=0;
    for (;i<lis.length;i++){
        lis[i].addEventListener("click", linkToRoadBook);
    }
};


module.exports = RoadBooksView;