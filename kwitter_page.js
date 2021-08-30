var firebaseConfig = {
      apiKey: "AIzaSyAdHjR4Klx9luHLYH4NbZjkJJhU7Kvx_XA",
      authDomain: "kwitter-4b1a3.firebaseapp.com",
      databaseURL: "https://kwitter-4b1a3-default-rtdb.firebaseio.com",
      projectId: "kwitter-4b1a3",
      storageBucket: "kwitter-4b1a3.appspot.com",
      messagingSenderId: "122977740060",
      appId: "1:122977740060:web:26fe232a49b09a60dc46d9"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name = localStorage.getItem('userName');
room_name = localStorage.getItem('room_name')
function send(){
      msg = document.getElementById('msg').value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById('msg').value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem('userName');
      localStorage.removeItem('room_name');

      window.location = "index.html";
}