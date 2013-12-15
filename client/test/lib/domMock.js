/**
 * Created by Tigrou on 15/12/2013.
 */
var domElementMock = {
    innerHTML:'mock',
    addEventListener: function() {
        console.log('mock addEventListener');
    }
};

function documentMock(){

}

documentMock.querySelector = function querySelector(selector){
    return domElementMock;
};

documentMock.getElementById = function querySelector(selector){
    return domElementMock;
};

documentMock.querySelectorAll = function querySelectorAll(selector){
    return domElementMock;
};

module.exports=documentMock;