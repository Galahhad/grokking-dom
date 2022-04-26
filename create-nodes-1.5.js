const body = document.body;
const divRed = document.createElement("div");
divRed.className = "red";

const divGreen = document.createElement("div");
divGreen.className = "green";

const divBlue = document.createElement("div");
divBlue.className = "blue";
divBlue.textContent = "я вложен"

body.append(divRed);
divRed.append(divGreen);
divGreen.append(divBlue);

console.log(divRed);
console.log(divGreen);
console.log(divBlue);
