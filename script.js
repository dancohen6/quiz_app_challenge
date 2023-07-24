// VARIABLES //
var startBtn = document.getElementById('start');
var timer = document.getElementById('timer');
var h3 = document.querySelector('h3');
var quizWrapper = document.querySelector('.quiz-wrapper')
var quizIndex = 0;
var correctAns = 0
var incorrectAns = 0;
var right = document.getElementById('right');
var wrong = document.getElementById('wrong');
var countdown;
var input;

// TIMER/TIMEOUT FUNCTIONALITY //
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

// DISPLAY LAST SCORE FROM localStorage //
function renderLastScore() {
    var lastScore = JSON.parse(localStorage.getItem("yourScore"));
    if (lastScore !== null) {
    document.getElementById("saved-initials").innerHTML = lastScore.Initials;
    document.getElementById("saved-score").innerHTML = (lastScore.Score + " %");
    
    } else {
      return;
    }
  }

// STOP TIMER, CALCULATE SCORE, INPUT INFO //
  function quizEnd() {
    clearInterval(countdown);
    // CALCULATE SCORE //
    var score = (correctAns / quiz.length) * 100;
    // DISPLAY INFO AT END OF QUIZ //
    quizWrapper.innerHTML = 
    `<h4 class="quiz-end">Your Score</h4>
    <h3 class="quiz-end">${score + ' %'}</h3>
    <h6 class="quiz-end">Enter your initials and log your high score!</h6>
    <input type="text" class="quiz-end" id="input" placeholder="Enter Initials">
    <button id="score">Enter</button>`
   
    // STORE SCORE & INITIALS //
    var input = document.getElementById("input");
    var enterScore = document.getElementById("score");
    enterScore.addEventListener("click", function(event) {
        event.preventDefault();
        
        var yourScore = {
          Initials: input.value.trim(),
          Score: score
          };
        
        localStorage.setItem("yourScore", JSON.stringify(yourScore));
        renderLastScore();
        });      
};

var showQuestion = [
    // QUESTION 1 //
    function() {
        // DISPLAY QUESTION AND ANSWERS //
        quizWrapper.innerHTML = 
        `<h4>${quiz[0].question}</h4>
        <button id="a">${quiz[0].choices[0]}</button>
        <button id="b">${quiz[0].choices[1]}</button>
        <button id ="c">${quiz[0].choices[2]}</button>
        <button id="d">${quiz[0].choices[3]}</button>`
        // ASSIGN VARIABLES TO BUTTONS //
        let ansA = document.querySelector('#a')
        let ansB = document.querySelector('#b')
        let ansC = document.querySelector('#c')
        let ansD = document.querySelector('#d')
        // EVENT LISTENER FOR EACH BUTTON //
        ansA.addEventListener("click", correct)
        ansB.addEventListener("click", incorrect)
        ansC.addEventListener("click", incorrect)
        ansD.addEventListener("click", incorrect)
         },
        // QUESTION 2 //
        function() {
            quizWrapper.innerHTML = 
            `<h4>${quiz[1].question}</h4>
            <button id="a">${quiz[1].choices[0]}</button>
            <button id="b">${quiz[1].choices[1]}</button>
            <button id ="c">${quiz[1].choices[2]}</button>
            <button id="d">${quiz[1].choices[3]}</button>`
            let ansA = document.querySelector('#a')
            let ansB = document.querySelector('#b')
            let ansC = document.querySelector('#c')
            let ansD = document.querySelector('#d')
            ansA.addEventListener("click", correct)
            ansB.addEventListener("click", incorrect)
            ansC.addEventListener("click", incorrect)
            ansD.addEventListener("click", incorrect)
            },
            // QUESTION 3 //
            function() {
                quizWrapper.innerHTML = 
                `<h4>${quiz[2].question}</h4>
                <button id="a">${quiz[2].choices[0]}</button>
                <button id="b">${quiz[2].choices[1]}</button>
                <button id ="c">${quiz[2].choices[2]}</button>
                <button id="d">${quiz[2].choices[3]}</button>`
                let ansA = document.querySelector('#a')
                let ansB = document.querySelector('#b')
                let ansC = document.querySelector('#c')
                let ansD = document.querySelector('#d')
                ansA.addEventListener("click", incorrect)
                ansB.addEventListener("click", incorrect)
                ansC.addEventListener("click", correct)
                ansD.addEventListener("click", incorrect)
                },
                // QUESTION 4 //
                function() {
                quizWrapper.innerHTML = 
                `<h4>${quiz[3].question}</h4>
                <button id="a">${quiz[3].choices[0]}</button>
                <button id="b">${quiz[3].choices[1]}</button>
                <button id ="c">${quiz[3].choices[2]}</button>
                <button id="d">${quiz[3].choices[3]}</button>`
                let ansA = document.querySelector('#a')
                let ansB = document.querySelector('#b')
                let ansC = document.querySelector('#c')
                let ansD = document.querySelector('#d')
                ansA.addEventListener("click", incorrect)
                ansB.addEventListener("click", incorrect)
                ansC.addEventListener("click", correct)
                ansD.addEventListener("click", incorrect)
                },
                // QUESTION 5 //
                function() {
                quizWrapper.innerHTML = 
                `<h4>${quiz[4].question}</h4>
                <button id="a">${quiz[4].choices[0]}</button>
                <button id="b">${quiz[4].choices[1]}</button>
                <button id ="c">${quiz[4].choices[2]}</button>
                <button id="d">${quiz[4].choices[3]}</button>`
                let ansA = document.querySelector('#a')
                let ansB = document.querySelector('#b')
                let ansC = document.querySelector('#c')
                let ansD = document.querySelector('#d')
                ansA.addEventListener("click", incorrect)
                ansB.addEventListener("click", incorrect)
                ansC.addEventListener("click", incorrect)
                ansD.addEventListener("click", correct)
                }
]

function correct() {
    // REMOVE HIDE CLASS //
    right.classList.remove('hide');
    correctAns++;
    quizIndex++;
    // DELAY 1 SECOND //
    setTimeout(() => {
        right.classList.add('hide');
        if (quizIndex === quiz.length) {
            quizEnd()
        }
        showQuestion[quizIndex]();
      }, "1000");   
};

function incorrect() {
    // REMOVE HIDE CLASS //
    wrong.classList.remove('hide');
    incorrectAns++;
    quizIndex++;
    seconds = seconds-5;
    // DELAY 1 SECOND //
    setTimeout(() => {
        wrong.classList.add('hide');
        if (quizIndex === quiz.length) {
            quizEnd()
        }
        showQuestion[quizIndex]();
      }, "1000");
 };

// START TIMER/QUIZ //
startBtn.addEventListener("click", showQuestion[0]);