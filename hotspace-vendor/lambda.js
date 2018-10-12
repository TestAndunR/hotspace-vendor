let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    let vendorName = event.vendorName;
    let promo = event.promoCode;
    let promoType = event.promoType;
    let expireDate = event.expireDate;
    let numberofuser = event.users;

    console.log(vendorName, promo)
    ddb.put({
        TableName: 'hotspacesPromotions',
        Item: {
            'promoCode': promo,
            'VendorName': vendorName,
            'promotionType': promoType,
            'expireDate': expireDate,
            'NoofCustomers': numberofuser
        }
    }).promise().then(function (data) {
        console.log(data)
        //your logic goes here
    }).catch(function (err) {
        //handle error
        console.log(err)
    });

    callback(null, 'Successfully executed');
}