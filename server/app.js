/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var roadBooks = require('./routes/roadbooks');
var payment = require('./routes/paypal');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

var config = require("./config");
payment.init(config);

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/roadBooks', roadBooks.index);
app.get('/roadBook/:id', roadBooks.roadBookInfos);
app.post('/roadBook/:id', roadBooks.save);
app.get('/basket/:id', payment.consult);
app.post('/payment', payment.order);
app.get('/payment/cancel', payment.orderCancel);
app.get('/payment/execute', payment.orderExecute);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});