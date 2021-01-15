import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyC2MDlEvvmFx1FVRdIpA88Hod2DKn3nxWs",
    authDomain: "linkedin-clone-cd112.firebaseapp.com",
    projectId: "linkedin-clone-cd112",
    storageBucket: "linkedin-clone-cd112.appspot.com",
    messagingSenderId: "944580168914",
    appId: "1:944580168914:web:96546caacf55f695d6310b",
    measurementId: "G-6DLPQ9Y37N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{firebaseApp, db, auth}; 




