// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    //Aqui va el API Key,
    authDomain: "clienteregistro-25abf.firebaseapp.com",
    databaseURL: "https://clienteregistro-25abf.firebaseio.com",
    projectId: "clienteregistro-25abf",
    storageBucket: "clienteregistro-25abf.appspot.com",
    messagingSenderId: "121689492604",
    appId: "1:121689492604:web:5528fc7c3aca1982164df9"
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
