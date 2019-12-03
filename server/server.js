const express = require('./config/express.js')
//var mongoose = require('mongoose')
const bodyParser = require('body-parser');
const crypto = require('crypto');
const squareConnect = require('square-connect');

// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

// const accessToken = 'EAAAEKhcG52iIj2IF0YJCp7-I6FhTnJlPvx3KmYI8stm3dp8tdODrFppT3YhxSKP'; // this is my account access token feel free to change

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(__dirname));


// // Set Square Connect credentials and environment
// const defaultClient = squareConnect.ApiClient.instance;

// // Configure OAuth2 access token for authorization: oauth2
// const oauth2 = defaultClient.authentications['oauth2'];
// oauth2.accessToken = accessToken;

// app.post('/process-payment', async (req, res) => {
//     const request_params = req.body;
  
//     // length of idempotency_key should be less than 45
//     const idempotency_key = crypto.randomBytes(22).toString('hex');
  
//     // Charge the customer's card
//     const payments_api = new squareConnect.PaymentsApi();
//     const request_body = {
//       source_id: request_params.nonce,
//       amount_money: {
//         amount: 100, // $1.0`0 charge
//         currency: 'USD'
//       },
//       idempotency_key: idempotency_key
//     };
  
//     try {
//       const response = await payments_api.createPayment(request_body);
//       res.status(200).json({
//         'title': 'Payment Successful',
//         'result': response
//       });
//     } catch(error) {
//       res.status(500).json({
//         'title': 'Payment Failure',
//         'result': error.response.text
//       });
//     }
//   });


app.listen(port, () => console.log(`Server now running on port ${port}!`));
