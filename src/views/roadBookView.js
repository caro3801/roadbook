var dot = require('dot');
var eventBus = require('../utils/EventBus');
var roadBookTemplate = require('../templates/roadBookTemplate.js');
var roadBookPresenter = require('../presenters/roadBookPresenter');

function RoadBookView(id){
    this.id=id;
    this.roadBookTemplateFunc = dot.template(roadBookTemplate,undefined,{});
}

RoadBookView.prototype.render = function roadBookViewRender(){
    var html = this.roadBookTemplateFunc(roadBookPresenter.displayInfos(this.id));
    document.querySelector("#content").innerHTML = html;
}

 module.exports = RoadBookView;