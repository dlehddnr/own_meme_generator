const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("text_color");
const uploadBtn = document.getElementById("jsUpload");
const input = document.getElementById("jsInput");
const topInput = document.getElementById("jsTopInput");
const botInput = document.getElementById("jsBotInput");
const formTop = document.getElementById("jsForm__top");
const formBot = document.getElementById("jsForm__bot");
const img = new Image();

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "black";
ctx.textAlign = "center";

const handleDraw = img => {
  ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
};

const handleUpload = () => {
  const inputValue = input.value;
  img.src = inputValue;
  handleDraw(img);
  input.value = "";
};

const handleTopText = () => {
  event.preventDefault();
  let topValue = topInput.value;
  ctx.fillText(topValue, 350, 50);
  topInput.value = "";
};

const handleBotText = () => {
  event.preventDefault();
  let botValue = botInput.value;
  ctx.fillText(botValue, 350, 600);
  botInput.value = "";
};

const getColor = () => {
  const color = event.target.style.backgroundColor;
  console.log(color);
  ctx.fillStyle = color;
};

function init() {
  uploadBtn.addEventListener("click", handleUpload);
  formTop.addEventListener("submit", handleTopText);
  formBot.addEventListener("submit", handleBotText);
}

Array.from(colors).forEach(color => color.addEventListener("click", getColor));

if (canvas) {
  init();
}
