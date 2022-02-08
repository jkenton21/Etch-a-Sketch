// Script for Etch-a-Sketch game

const grid = querySelector('game');
const size = querySelector('sizing');
const reset = querySelector('clear');
const erasor = querySelector('erasor');
const color = querySelector('color');

createGrid = () => {
    for (let i=0; i < 256; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      grid.appendChild(div);
    };
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty("grid-template-columns", 'repeat(${size.value}, 2fr)');
  grid.style.setProperty("grid-template-rows", 'repeat(${size.value}, 2fr)');
  for (let i =0; i < size.value * size.value; i++) {
      div.classList.add("square");
      grid.appendChild(div);
  };
  console.log(size.value);
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color");
});

size.addEventListener("change", updateGrid);

reset.addEventListener("click", function() {
    grid.innerHTML = "";
    size.value = "";
    grid.style.setProperty("grid-template-columns", 'repeat(16, 2fr)');
    grid.style.setProperty("grid-template-rows", 'repeat(16, 2fr)');
    createGrid();
});

createGrid();