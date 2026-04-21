const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");
const baseImage = document.getElementById("baseImage");
const brushSizeInput = document.getElementById("brushSize");
const clearBtn = document.getElementById("clearBtn");
const toolButtons = document.querySelectorAll(".tool-btn");
const eraserBtn = document.getElementById("eraserBtn");

let drawing = false;
let currentColor = "#e53935";
let brushSize = Number(brushSizeInput.value);
let isErasing = false;

function resizeCanvas() {
  canvas.width = baseImage.clientWidth;
  canvas.height = baseImage.clientHeight;
  canvas.style.width = baseImage.clientWidth + "px";
  canvas.style.height = baseImage.clientHeight + "px";

  ctx.lineCap = "round";
  ctx.lineJoin = "round";
}

baseImage.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

if (baseImage.complete) {
  resizeCanvas();
}

brushSizeInput.addEventListener("input", () => {
  brushSize = Number(brushSizeInput.value);
});

toolButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    toolButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const color = btn.dataset.color;
    if (color) {
      currentColor = color;
      isErasing = false;
    } else if (btn.id === "eraserBtn") {
      isErasing = true;
    }
  });
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function getPos(e) {
  const rect = canvas.getBoundingClientRect();

  if (e.touches && e.touches.length > 0) {
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
  }

  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function startDraw(e) {
  drawing = true;
  const pos = getPos(e);

  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

function draw(e) {
  if (!drawing) return;

  e.preventDefault();
  const pos = getPos(e);

  ctx.lineWidth = brushSize;

  if (isErasing) {
    ctx.globalCompositeOperation = "destination-out";
  } else {
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = currentColor;
  }

  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function endDraw() {
  drawing = false;
  ctx.beginPath();
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", endDraw);
canvas.addEventListener("mouseleave", endDraw);

canvas.addEventListener("touchstart", startDraw, { passive: false });
canvas.addEventListener("touchmove", draw, { passive: false });
canvas.addEventListener("touchend", endDraw);