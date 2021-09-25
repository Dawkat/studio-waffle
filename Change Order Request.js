function simpleCount() {
    // This means start at 10
    var currTime = 10; 
    //This is how the loop starts
    for (var i = 1; i < 12; i++) {
        if (i == 11 ) {
            //This will update the coutdowntimer to start the countdown and place the words (Time left is).
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!";
            //This is the delay
        }, 1000 * i);
        //This says if the timer reaches less than 5 seconds it will display the text "warning Less than ½ way to launch, time left =".
    } else if (i > 6) {
            setTimeout(function() {
                document.getElementById("countdownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;
                currTime = currTime - 1;
        }, 1000* i);
        //If either the if or else if codes are not in use, it will show Current time and the countdown.
    } else {
        setTimeout(function() {
            document.getElementById("countdownTimer").innerHTML = "Current time = " +currTime;
            currTime = currTime - 1;
        }, 1000* i);
    }
}
}
