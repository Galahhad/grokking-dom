const array = ["html", "css", "js"];
const body = document.body;
const ul = document.createElement("ul");

body.append(ul);

// for (let i = 0; i < array.length; i++) {
//     const li = document.createElement("li");
//     li.textContent = array[i];
//     ul.append(li);
// }

//Сделал 2-мя способома через цикл for и for of

for (item of array) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
}