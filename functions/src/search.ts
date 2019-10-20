import * as functions from 'firebase-functions';
const env = functions.config();
import * as algoliasearch from 'algoliasearch';
// Initialize the Algolia Client
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('qwe');
export const indexBike = functions.database
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
export const unindexBike = functions.database
    .ref('bikes/{bikeId}')
    .onDelete((snap, context) => {
        const objectId = snap.key;
        // Delete an ID from the index
        return index.deleteObject(objectId);
    });
