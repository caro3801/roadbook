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
    this.xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
};

XHR.prototype.post = function XHRPost(url, asynchrone) {
    this.asynchrone = asynchrone;
    this.xhr.open("POST", url, this.asynchrone);
    this.xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
};

XHR.prototype.send = function XHRSend(params) {
    try{
    this.xhr.send(params);
    } catch(e) {
        console.log(e);
    }
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