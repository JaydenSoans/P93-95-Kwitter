// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBF11fUSemlhaTHpQxLWnPeIiuKi5kbs0I",
    authDomain: "p94rooms.firebaseapp.com",
    databaseURL: "https://p94rooms-default-rtdb.firebaseio.com",
    projectId: "p94rooms",
    storageBucket: "p94rooms.appspot.com",
    messagingSenderId: "663426454170",
    appId: "1:663426454170:web:63c7409270ee6091ea8523"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>"
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logOut() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "index.html";
}
  