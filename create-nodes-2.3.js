const body = document.body;
const array = [
    {
        name: 'Google',
        url: 'https://google.com'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com'
    },
    {
        name: 'intocode',
        url: 'https://intocode.ru'
    },
];

const render = (array) => {

    const ul = document.createElement("ul");

    body.append(ul);

    for (item of array) {

        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = item.name;
        a.href = item.url

        ul.append(li);
        li.append(a)
    }

    //Сделал 2-мя способами через цикл for и for of

    // for (let i = 0; i < array.length; i++) {
    //     const li = document.createElement("li");
    //     const a = document.createElement("a");
    //
    //     a.textContent = array[i].name;
    //     a.href = array[i].url
    //
    //     ul.append(li);
    //     li.append(a)
    // }
}

render(array);