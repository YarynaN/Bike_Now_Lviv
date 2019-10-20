import * as functions from 'firebase-functions';
import {indexBike, unindexBike} from './search'
import {stripeCharge} from './payment'

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.indexBike = indexBike;
exports.unindexBike = unindexBike;
exports.stripeCharge = stripeCharge;
