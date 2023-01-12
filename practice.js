var firebaseConfig = {
    apiKey: "AIzaSyDSX9YJH9tfmjngXn7b_3vyzOXtZvLmDXM",
    authDomain: "kwitter-c5ff4.firebaseapp.com",
    databaseURL: "https://kwitter-c5ff4-default-rtdb.firebaseio.com",
    projectId: "kwitter-c5ff4",
    storageBucket: "kwitter-c5ff4.appspot.com",
    messagingSenderId: "1046449649619",
    appId: "1:1046449649619:web:4a94c3284867a45ca4a126"
  };
  
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
  }
  

