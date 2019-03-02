"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//# sourceMappingURL=index.js.map



const functions = require('firebase-functions');
const admin = require('firebase-admin');
const twilio = require('twilio');

//var mailgun = require("mailgun-js");
var DOMAIN = 'athena.ekoal.org'
var mailgun = require('mailgun-js')({apiKey: functions.config().mailgun.akey, domain: DOMAIN});

var serviceAccount = require("./athena-a3909-firebase-adminsdk-i0qyy-17d4bd4797.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://athena-a3909.firebaseio.com"
});

const accountSid = functions.config().twilio.sid;
const authToken  = functions.config().twilio.token;

const client = new twilio(accountSid, authToken);

const twilioNumber = '+33644600478'



exports.onConsigneCreated = functions.firestore
    .document('consignes/{uid}')
    .onCreate((snap, context) => {
        // Get an object representing the document
        // e.g. {'name': 'Marie', 'age': 66}
        const newValue = snap.data();
  
        // access a particular field as you would any JS property
        //const name = newValue.name;
        admin.firestore().collection('users').doc(newValue.to).get().then(function(doc) {
            if (doc.exists) {
                sendMail(doc.data(),newValue);
                sendSms(doc.data(),newValue);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        return "ok";
        // perform desired operations ...
      });
    exports.onUserCreated = functions.firestore
      .document('users/{uid}')
      .onCreate((snap, context) => {
          // Get an object representing the document
          // e.g. {'name': 'Marie', 'age': 66}
          const newValue = snap.data();
            admin.auth().createUser({
                email: "user@example.com",
                password: "tmptmptmp",
            })
            .then(function(userRecord) {
              // See the UserRecord reference doc for the contents of userRecord.
              console.log("Successfully created new user:", userRecord.uid);
            })
            .catch(function(error) {
              console.log("Error creating new user:", error);
            });
          return "ok";
          // perform desired operations ...
        });

      

  function sendMail(usr,val) {
    var data = {
        from: 'Athena BO <no_reply@athena.ekoal.org>',
        to: usr.contacts.email,
        subject: '[ATHENA] Nouvelle consigne reçue',
        text: val.message
    };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
  }

  function validE164(num) {
        return /^\+?[1-9]\d{1,14}$/.test(num)
    }

  function sendSms(usr,val) {
      var pn =usr.contacts.phone;
    if ( !validE164(pn) ) {
        return;
    }

    const textMessage = {
        body: "[ATHENA] Nouvelle consigne reçue: " + val.message,
        to: pn,  // Text to this number
        from: twilioNumber // From a valid Twilio number
    }

    client.messages.create(textMessage)
  }
