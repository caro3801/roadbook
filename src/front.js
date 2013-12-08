var RoadBooksView = require("./views/roadBooksView");
var RoadBookView = require("./views/roadBookView");
var eventBus = require("./utils/EventBus");
var viewRoadBooks = new RoadBooksView();
document.addEventListener("DOMContentLoaded", function(event) {
    viewRoadBooks.render();
    eventBus.on("routes.roadbook.view",function callBackRoadBookView(id){
        var viewRoadBook = new RoadBookView(id);
        viewRoadBook.render();
    })
});