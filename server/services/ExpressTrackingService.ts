import rp = require('request-promise');
import Promise =require("bluebird");

export module ExpressTrackingService {

    export function getTypePromise(text) {
        var options = {
            uri: 'http://www.kuaidi100.com/autonumber/autoComNum',
            json: true,
            qs: {text: text}
        };
        return rp(options);
    }

    export function getExpressDetail(type, postId) {
        var options = {
            uri: 'http://www.kuaidi100.com/query',
            json: true,
            qs: {type: type, postid: postId, id: 1, valicode: '', temp: Math.random()},
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.87 Safari/537.36 QQBrowser/9.2.5748.400'
            }
        };
        return rp(options);
    }
}