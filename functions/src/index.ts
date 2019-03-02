const functions = require('firebase-functions');
const admin = require('firebase-admin');
// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//

var serviceAccount = require("./athena-a3909-firebase-adminsdk-i0qyy-17d4bd4797.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://athena-a3909.firebaseio.com"
});

exports.onConsigneCreated = functions.firestore.document('consignes/{uid}').onCreate(event => {
    
    console.log(event);
  });