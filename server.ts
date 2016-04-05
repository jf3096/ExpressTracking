import express = require('express');
import {ExpressTrackingService} from './server/services/ExpressTrackingService';
let app = express();

app.get('/', (req:express.Request, res:express.Response)=> {
    let text:string = req.query.text;
    if (!text) {
        res.end();
        return;
    }
    var expressPromise = ExpressTrackingService.getTypePromise(text).then(function (json) {
        if (json.auto && json.auto.length > 0) {
            return ExpressTrackingService.getExpressDetail(json.auto[0].comCode, text);
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

app.listen(8080, ()=> {
    console.log('http://localhost:' + 8080);
});