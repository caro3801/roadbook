var repository = require('../lib/repository');
var repositoryOrders = {
    'collection': repository.getCollection('orders'),
    'create': function (order, callback) {
        this.collection.insert(order, function(err, docs) {
            if(err) {
                //FIXME à gérer
                throw new Error('Insertion fail');
            }

            callback();
        })
    },
    'consult': function(orderId, callback) {
        this.collection.findOne({id:orderId}, function(err, order) {
            if(err) {
                //FIXME à gérer
                throw new Error('Insertion fail');
            }

            callback(order);
        })
    },
    'payed': function(orderId, callback) {
        this.collection.findAndModify({id:orderId},['id'],{$set:{'status':'payed'}}, function(err, order) {
            if(err) {
                //FIXME à gérer
                throw new Error('Insertion fail');
            }
            callback(order);
        })
    }
};
module.exports=repositoryOrders;