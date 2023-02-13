//1. where to add
const colorList = document.getElementById('color');
//2.what to be added
const li = document.createElement('li');
li.innerText= 'yellowgreen';
//3.add the child
colorList.appendChild(li);

//1.where to ad
const mainContainer = document.getElementById('main-container');

//what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText='My Food List';
section.appendChild(h1);

const ul =document.createElement('ul');
const li1= document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);

const li2= document.createElement('li');
li2.innerText='roast';
ul.appendChild(li2);

const li3= document.createElement('li');
li3.innerText='khichuri';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

//set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML=`
    <h1>My dress section </h1>
    <ul>
        <li>3 piece</li>
        <li>goun</li>
        <li>borka</li>
    </ul>
`
mainContainer.appendChild(sectionDress);