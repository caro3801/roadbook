var dot = require('dot');
var roadBookTemplate = require('../templates/roadBookTemplate.js');

function RoadBookView(domRequest, id){
    this.domRequest = domRequest;
    this.id=id;
    this.roadBookTemplateFunc = dot.template(roadBookTemplate,undefined,{});
}

RoadBookView.prototype.render = function roadBookViewRender(dtoRoadBook){
    var html = this.roadBookTemplateFunc(dtoRoadBook);
    this.domRequest.querySelector("#content").innerHTML = html;
};

RoadBookView.prototype.installAddRoadBookToBasketHandler = function installAddRoadBookToBasketHandler(addRoadBookToBasketHandler){
    var button = this.domRequest.getElementById("addToBasket");

    button.addEventListener("click", function callBackInstallRoadBookHandler(domEvent) {
        var domObject = domEvent.currentTarget;
        /** @namespace domObject.dataset.roadbookId : id du roadbook cliqué */
        var roadBookId = domObject.dataset.roadbookId;
        addRoadBookToBasketHandler(roadBookId);
    });
};

module.exports = RoadBookView;
