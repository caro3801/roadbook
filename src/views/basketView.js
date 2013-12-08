var dot = require('dot');
var eventBus = require('../utils/EventBus');
var basketViewTemplate = require('../templates/basketViewTemplate.js');
var basketViewPresenter = require('../presenters/basketViewPresenter');

function BasketView() {
    this.basketViewTemplateFunc = dot.template(basketViewTemplate, undefined, {})
}

BasketView.prototype.render = function basketViewRender() {
    var html = this.basketViewTemplateFunc(basketViewPresenter.basketFullView());
};