let fruit = ["Лимон", "Банан", "Яблоко", "Абрикос"];
let ul = document.createElement('ul');
document.body.prepend(ul);

for (let i in fruit) {
    let li = document.createElement('li');
    li.innerText = fruit[i];
    ul.append(li)
}

let input = document.getElementById('fruits');
let btn = document.getElementById('btn');


btn.addEventListener