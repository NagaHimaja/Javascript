function execute() {
    alert("Let us calculate SI");

    let P = prompt("Please enter Principal Amount");
    let R = prompt("Please enter Rate of Interest ");
    let N = prompt("Please enter Number of Years ");
    document.getElementById('principle').innerHTML="You have entered P: " + P + "<br><br>";
    document.getElementById('rate').innerHTML="You have entered R: " + R + "<br><br>";
    document.getElementById('no-of-years').innerHTML="You have entered N: " + N + "<br><br>";

    let decision = confirm("Shall we proceed to calculate SI and CI?");
    if (decision) {
        document.getElementById('calculated').innerHTML="You decided to proceed" + "<br><br>";
        document.getElementById('cal-si').innerHTML="Calculated SI is " + (eval(P * R * N)) / 100 + "<br><br>";
        calculateCompoundInterest(P, R, N);
        document.getElementById('calc-box').style.display="block";

    } else {
        document.getElementById('not-calculated').innerHTML="You decided not to proceed" + "<br><br>";
        
    }


    function executeMe1() {
        document.getElementById('popup-msg').innerHTML="Function timeout!!!" + "<br><br>";
        document.getElementById('backdrop').style.backgroundColor= 'rgb(12 11 11 / 49%)';
    }
    setTimeout(executeMe1, 3000);

    
   /*
    function executeMe2() {
        document.write("Function called at regular interval!!!" + "<br><br>");
    }
    setInterval(executeMe2, 3000);*/


}

function calculateCompoundInterest(P, R, N) {
    var result = P * (Math.pow(1 + (R / 100), N));
    document.getElementById('cal-ci').innerHTML="<div id='compound'>Calculated compound interest is: " + result + "<br><br></div>";

}


document.getElementById('test').innerHTML='<input type="text" placeholder="hhhehhehehehee">';

