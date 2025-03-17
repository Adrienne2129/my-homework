const canvas = document.getElementById("chessboard");
const ctx = canvas.getContext("2d");

const size = 400;
const cellSize = size / 8;
canvas.width = canvas.height = size;

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        ctx.fillStyle = (row + col) % 2 === 0 ? "#fff" : "#000";
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
}
