let timerDisplay = document.getElementById("timer");
let startStopBtn = document.getElementById("startStop");
let resetBtn = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
        startStopBtn.classList.replace("bi-play-fill", "bi-pause-fill");
        isRunning = true;
    } else {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        startStopBtn.classList.replace("bi-pause-fill", "bi-play-fill");
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerDisplay.textContent = "00:00:00";
    isRunning = false;
    startStopBtn.classList.replace("bi-pause-fill", "bi-play-fill");
}

function updateTime() {
    let timeElapsed = Date.now() - startTime;
    let seconds = Math.floor((timeElapsed / 1000) % 60);
    let minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
    let hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);

    timerDisplay.textContent = 
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}`;
}

startStopBtn.addEventListener("click", startStopwatch);
resetBtn.addEventListener("click", resetStopwatch);