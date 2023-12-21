const startBtn = document.querySelector("#start");
const listBtn = document.querySelector("#list");

startBtn.addEventListener("click", () => {
  alert("start");
});

listBtn.addEventListener("click", () => {
  location.replace("list.html");
});
