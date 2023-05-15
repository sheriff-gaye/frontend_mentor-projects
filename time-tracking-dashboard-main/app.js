
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const screen = document.querySelectorAll('h2');
const report = document.querySelectorAll('.cards small');
const buttons = document.querySelectorAll('button');


buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.add('active');
    });

    btn.classList.remove('active');
})



daily.addEventListener('click', () => {

    screen[0].innerHTML = "5hrs";
    report[0].innerHTML = "Last Week -7hrs";

    screen[1].innerHTML = "1hrs";
    report[1].innerHTML = "Last Week -2hrs";

    screen[2].innerHTML = "0hrs";
    report[2].innerHTML = "Last Week -1hrs";

    screen[3].innerHTML = "1hrs";
    report[3].innerHTML = "Last Week -1hrs";

    screen[4].innerHTML = "1hrs";
    report[4].innerHTML = "Last Week -3hrs";

    screen[5].innerHTML = "0hrs";
    report[5].innerHTML = "Last Week -1hrs";

})

weekly.addEventListener('click', () => {

    screen[0].innerHTML = "32hrs";
    report[0].innerHTML = "Last Week -36hrs";

    screen[1].innerHTML = "10hrs";
    report[1].innerHTML = "Last Week -8hrs";

    screen[2].innerHTML = "4hrs";
    report[2].innerHTML = "Last Week -7hrs";

    screen[3].innerHTML = "4hrs";
    report[3].innerHTML = "Last Week -5hrs";

    screen[4].innerHTML = "5hrs";
    report[4].innerHTML = "Last Week -10hrs";

    screen[5].innerHTML = "2hrs";
    report[5].innerHTML = "Last Week -2hrs";
})

monthly.addEventListener('click', () => {

    screen[0].innerHTML = "103hrs";
    report[0].innerHTML = "Last Week -128hrs";

    screen[1].innerHTML = "23hrs";
    report[1].innerHTML = "Last Week -29hrs";

    screen[2].innerHTML = "13hrs";
    report[2].innerHTML = "Last Week -19hrs";

    screen[3].innerHTML = "11hrs";
    report[3].innerHTML = "Last Week -18hrs";

    screen[4].innerHTML = "21hrs";
    report[4].innerHTML = "Last Week -23hrs";

    screen[5].innerHTML = "7hrs";
    report[5].innerHTML = "Last Week -11hrs";

});
