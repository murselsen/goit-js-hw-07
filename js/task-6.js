const form = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
let boxItem = {
  width: 30,
  height: 30,
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const createBox = (w, h) => {
  const box = document.createElement("div");
  box.style.width = w + "px";
  box.style.height = h + "px";
  box.style.backgroundColor = getRandomHexColor();
  return box;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  boxes.innerHTML = " ";
  boxItem = {
    width: 30,
    height: 30,
  };
  const formboxCount = form.elements[0].value;
  for (let index = 0; index < formboxCount; index++) {
    boxes.appendChild(createBox(boxItem.width, boxItem.height));
    boxItem.width += 10;
    boxItem.height += 10;
  }
});
