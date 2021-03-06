const functions = require('firebase-functions');
const admin = require('firebase-admin');

const stripe = require('stripe')(functions.config().stripe.testkey);

export const stripeCharge = functions.database
  .ref('/orders/{userId}/{paymentId}')
  // @ts-ignore
  .onWrite((change, context) => {
    const payment = change.after.val();
    const userId = context.params.userId;
    const paymentId = context.params.paymentId;

    // checks if payment exists or if it has already been charged
    if (!payment || payment.charge) return;

    return admin.database()
      .ref(`/users/${userId}`)
      .once('value')
      // @ts-ignore
      .then(snapshot => {
        return admin.database()
          .ref(`/orders/${userId}/${paymentId}`)
          .update({paid: false})
          .then( () =>{
            return snapshot.val();
          })
      })
      // @ts-ignore
      .then(customer => {
        const {amount, bikeId, from, to} = payment;
        const idempotency_key = paymentId;  // prevent duplicate charges
        const source = payment.token.id;
        const currency = 'uah';
        const charge = {amount, currency, source};
        return stripe.charges
          .create(charge, { idempotency_key })
          // @ts-ignore
          .then((result)=>{
            return {charge: result, bikeId, from, to, amount};
          })
      })
      // @ts-ignore
      .then(result => {
        const {charge, amount, bikeId, from, to} = result;
        admin.database()
          .ref(`/orders/${userId}/${paymentId}`)
          .update({paid: charge.paid});
        admin.database()
          .ref(`/orders/${userId}/${paymentId}/charge`)
          .set(charge);
        admin.database()
          .ref(`/bikes/${bikeId}/reservations/${paymentId}`)
          .set({from, to, amount, orderedBy: userId, paid: charge.paid});
      })
  });
