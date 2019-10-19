import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const env = functions.config();

import * as algoliasearch from 'algoliasearch';

// Initialize the Algolia Client
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('qwe');

exports.indexBike = functions.database  
    .ref('bikes/{bikeId}')
    .onCreate((snap, context) => {
        const data = snap.val();
        const objectID = snap.key;

        // Add the data to the algolia index
        return index.addObject({
            objectID,
            ...data
        });
    });

exports.unindexBike = functions.database
    .ref('bikes/{bikeId}')
    .onDelete((snap, context) => {
        const objectId = snap.key;

        // Delete an ID from the index
        return index.deleteObject(objectId);
    });



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//