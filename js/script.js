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
console.log(seasonClothes);
console.log(el);
for (let i = 0; i < seasonClothes.length; i++){
    let n = seasonClothes[i];
    console.log(seasonClothes[i]);
}
//let input = document.querySelectorAll('')
// select.selectedIndex


let form = document.forms[0].elements[0].value;
let x = form.value;
//console.log(form);

let select = document.querySelector('#seasons');
let option = document.querySelector('option')

console.log(option);

let input = document.querySelector('input');

//input.textContent = 'kflk';
let variable = select.options[select.selectedIndex].text.toLowerCase();

changeWear(variable);

// функция поиска соответствия выбранного значения select в массиве
function changeWear(v) {
    seasonClothes.forEach(function(el){
        if (el[v])  return  input.value = el[v];
        //console.log(el[v]);
    })
}
select.addEventListener('change',function(){
    changeWear(select.options[select.selectedIndex].text.toLowerCase());
});