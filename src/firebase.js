import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCEuKukNRynt7pmOA1UybJ2M1jN2iUShzg",
    authDomain: "dashboardcrud.firebaseapp.com",
    projectId: "dashboardcrud",
    storageBucket: "dashboardcrud.appspot.com",
    messagingSenderId: "623998509929",
    appId: "1:623998509929:web:0e7dc8bd2a80e620a113f8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;