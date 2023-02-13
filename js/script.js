const sections = document.querySelectorAll('section');
// console.log(section);

for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius='15px';
    section.style.paddingLeft='10px';
    section.style.backgroundColor='gray';
}

// const clors=document.getElementById('color');
// clors.style.backgroundColor = 'yellow';
const clors=document.getElementById('color');
clors.classList.add('yellow-bg');