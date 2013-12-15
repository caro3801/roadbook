var roadBooksPresenter = require('./presenters/roadBooksPresenter');
var roadBookPresenter = require('./presenters/roadBookPresenter');
var basketPresenter = require('./presenters/basketPresenter');
var basket = require('./models/Basket');

function router(hash) {
    switch (true) {
        case hash.length===0:
        case /home/.test(hash):
            roadBooksPresenter.init(document, basket);
            break;
        case /basket/.test(hash):
            basketPresenter.init(document,basket);
            break;
        case /roadbook/.test(hash):
            var hashValues = hash.split("/");
            roadBookPresenter.init(document, basket, hashValues[1]);
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