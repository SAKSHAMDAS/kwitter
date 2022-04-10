
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
       apiKey: "AIzaSyCHJ3Xci9cAr_6QMGYmmJJWNdBzWv3naTI",
  authDomain: "kwitter-eabdf.firebaseapp.com",
  databaseURL: "https://kwitter-eabdf-default-rtdb.firebaseio.com",
  projectId: "kwitter-eabdf",
  storageBucket: "kwitter-eabdf.appspot.com",
  messagingSenderId: "849687332137",
  appId: "1:849687332137:web:f973a674016cffd166e338"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() { room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
 localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
window.location="kwitter_page.html"}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}