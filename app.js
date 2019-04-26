const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const uploadBtn = document.getElementById("jsUpload");
const img = new Image();
img.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kakao_logo.jpg/220px-Kakao_logo.jpg";

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const handleUpload = () => {
  const e = ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
};

function init() {
  uploadBtn.addEventListener("click", handleUpload);
}

if (canvas) {
  init();
}
