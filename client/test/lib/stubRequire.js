/**
 * Created by Tigrou on 15/12/2013.
 */
var Module = require('module');
function stubr() {
    var originRequire = Module.prototype.require;
}