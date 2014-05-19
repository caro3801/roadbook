var dot = require('dot');
var roadBookFormTemplate = require('../templates/roadBookFormTemplate.js');

function RoadBookView(domRequest){
    this.domRequest = domRequest;
    this.roadBookTemplateFunc = dot.template(roadBookFormTemplate,undefined,{});
}

RoadBookView.prototype.render = function roadBookViewRender(dtoRoadBook){
    var html = this.roadBookTemplateFunc(dtoRoadBook);
    this.domRequest.querySelector(".content").innerHTML = html;
};

RoadBookView.prototype.installSaveRoadBook = function installAddRoadBookToBasketHandler(saveRoadBook){
    var button = this.domRequest.getElementById("saveRoadBook");

    button.addEventListener("submit", function callBackSaveRoadBookHandler(domEvent) {
        var data = {};
        var elements = this.elements;
        for(var i = 0; i < elements.length; i++) {
            var elem = elements[i];
            if(elem.name) {
                data[elem.name] = elem.value;
            }
        }
        domEvent.stopPropagation();
        domEvent.preventDefault();
        saveRoadBook(data);
    });
};

RoadBookView.prototype.installEditRoadBookHandler = function installEditRoadBookHandler(editRoadBook){
    var button = this.domRequest.getElementById("editRoadBook");

    button.addEventListener("click", function callBackInstallRoadBookHandler(domEvent) {
        editRoadBook();
    });
};

module.exports = RoadBookView;
