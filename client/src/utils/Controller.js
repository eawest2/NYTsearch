const db = require("./models/Saved");


module.exports = {
    findArticle = (url) => {
        db.Saved.find(
            function (err, res) {
                if (err) console.log(err);
                // Deal with the response data/error
            }).then(function (data) {
                res.json(data);
            });
    },

    removeArticle = (url) => {
        db.Saved.deleteOne({
            url: url
        }, function (err, res) {
            if (err) console.log(err);
            // Deal with the response data/error
        }).then(function (data) {
            res.json(data);
        });
    },

    saveArticle = (article) => {
        db.Saved.findOneAndUpdate({
            url: article.url
        }, { article }, { upsert: true }, function (err, res) {
            if (err) console.log(err);
            // Deal with the response data/error
        });
    }




};