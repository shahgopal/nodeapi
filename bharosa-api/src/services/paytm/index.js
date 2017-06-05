var checksum = require('./checksum');
var request = require('request');

var config = require('./config');
// import request from 'request-promise'

export const postTransaction = (req, res) => {
    console.log("POST Order start");
    var paramlist = req.body;
    var paramarray = new Array();
    // var paramarray = {};

    if(!paramlist['PAYTM_MERCHANT_KEY']) {
        res.status(401).end("Not Authorized")
    }
    for (var name in paramlist) {
        if (name == 'PAYTM_MERCHANT_KEY') {
            var PAYTM_MERCHANT_KEY = paramlist[name] ; 
        } else if(name != 'access_token'){
            paramarray[name] = paramlist[name] ;
        }
    }

    for(var name in config) {
        if(name !== 'PAYTM_FINAL_URL') {
            paramarray[name] = config[name];
        }
    }

    // checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function (err, result) {
    //         console.log("result")
    //         console.log(result)
    //          var formData = Object.keys(result).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(result[key])}`).join('&');
    //     request.post({
    //         headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
    //                  'Content-Type': 'application/x-www-form-urlencoded'   
    //                     },
    //         url:     'https://pguat.paytm.com/oltp-web/processTransaction',
    //         body:formData

    //         }, function(error, response, body){
    //             console.log("error")
    //             console.log(error)
    //             console.log("body")
    //             console.log(body)
    //             res.end(body)
    //             console.log(response)

    //         });
    //     });


        checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function (err, result) { 
            var jsonResultData = {};
            var jsonResult = {
                PAYTM_FINAL_URL: config.PAYTM_FINAL_URL,
                data: jsonResultData
            };

            for(var item in result) {
                jsonResultData[item] = result[item];
            }
            
            res.json(jsonResult);
        });


}


