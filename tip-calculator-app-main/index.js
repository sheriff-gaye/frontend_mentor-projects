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

        button.forEach('click', (item) => {
            item.classList.add("active");

        })
        // e.classList.add('active');

        rate = (e.target.value) / 100;
        calculate();


    })



})

function calculate() {

    if ((billValue && numValue && rate) > 0) {
        tip = (billValue * rate);
        tip_plus = billValue + tip;
        result_person = (tip_plus / numValue);

        if (numValue > 1) {
            tip_per_person = tip / 2;
        }
        tip_per_person = tip;


        tip_amount.innerHTML = `$` + (tip_per_person.toFixed(2));
        tip_total.innerHTML = `$` + (result_person.toFixed(2));

    }
    else {
        tip_amount.innerHTML = `$` + (0.00.toFixed(2));
        tip_total.innerHTML = `$` + (0.00.toFixed(2));

    }


}

bill_amount.addEventListener('input', (e) => {
    billValue = parseFloat(e.target.value);
    calculate();
})

person_num.addEventListener('input', (e) => {
    numValue = Number(e.target.value);
    calculate();
})

custom.addEventListener('input', (e) => {
    cus = e.target.value;
    rate = parseFloat(cus) / 100;
    calculate();
})

btn.addEventListener('click', () => {

    billValue.value = 0;
    bill_amount.value = ""

    person_num.value = "";
    numValue = 0;

    custom.value = ""
    rate = 0;

    tip_amount.innerHTML = `$` + (0.00.toFixed(2));
    tip_total.innerHTML = `$` + (0.00.toFixed(2));

})