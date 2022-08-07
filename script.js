const h1= document.querySelector('h1');
const input1= document.querySelector('#input1');
const input2= document.querySelector('#input2');
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
const form = document.querySelector("#form");
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = "Davis182"


// const img = document.createElement('img');
// img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

// pid.innerHTML = ""
// pid.appendChild(img);

form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    console.log(Number.parseInt(input1.value) + Number.parseInt(input2.value));
    resultado.innerHTML = Number.parseInt(input1.value) + Number.parseInt(input2.value);
}