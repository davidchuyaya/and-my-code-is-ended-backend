import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

export const alarm = functions.https.onRequest((req, res) => {
    const message: admin.messaging.Message = {
        token: req.query.token
    };

    admin.messaging().send(message)
        .then(messageRes => res.send(`Success: ${messageRes}`))
        .catch(err => res.send(`Error: ${err}`));
});