let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

let vendorName = event.vendorName;
let promo = event.promo;
exports.handler = function (event, context, callback) {
    console.log(vendorName, promo)
    ddb.put({
        TableName: 'hotspacesPromotions',
        Item: { 'promoCode': 'code', 'VendorName': 'vendorName', 'promotionType': 'promoType' }
    }).promise().then(function (data) {
        console.log(data)
        //your logic goes here
    }).catch(function (err) {
        //handle error
        console.log(err)
    });

    callback(null, 'Successfully executed');
}