/**
 * Created by Tigrou on 05/01/2014.
 */
"use strict";
var dot = require('dot');
var basketMiniViewTemplate = require('../templates/basketMiniTemplate');

function BasketMiniView(domRequest) {
    this.domRequest = domRequest;
    this.basketMiniViewTemplateFunc = dot.template(basketMiniViewTemplate, undefined, {})
}

BasketMiniView.prototype.render = function basketMiniViewRender(dto) {
    this.domRequest.querySelector("#menu").innerHTML = this.basketMiniViewTemplateFunc(dto);
};

module.exports = BasketMiniView;