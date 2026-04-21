const startBtn = document.getElementById("startBtn");
const infoBtn = document.getElementById("infoBtn");
const tasksSection = document.getElementById("tasksSection");
const infoBox = document.getElementById("infoBox");

startBtn.addEventListener("click", () => {
  tasksSection.scrollIntoView({ behavior: "smooth" });
});

infoBtn.addEventListener("click", () => {
  infoBox.classList.toggle("show");
});