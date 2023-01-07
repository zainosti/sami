
 document.getElementById("button-53").onclick= function() {myFunction()};

 function myFunction(){
     var randomPickup=["Arslan","Sami","Umer","Abdullah"];
     var random=Math.floor(Math.random()*4);
     var treat=randomPickup[random];
     document.getElementById("zain").innerHTML=treat;
 };