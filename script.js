function currentTime() {
  const now = new Date();
  const timeDisplay = document.getElementById("time");

  if (timeDisplay) {
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

currentTime();
setInterval(currentTime, 1000);


function toggleTheme() {
  const lightThemeTimer = document.getElementById("time");
  lightThemeTimer.classList.toggle("light-mode-timer");

  const lightThemeBody = document.body;
  lightThemeBody.classList.toggle("light-mode-body");

  const lightThemeBtn = document.querySelector(".fa-solid");
  lightThemeBtn.classList.toggle("light-mode-btn");
}

// setTimeout method

// function currentTime() {
//   const now = new Date();
//   const timeDisplay = document.getElementById("time");

//   if (timeDisplay) {
//     const hours = String(now.getHours()).padStart(2, "0");
//     const minutes = String(now.getMinutes()).padStart(2, "0");
//     const seconds = String(now.getSeconds()).padStart(2, "0");

//     timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
//   }
//   const delay = 1000 - now.getMilliseconds();
//   setTimeout(currentTime, delay);
// }
