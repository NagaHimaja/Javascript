function calculateCost(seats) {
    if (seats <= 2) {
        document.getElementById("cost").innerHTML = "Cost per Ticket is: $9";
        document.getElementById("total").innerHTML = "Total cost: $" + (seats * 9);
    } else if (seats > 6) {
        document.getElementById("cost").innerHTML = "Sorry! Booking is not allowed for more than 6 tickets.";
        document.getElementById("total").innerHTML = "";
    } else {
        // Discount: 5, 7, 9
        var discount = 0.05 * 9 + 0.07 * 9 + 0.09 * 9;
        if (seats == 4) {
            // Additional discount for 4 tickets: 11
            discount += 0.11 * 9;
        } else if (seats == 5) {
            // Additional discount for 5 tickets: 11, 13
            discount += 0.11 * 9;
            discount += 0.13 * 9;
        } else {
            // Additional discount for 6 tickets: 11, 13, 15
            discount += 0.11 * 9;
            discount += 0.13 * 9;
            discount += 0.15 * 9;
        }
        var amountPayable = (seats * 9) - discount;
        document.getElementById("cost").innerHTML = "Cost per Ticket is: $9";
        document.getElementById("total").innerHTML = "Total cost: $" + (seats * 9);
        alert("Amount payable after discount is: $" + amountPayable.toFixed(2));
    }
}
