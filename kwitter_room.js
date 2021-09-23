
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name - " + Room_names);
row = "<div Class='room_name' id="+Room_names+" onclik='redirectToRoomName(this.id)' <#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
room_name = document.getElementById ("room_name").value;
firebase.database() .ref("/").child(room_name).update({
 purpose : "adding room name"    
})

 localStorage.setItem("room_name", room_name);
 
 window.location = "kwitter_page.html";
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.locationbar = "kwitter_page.html";
}
function logout () {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

}