let ch;
do {
    execute();
    ch = prompt("Press Y to continue");
} while (ch == "Y");

    function execute() {
  
    alert("Let us calculate SI");
    let P = prompt("Please enter Principal Amount");
    let R = prompt("Please enter Rate of Interest ");
    let N = prompt("Please enter Number of Years ");
    document.write("You have entered P :  " + P + "<br><br>");
    document.write("You have entered R :  " + R + "<br><br>");
    document.write("You have entered N :  " + N + "<br><br>");

    let decision = confirm("Shall we proceed to calculate SI?");
    if (decision) console.log("You decided to proceed" + "<br><br>");
    else console.log("You decided not to proceed" + "<br><br>");
    eval(P * R * N);
    document.write("Calculated SI is: " + (eval(P * R * N)) / 100 + "<br><br>");
                }