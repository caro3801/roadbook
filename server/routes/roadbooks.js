var datas = {'roadBooks': [
    {
        "id": 1,
        "title": "proot",
        "country": "france",
        "distance": 15,
        "difficulty": 5,
        "price": 500,
        "summary": "Nam congue nulla in lorem suscipit, in egestas risus tempor. Cras non nisl posuere, accumsan dolor vel, feugiat dui. Suspendisse facilisis nec nibh sed vehicula. Aenean id condimentum purus. Praesent tincidunt tellus non ultrices viverra. "
    },
    {
        "id": 2,
        "title": "pouletto",
        "country": "espagne",
        "distance": 345,
        "difficulty": 2,
        "price": 2000,
        "summary": "Sed et tellus magna. Maecenas sem urna, malesuada sit amet justo a, ullamcorper luctus nunc. Morbi quis porta velit. Morbi eu ligula at est egestas consequat nec in arcu. In in felis risus. Sed pellentesque metus quis nulla varius dapibus. "
    },
    {
        "id": 3,
        "title": "pouet poulet",
        "country": "italie",
        "distance": 30456,
        "difficulty": 4,
        "price": 5000,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu pharetra metus. Nulla facilisi. Aliquam bibendum urna vitae ipsum bibendum, lobortis molestie sem tincidunt. Cras luctus, mauris id malesuada lacinia, massa quam ultrices purus, vel venenatis ipsum nunc luctus massa."
    }]
};

exports.index = function (req, res) {
    res.json(datas);
};

exports.roadBookInfos = function (req, res) {
    var values = datas.roadBooks.filter(function(elem) {
        return elem.id == req.params.id;
    });
    res.json(values[0]);
};