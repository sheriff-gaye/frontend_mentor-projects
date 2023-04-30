
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const error_msg = document.querySelectorAll('.error');
const label = document.querySelectorAll('label');

const btn = document.querySelector('.btn');



//btn for now
year.addEventListener('input', () => {


    let birthday = `${month.value}/${day.value}/${year.value}`;
    birthday = new Date(birthday);
    const today = new Date();
    const perosn_year = today.getFullYear() - birthday.getFullYear();
    const perosn_month = today.getMonth() - birthday.getMonth();
    const perosn_day = today.getDay() - birthday.getDay();

    if (perosn_month < 0 || (perosn_month === 0 && perosn_day < 0)) {
        perosn_year -= 1;
        if (perosn_month === 0) {
            perosn_year = 11;
        } else {
            perosn_month = 12 + perosn_month;
        }
        perosn_day = perosn_day;
    }

    console.log(perosn_year, perosn_month, perosn_day);

})



btn.addEventListener('click', () => {
    validate();


})


function validate() {

    if (day.value <= 0 && day.value <= 31) {
        error_msg[0].style.display = "block";
        day.classList.add('empty');
        label[0].classList.add('error_label');
    }

    error_msg[0].style.display = "none";
    day.classList.remove('empty');
    label[0].classList.remove('error_label');


    // else if (month.value <= 0 && month.value <= 12) {
    //     error_msg[1].style.display = "block";
    //     month.classList.add('empty');
    //     label[1].classList.add('error_label')
    // }

    // error_msg[1].style.display = "none";
    // month.classList.remove('empty');
    // label[1].classList.remove('error_label')


    // var date = new Date();
    // var now = date.getFullYear();

    // else if (year.value <= 0 && year.value <= now) {
    //     error_msg[2].style.display = "block";
    //     year.classList.add('empty');
    //     label[2].classList.add('error_label')
    // }
    // else {
    //     error_msg[2].style.display = "none";
    //     year.classList.remove('empty');
    //     label[2].classList.remove('error_label')

    // }



}







year.addEventListener('input', () => {
  


})
