// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBgKPy3iHx9xu_B3XTrUtT7Zuq_nN87wLI",
    authDomain: "mng-farma.firebaseapp.com",
    databaseURL: "https://mng-farma.firebaseio.com",
    projectId: "mng-farma",
    storageBucket: "mng-farma.appspot.com",
    messagingSenderId: "282998463394"
  }
};
