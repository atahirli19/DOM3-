//1

var newElement = document.createElement('div');
document.getElementById('block').appendChild(newElement);


//3

let element = document.getElementById('block');
let p1 = element.getElementsByTagName('p')[0];
element.removeChild(p);


//4

const p = document.querySelector('p');
const div = document.querySelector('block');
const i = document.querySelector('i');
i.text = 'Hello World';
div.insertBefore(i, p);
p.remove();


//5
console.log(document.querySelectorAll('.block'));


//6


console.log(collection[0]);
//list.size()

//7

//list.size()


//8

//Node List- любые типы, а HTML Collection - нет. 