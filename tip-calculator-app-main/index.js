//javascript work

const btn = document.getElementById('submit');
const bill_amount = document.getElementById('bill');
const person_num = document.getElementById('num');
const buttons = document.querySelectorAll('.btn');
const custom = document.getElementById('custom')


const tip_amount = document.getElementById('tip_amount');
const tip_total = document.getElementById('tip_total');
let rate = 0;



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        rate = (e.target.value) / 100;
        calculate();
    })

})


function calculate() {

    if (billValue > 0 && numValue > 0 && rate > 0) {
        tip = (billValue * rate);
        tip_per_person = tip / 2;
        tip_plus = billValue + tip;
        result_person = (tip_plus / numValue);


        tip_amount.innerHTML = `$` + (tip_per_person.toFixed(2));
        tip_total.innerHTML = `$` + (result_person.toFixed(2));


    }
    else {
        tip_amount.innerHTML = `$` + (0.00.toFixed(2));
        tip_total.innerHTML = `$` + (0.00.toFixed(2));

    }

}

bill_amount.addEventListener('input', (e) => {
    bill = e.target.value.trim();
    billValue = Number(bill);
    calculate();

})

person_num.addEventListener('input', (e) => {
    num = e.target.value.trim();
    numValue = Number(num)
    calculate();
})


custom.addEventListener('input', (e) => {
    cus = e.target.value.trim();
    rate = Number(cus) / 100;
    calculate();
})

btn.addEventListener('click', () => {

    bill_amount.value = "";
    person_num.value = "";
    rate = "";
    tip_amount.innerHTML = `$` + (0.00.toFixed(2));
    tip_total.innerHTML = `$` + (0.00.toFixed(2));


})