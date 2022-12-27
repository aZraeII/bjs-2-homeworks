"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d > 0) {
    let x1 = (- b + Math.sqrt(d)) / (2 * a);
    let x2 = (- b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  } else if (d === 0) {
    let x = - b / (2 * a);
    arr = [x];
  } else {
    arr = [];
  }
  return arr;
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) === true || isNaN(contribution) === true || isNaN(amount) === true) {
    return(false);
  }
  let monthsPercent = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthsPercent + (monthsPercent / ((Math.pow((1 + monthsPercent), countMonths)) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  let a = totalAmount.toFixed(2);
  return Number(a);
}
  