const button = document.getElementById('btn');
const num = document.getElementById('id');
const body = document.getElementById('body');


const url = "https://api.adviceslip.com/advice";

window.onload = getData;

async function getData() {

    const response = await fetch(url);
    const data = await response.json();
    const message = await data.slip;
    const id = message.id;
    const advice = message.advice;

    body.innerHTML = `"${advice}"`;
    num.innerHTML = id

}

button.addEventListener('click', () => {

    getData();

})

