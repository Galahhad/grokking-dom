const body = document.body;
const div = document.createElement("div");
const ul = document.createElement("ul");
const liOne = document.createElement("li");
const liTwo = document.createElement("li");
const aOne = document.createElement("a");
const aTwo = document.createElement("a");

aOne.href = "https://instagram.com/intocode";
aOne.textContent = "наш инстаграм";

aTwo.href = "https://intocode.ru";
aTwo.textContent = "наш сайт";

body.append(div);
div.append(ul);
ul.append(liOne, liTwo);
liOne.append(aOne);
liTwo.append(aTwo);

