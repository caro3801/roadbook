function XHR(xhr) {
    this.successCallBack = null;
    this.asynchrone = false;
    this.xhr = xhr;
}

XHR.createXMLHttpRequest = function createXMLHttpRequest() {
    return XMLHttpRequest ? new XMLHttpRequest() : {}
};

XHR.prototype.get = function XHRGet(url, asynchrone) {
    this.asynchrone = asynchrone;
    this.xhr.open("GET", url, this.asynchrone);
};

XHR.prototype.send = function XHRSend(params) {
    this.xhr.send(params);
    if(!this.asynchrone) {
        if(this.xhr.status === 200) {
            if(this.successCallBack) {
                this.successCallBack(this.xhr.responseText);
            } else {
                throw new Error("Ton callBack il est où ?");
            }
        }
    }
};

XHR.prototype.addSuccessCallBack = function XHRAddSuccessCallBack(successCallBack) {
    this.successCallBack = successCallBack;
};



module.exports = XHR;