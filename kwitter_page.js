const firebaseConfig = {
      apiKey: "AIzaSyDEmbFAQ0pAnRwKlfmYMT-pMS9a4gnezOQ",
      authDomain: "tweeter-cacff.firebaseapp.com",
      databaseURL: "https://tweeter-cacff-default-rtdb.firebaseio.com",
      projectId: "tweeter-cacff",
      storageBucket: "tweeter-cacff.appspot.com",
      messagingSenderId: "888631709516",
      appId: "1:888631709516:web:b870ef2b1cfed8a944c9e9"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg=document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
}