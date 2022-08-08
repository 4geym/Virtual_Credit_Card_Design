document.getElementById("firstNumber").innerHTML = randomCardNumber();
document.getElementById("secondNumber").innerHTML = randomCardNumber();
document.getElementById("thirdNumber").innerHTML = randomCardNumber();
document.getElementById("fouthNumber").innerHTML = randomCardNumber();
document.getElementById("valid").innerHTML = randomValidDayNumber() + " / " + randomValidMonthNumber();
document.getElementById("cvv").innerHTML = randomCVVNumber();

function randomCardNumber() {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}

function randomValidDayNumber() {
    return Math.floor(Math.random() * (31 - 1 + 1) + 1);
}

function randomValidMonthNumber() {
    return Math.floor(Math.random() * (12 - 1 + 1) + 1);
}

function randomCVVNumber() {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
}