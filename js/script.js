// //События Задачи
// //1
//
// const mesBtn = document.getElementById('btn-msg');
//
// mesBtn.addEventListener('click', function () {
//     alert(mesBtn.textContent);
// });
//
// //2
// mesBtn.addEventListener('mouseover', function () {
//     mesBtn.style.backgroundColor = 'red';
// });
//
// mesBtn.addEventListener('mouseout', function () {
//     mesBtn.style.backgroundColor = '';
// });
//
// //3
// document.body.addEventListener('click', tagFinder);
//
// function tagFinder(evn) {
//     elem = document.querySelector('#tag');
//     elem.textContent += ' ' + evn.target.nodeName;
//     console.log(evn.target.nodeName);
// }

//Работа с формами

const seasonClothes = [
    {'лето': 'одень футболку и шорты'},
    {'осень': 'одень куртку и штаны'},
    {'зима': 'одень шубу и теплые штаны'},
    {'весна': 'одень ветровку и джинсы'}
];
let el = document.querySelectorAll('option');
console.log(seasonClothes[1]);
console.log(el.innerHTML);

let option = document.querySelector('option')
console.log(option);

for (let i = 0; i < seasonClothes.length; i++){
    let n = seasonClothes[i];
    console.log(seasonClothes[i]);
}

//**********************************8

let select = document.querySelector('#seasons');
console.log(select.selectedIndex);
select.addEventListener('change', seasonWear);

function seasonWear(evn) {
    let input = document.querySelector('input');
    input.value = 'poiu'
}
//********************************


let form = document.forms[0].elements[0].value;
let x = form.value;
//console.log(form);



