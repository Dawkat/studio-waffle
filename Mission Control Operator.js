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