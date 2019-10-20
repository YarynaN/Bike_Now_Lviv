import * as functions from 'firebase-functions';
import {indexBike, unindexBike} from './search'
import {stripeCharge} from './payment'
import {app} from './bikePhotos'

const admin = require('firebase-admin');

// @ts-ignore-file
admin.initializeApp(functions.config().firebase);

exports.indexBike = indexBike;
exports.unindexBike = unindexBike;
exports.stripeCharge = stripeCharge;
exports.app = functions.https.onRequest(app);
