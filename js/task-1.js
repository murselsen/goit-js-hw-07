const categories = document.querySelector("#categories");

console.log("Number of Categories:", categories.childElementCount);

const categoryElements = categories.querySelectorAll(".item");
categoryElements.forEach((category) => {
  console.log("Category:", category.querySelector("h2").textContent);
  console.log("Elements:", category.querySelector("ul").childElementCount);
});
