function checkCreds(){
var eventName = document.getElementById("Firstname").value;
var theme = document.getElementById("Lastname").value;
var peopleCount = document.getElementById("Badgenumber").value;
//this concatenates two strings together
var eventInfo = eventName + " " + theme;
//if the value entered is less than 4 or greater than 20 "EventName has invalid number of characters!" will be displayed.
if (eventInfo.length >20 || eventInfo.length<4){
    document.getElementById("loginStatus").innerHTML = "EventName has invalid number of characters!";
}
//if the value entered is less than 4 or greater than 20 "Number of participants is an invalid number!" will be displayed.
else if (peopleCount >999 || peopleCount < 100) {
    document.getElementById("loginStatus").innerHTML = "Number of participants is an invalid number!";
}
//if the values entered are correct the Access will be granted.
else{
    alert("Access Granted, Welcome" + eventInfo + "!");
    location.replace("tables.html");
}
}
//playStation is the name of the function.
//The second line of code calls for a sound, while also finds the file location.
//The third line of code shows that it will play the sound.
function playStation(){
    mySound = new sound ("spacestation.mp3");
    mySound.play();
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}
//this controls the start button
//this says to grey out the stop button while keeping the start button clickable.
function start(){
    document.getElementById("startbutton").disabled = true;
    document.getElementById("stopbutton").disabled = false;
//both in the start and stop functions, these will change the information based on the id's location.
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data..."
    document.getElementById("data").rows["longitude"].innerHTML = "Start pushed..."
}
//this controls the stop button
//this says to grey out the start button while keeping the stop button clickable.
function stop(){
    document.getElementById("startbutton").disabled = false;
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed</td><td>15 seconds</td>"
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude</td><td>0</td>"
}