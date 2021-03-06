var roadBooksPresenter = require('./presenters/roadBooksPresenter');
var roadBookPresenter = require('./presenters/roadBookPresenter');
var basketPresenter = require('./presenters/basketPresenter');
var basketStore = require('./stores/basketStore');
var basket = require('./models/Basket');

function router(hash) {
    switch (true) {
        case hash.length===0:
        case /home/.test(hash):
            roadBooksPresenter.init(document, basket);
            break;
        case /basket/.test(hash):
            var hashValues = hash.split("/");
            if(hashValues[2]){
                basket = basketStore.getById(hashValues[2]);
            }
            basketPresenter.init(document,basket);
            break;
        case /roadbook/.test(hash):
            var hashValues = hash.split("/");
            roadBookPresenter.init(document, basket, hashValues[2]);
            break;
        case /orderExecute/.test(hash):
            var hashValues = hash.split("/");
            console.log(hashValues);
            basketPresenter.init(document,basket);
            break;
    }
}
document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("hashchange", function(hashChangeEvent) {
        var hash = hashChangeEvent.target.location.hash;
        router(hash);
    }, false);
    var hash = window.location.hash;
    router(hash);
});