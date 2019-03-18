import firebase from 'firebase/app';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyByM0raBXrClbIboGyrw11ykA3ghFPdU4c",
    authDomain: "side-e2851.firebaseapp.com",
    databaseURL: "https://side-e2851.firebaseio.com",
    projectId: "side-e2851",
    storageBucket: "side-e2851.appspot.com",
    messagingSenderId: "148416773214"
  };
export default firebase.initializeApp(config);