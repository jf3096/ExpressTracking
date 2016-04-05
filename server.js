"use strict";
var express = require('express');
var ExpressTrackingService_1 = require('./server/services/ExpressTrackingService');
var app = express();
app.get('/', function (req, res) {
    var text = req.query.text;
    if (!text) {
        res.end();
        return;
    }
    var expressPromise = ExpressTrackingService_1.ExpressTrackingService.getTypePromise(text).then(function (json) {
        if (json.auto && json.auto.length > 0) {
            return ExpressTrackingService_1.ExpressTrackingService.getExpressDetail(json.auto[0].comCode, text);
        }
        else {
            return Promise.reject('查不到快递公司');
        }
    });
    expressPromise.then(function (json) {
        res.json(json);
    }, function (errString) {
        res.json(errString);
    });
});
app.listen(8080, function () {
    console.log('http://localhost:' + 8080);
});
