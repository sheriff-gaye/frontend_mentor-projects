
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

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
        perosn_year-=1;
        if (perosn_month === 0) {
            perosn_year = 11;
        } else {
            perosn_month = 12 + perosn_month;
        }
        perosn_day = perosn_day;
    }

    console.log(perosn_year, perosn_month, perosn_day);

})