let gridSize = 0;
etch = document.querySelector(".etch");
reset = document.querySelector(".reset");
let cell = document.createElement("div");
let grid = document.querySelector("#grid");
etch.addEventListener("click", () => {
    gridSize = prompt(`What dimensions do you want for canvas
ie enter 64 for a 64x64`, "");
    gridSize = parseInt(gridSize);
    if (gridSize >= 100) {
        alert('Grid too big, Try again');
        return window.location.reload();
    }
    createGrid();
});
//{ once: true });

function clear() {
    pixels = document.querySelectorAll(".cell");
    pixels.forEach((e) => e.remove());

}
reset.addEventListener("click", () => {
    clear();
    createGrid();
    //window.location.reload();
});

function createGrid() {
    clear();
    let rows = gridSize;
    let columns = gridSize;
    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < columns; i++) {
            let cell = document.createElement("div");
            cell.style.width = 512 / gridSize + "px";
            cell.style.height = 512 / gridSize + "px";
            cell.style.border = "black solid 1px"
            cell.style.boxSizing = "border-box"
            cell.classList.add("cell");
            //cell.style.left = j * 100 + "px";
            //cell.style.top = i * 100 + "px";
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = getColor();
            });
            grid.appendChild(cell);
        }

    }
}

function getColor() {
    let code = '0123456789ABCDEF'
    let hex = '#'
    for (var i = 0; i < 6; i++) {
        hex += code[Math.floor(Math.random() * 16)];
    }
    return hex;
}
gridSize = 16;
createGrid();

