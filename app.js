const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const uploadBtn = document.getElementById("jsUpload");
const input = document.getElementById("jsInput");
const formTop = document.getElementById("jsForm__top");
const formBot = document.getElementById("jsForm__bot");
const img = new Image();

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

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
  console.log("top");
};

const handleBotText = () => {
  event.preventDefault();
  console.log("bot");
};

function init() {
  uploadBtn.addEventListener("click", handleUpload);
  formTop.addEventListener("submit", handleTopText);
  formBot.addEventListener("submit", handleBotText);
}

if (canvas) {
  init();
}
