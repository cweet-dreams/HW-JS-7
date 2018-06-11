//События Задачи
//1

const mesBtn = document.getElementById('btn-msg');

mesBtn.addEventListener('click', function () {
    alert(mesBtn.textContent);
});

//2
mesBtn.addEventListener('mouseover', function () {
    mesBtn.style.backgroundColor = 'red';
});

mesBtn.addEventListener('mouseout', function () {
    mesBtn.style.backgroundColor = '';
});

//3
document.body.addEventListener('click', tagFinder);

function tagFinder(evn) {
    elem = document.querySelector('#tag');
    elem.textContent += ' ' + evn.target.nodeName;
}

//Работа с формами

const seasonClothes = [
    {'лето': 'одень футболку и шорты'},
    {'осень': 'одень куртку и штаны'},
    {'зима': 'одень шубу и теплые штаны'},
    {'весна': 'одень ветровку и джинсы'}
];


let select = document.querySelector('#seasons');
let option = document.querySelectorAll('option')

let input = document.querySelector('input');
input.value = 'одень футболку и шорты';

select.addEventListener('change', seasonWear);

function seasonWear(evn) {
    for (let i = 0; i < seasonClothes.length; i++){ 
        if (i = select.selectedIndex) {
            input.value = seasonClothes[i][select.value];
            break;  
        }  
       
    }
    
}




