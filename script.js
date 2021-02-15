let fruits = ['Apple', 'Banana', 'Banana', 'Banana '];
let ul = document.createElement('ul');
let input = document.querySelector("input");
let btn = document.querySelector("button");
document.body.append(ul);


btn.addEventListener('click', addElement);
function addElement(){
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener('click', function(){
        li.remove();
    });
    
    li.innerText = input.value;
    li.append(btn);
    ul.append(li);
    input.value.three = "";
}


for (let i in fruits) {
    let li = document.createElement("li");
    li.innerText = fruits[i];
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener('click', function(){
        li.remove();
    });
    li.append(btn);
    ul.append(li);
    
}

let span = document.createElement('span');

li.append(span);

