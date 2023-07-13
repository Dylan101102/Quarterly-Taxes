"use strict";

// TaxRate is based off of 2023.
function TaxRate(earnedMoney) {
  if (document.querySelector(`#single`).checked) {
    let tax_rate; // Use this so I can eventually return 'tax_rate'
    if (earnedMoney <= 11000) {
      tax_rate = 0.1;
    } else if (earnedMoney >= 11001 && earnedMoney <= 44725) {
      tax_rate = 0.12;
    } else if (earnedMoney >= 44726 && earnedMoney <= 95375) {
      tax_rate = 0.22;
    } else if (earnedMoney >= 95376 && earnedMoney <= 182100) {
      tax_rate = 0.24;
    } else if (earnedMoney >= 182101 && earnedMoney <= 231250) {
      tax_rate = 0.32;
    } else if (earnedMoney >= 231251 && earnedMoney <= 578125) {
      tax_rate = 0.35;
    } else {
      tax_rate = 0.37;
    }
    return tax_rate;
  }
}

// Formula based off of the standard mileage deduction rate for 2023.
function mileageDeduction(miles) {
  return Number(((miles * 65.5) / 100).toFixed(2)); // Rounded to nearest two decimal places.
}

// Need to set up what happens after user hits the submit button.

document.querySelector(`.submit`).addEventListener(`click`, function () {
  // Capturing how much the user made and their miles driven after clicking the submit button.
  const earnings = Number(document.querySelector(`#quarterlyTotal`).value);
  const mileage = Number(document.querySelector(`#miles-driven`).value);

  const rate = TaxRate(earnings);
  // console.log(rate);

  // Our TaxRate function is working as intended. Now for the next part.
  const standardDeduct = mileageDeduction(mileage);
  // console.log(standardDeduct);

  // To calculate the taxable income:
  const taxableIncome = earnings - standardDeduct;

  // Now for the federal income tax.
  const federalIncomeTax = taxableIncome * rate;

  // Now for self-employment tax.
  const selfEmpTax = taxableIncome * 0.9235 * 0.153;

  // Now to figure out the total tax
  const totalTax = (federalIncomeTax + selfEmpTax).toFixed(2);

  document.querySelector(
    `.text`
  ).innerHTML = `You owe $${totalTax} to the IRS for this quarter. You should feel great 😁!!!`;
});
// const maritalStatus = document.querySelector(`#single`).value; // To capture the 'single' value

// If user selected the 'married' option.
//   if (document.querySelector(`#married`).checked) {
//     const maritalStatus = document.querySelector(`#married`).value; // To capture the 'married' value
//   }
// });
