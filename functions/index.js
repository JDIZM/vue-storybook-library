const dotenv = require('dotenv')
dotenv.config()
// const cors = require('cors')({ origin: true })
const functions = require('firebase-functions');
const Mailchimp = require('mailchimp-api-v3')
// const key = process.env.YOUR_API_KEY;
// FIXME dotenv doesn't seem to be working
const key = '790042f849269326fe453c31d6d91bc7-us17';
const mailchimp = new Mailchimp(key);
// const api = 'https://us17.api.mailchimp.com/3.0/lists';

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.getListId = functions.https.onRequest((request, response) => {
  // post data to the http function
  // access the request and response objects
  // sample list = /lists/19e84c190f
  const { list } = request.body
  // get list id
  mailchimp.get({
    // path : '/lists/19e84c190f'
    // if a list isn't specified it gets the root account info
    path: list
  })
  .then(result => {
    // console.log(result)
    return response.json(result)
  })
  .catch(err => {
    // console.log(error);
    return response.json(err)
  })
});
// it works!!! woohoo!!!

exports.newSubscriber = functions.https.onRequest((request, response) => {
  // post data to the http function
  // access the request and response objects
  // sample list = /lists/19e84c190f
  const { email } = request.body
  // get list id
  // list = /lists/19e84c190f
  // path = /members
  // /lists/19e84c190f/members
  mailchimp.post('/lists/19e84c190f/members', {
    email_address : email,
    status : 'subscribed'
  })
  .then(result => {
    // console.log(result)
    return response.json(result)
  })
  .catch(err => {
    // console.log(error);
    return response.json(err)
  })
});