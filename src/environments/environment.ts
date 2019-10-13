// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  stripeKey: 'pk_test_XD6shRXcsspvR62SVIYl0kJe00aOP5RTJ0',
  firebase: {
    apiKey: 'API_KEY',
    authDomain: 'bikenowlviv.firebaseapp.com',
    databaseURL: 'https://bikenowlviv.firebaseio.com',
    projectId: 'bikenowlviv',
    storageBucket: 'bikenowlviv.appspot.com/',
    messagingSenderId: '330809534181',
    appId: '1:330809534181:web:cfdefc1ec30bc273'
  },
  algolia: {
    appId: 'L0RIMQ3N9M',
    apiKey: 'd46d47318500059ef7e4a90ece2b341b'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
