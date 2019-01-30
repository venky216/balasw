import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBJ16QvxcQ998hJXKmZh2ky1gihH72vFBI",
  authDomain: "swiggy-d4d94.firebaseapp.com",
  databaseURL: "https://swiggy-d4d94.firebaseio.com",
  projectId: "swiggy-d4d94",
  storageBucket: "",
  messagingSenderId: "315544530418"
};
  
 const Firebase =  firebase.initializeApp(config);

 export default Firebase