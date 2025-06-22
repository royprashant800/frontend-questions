let progress = 0;
let interval = null;
let isPaused = false;

function startDownload() {
    if(interval) return;

    document.getElementById('start-btn').disabled = true;
    document.getElementById('pause-btn').disabled = false;
    document.getElementById('reset-btn').disabled = false;

    interval = setInterval(() => {
        if(!isPaused) {
            progress += 1;
            if(progress > 99) {
                clearInterval(interval);
                interval = null;
                document.getElementById('pause-btn').disabled = true;
            }
            updateProgress(progress);
        }
    }, 80);
}

function pauseDownload() {
    isPaused = !isPaused;
    let pauseBtn = document.getElementById('pause-btn');

    pauseBtn.textContent = isPaused ? "Resume" : "Pause";
    pauseBtn.classList.toggle("paused", isPaused);
}

function resetDownload() {
    clearInterval(interval);
    interval = null;
    progress = 0;
    isPaused = false;
    document.getElementById('pause-btn').textContent = "Pause";
    document.getElementById('pause-btn').classList.remove("paused");
    document.getElementById('start-btn').disabled = false;
    document.getElementById('pause-btn').disabled = true;
    document.getElementById('reset-btn').disabled = true;
    updateProgress(progress);

}

function updateProgress(value) {
    document.querySelector('.progress-bar').style.width = value + "%";
    document.querySelector('.percentage').textContent = value + "%";
}