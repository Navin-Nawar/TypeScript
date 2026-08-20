"use strict";
function calculateTax(amount, tax) {
    if (typeof amount == 'string') {
        amount = parseFloat(amount);
    }
    return amount * tax;
}
const mytax = calculateTax(155, 3.05);
console.log(m)
