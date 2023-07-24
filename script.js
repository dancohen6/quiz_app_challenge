// Variables //
var startBtn = document.getElementById('start');


// Timer/Timeout Functionality //
var seconds = 60;
startBtn.addEventListener("click", displayTime);

function displayTime() {
countdown = setInterval(function () {
    seconds--;
    timer.innerText = 'Timer: ' + seconds;
    if (seconds === 0) {
        clearInterval(countdown);
        alert('Time is up!');
        quizEnd(); 
       
    }
    
}, 1000); 
    
};

// Start Timer/Quiz //
startBtn.addEventListener("click", showQuestion[0]);