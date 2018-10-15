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
    },function(err, data){
        if(err){
            callback(err, null)
        } else {
            let response={
                "statusCode": 200,
                "headers": {
                    // "my_header": "my_value"
                },
                "body": data,
                "isBase64Encoded": false
            }
            callback(null,response)
        }
    })
    // callback(null, 'Successfully executed');
}