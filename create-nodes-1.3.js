const body = document.body;
const b = document.createElement("b");
const classList = b.classList;
classList.add("red", "strong");

body.append(b);

console.log(b);