var data = require("../data/roadBooks");

exports.index = function (req, res) {
    res.json(data);
};

exports.roadBookInfos = function (req, res) {
    var values = data.roadBooks.filter(function(elem) {
        return elem.id == req.params.id;
    });
    res.json(values[0]);
};