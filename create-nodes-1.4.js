const body = document.body;

const ul = document.createElement("ul");
ul.className = "list";

const li = document.createElement("li");
li.textContent = "привет, мир"

body.append(ul);
ul.append(li);

console.log(ul);
console.log(li);