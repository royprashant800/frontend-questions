let currentProgressBar = document.getElementById('current-progress');
let initialProgress = 1;

currentProgressBar.style.width = `${initialProgress}%`;

window.addEventListener("load", () => {
    const intv = setInterval(() => {
        initialProgress = initialProgress + 1;
        currentProgressBar.style.width = `${initialProgress}%`;

        if(initialProgress >= 100) {
            clearInterval(intv);
        }
    }, 100)
});
