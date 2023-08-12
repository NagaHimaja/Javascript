let ticketsBooked = 3;
let cost = 9;
let discountPercentage = 10;
let total = ticketsBooked * cost;
let discountedTotal = total - (total * (discountPercentage / 100));

document.write("Total number of seats booked: " + ticketsBooked);
document.write(`</br>Total cost of ${ticketsBooked} tickets: $${total}`);
document.write("</br>Festive season discount is: " + discountPercentage + "%");
document.write(`</br>Total cost after discount is: $${discountedTotal}`);
