/**
 * Created with IntelliJ IDEA.
 * User: Tigrou
 * Date: 18/11/2013
 * Time: 21:59
 * To change this template use File | Settings | File Templates.
 */
var EventEmitter = require("EventEmitter2").EventEmitter2;

var eventBus = new EventEmitter();
module.exports = eventBus;

