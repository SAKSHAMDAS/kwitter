//YOUR FIREBASE LINKS

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
room_name=localStorage.getItem("room_name")
function send(){
      msg=document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message").value=""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name']
message=message_data['message']
like=message_data['like']
name_tag="<h4>"+name+"<img src='tick.png'class='user_tick'></h4>"
message_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row=name_tag+message_tag+like_button+span_with_tag
 document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();
function updateLike(message_id){
      button_id=message_id
      likes=document.getElementById(button_id).value
      update_like=Number(likes)+1
      firebase.database().ref
      firebase.database().ref(room_name).child(message_id).update({ like : update_like });

}