let toggleBtn = document.getElementById("theme-toggle");
let html = document.documentElement;

if (localStorage.getItem("theme") == "dark") {
  html.setAttribute("data-theme", "dark");
  toggleBtn.classList.add("fa-sun");
} else {
  html.setAttribute("data-theme", "light");
  toggleBtn.classList.add("fa-moon");
}

/**
 * this change between light and dark
 */
function theme() {
  if (html.getAttribute("data-theme") == "dark") {
    html.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }

  toggleBtn.classList.toggle("fa-sun");
  toggleBtn.classList.toggle("fa-moon");
}

// clock
// function printTime() {
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, "0");
//   const minutes = String(now.getMinutes()).padStart(2, "0");
//   const second = String(now.getSeconds()).padStart(2, "0");

//   document.getElementById("clock").textContent = `${hours}:${minutes}:${second}`
// }

// printTime()
// setInterval(printTime , 1000)

// Live 24-hour clock (HH:MM:SS), using the library's default clock face and skin
$("#clock").FlipClock({
  clockFace: "TwentyFourHourClock",
  showSeconds: true,
});
