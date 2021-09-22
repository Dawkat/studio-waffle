function simpleCount() {
    // This means start at 10
    var currTime = 10; 

    //This is how the loop starts
    for (var i = 1; i < 12; i++) {

            //This will update the coutdowntimer to start the countdown and place the words (Time left is)
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Time left is " + currTime;
                currTime = currTime - 1;

            //This is the delay
        }, 1000 * i);
    }
}