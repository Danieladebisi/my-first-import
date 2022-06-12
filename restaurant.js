// let btnClick = document.getElementById('fa-solid.fa-bars')
// let btnClick1 = document.querySelector('fa-solid fa-octagon-xmark')
// addEventListener(onclick, ()=>{

// })
// console.log(btnClick);
// console.log(btnClick1);
// console.log(list);


// users should be able to imput their date and it should count down 

const countDown=()=>{
let day = document.querySelector('.days h4')
let hours = document.querySelector('.hours h4')
let min = document.querySelector('.min h4')
let sec = document.querySelector('.sec h4')

let currentDate = new Date()
// console.log(currentDate);
let presentDate = new Date('25 December 2022')

// console.log(presentDate - currentDate);
let millisecToXmax = presentDate - currentDate;
let dayRem = Math.floor(millisecToXmax / 3600 / 24 / 1000)
let hoursRem = Math.floor(millisecToXmax / 3600 / 1000) % 24
let minRem = Math.floor(millisecToXmax / 60000) % 60
let secRem = Math.floor(millisecToXmax /1000) % 60

// console.log(dayRem);
// console.log(hoursRem);
// console.log(secRem);

day.innerHTML = dayRem
hours.innerHTML = hoursRem
min.innerHTML = minRem
sec.innerHTML = secRem
}

setInterval(countDown, 1000)


// let no = prompt('what is your number')
// console.log(no(Math.random()*99));



let em = []
function maloo(){
    let ran = Math.floor(Math.random()*99)
    + 1
    em.push(ran)
    console.log(em);
}
maloo()
maloo()
maloo()


// let odds = []
// let evens = []
// const genArr=() =>{
//     let rann = Math.floor(Math.random()*100)
//     if(rann % 2 ===0){
//         evens.push(rann)
//     }
//     else{
//         odds.push(rann)
//     }

// console.log(odds);
// console.log(evens);
// }
// genArr()
// genArr()
// genArr()

// let imputField = document.querySelector('.imput')
// let btnAdd = document.getElementById('btn1')
// let resetBtn = document.querySelector('.btn-reset')

// function addToDo(e){
//     e.preventDefault();
//     console.log('add to do is working');
// }
// btnAdd.addEventListener('click', addToDo)




$(document).ready(function(){
    $('#taco').on('mouseover',()=>{
        $('.tacolist').css('display','list-item').css('transition', 'opacity', 'ease-out', '5s')
    })
    $('#taco').on('mouseleave',()=>{
        $('.tacolist').css('display','none')
    })
    
})

