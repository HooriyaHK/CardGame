function goBack() {
    window.location.href = "home.html"
}

// below code  is not needed anymore
var countdown = 60;
function updateTimer() {
    countdown--;
    var timerId = document.getElementById('-id-of-timer-in-html');

    // ensures that the output displayed is updating every second
    timerId.textContent = countdown;
    if (countdown <= 0) {
        clearInterval(timerInterval);
        timerEnd();
    }
}

function timer() {
    
    updateTimer();
    var timerInterval = setInterval(updateTimer, 1000);
}

function timerEnd() {
    // need to add what occurs once timer ends; Players

}