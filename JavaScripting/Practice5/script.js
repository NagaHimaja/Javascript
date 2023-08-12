function runSwitch() {
    let tempFahrenheit = 104;
    const THIRTYTWO = 32;
    const TEMP = 1.8;
    const NORMAL_CELSIUS = 37;
    let result1 = tempFahrenheit - THIRTYTWO;
    let result2 = result1 / TEMP;

    let choice = parseInt(document.getElementById("choice").value);
  
    switch (choice) {
      case 1:
        document.write("Your body temperature in Celsius is: " + result2 + "<br>");
        result2 > NORMAL_CELSIUS
          ? document.write("You have a fever, take rest!")
          : document.write("You are absolutely OK! Enjoy your day");
        break;
      case 2:
        document.write("Hey, that's okay!!  Everything gonna be alright. <br>");
        break;
      default:
        document.write("Sorry, wrong choice provided<br>");
    }
  }
  


  /* Code using event listener  */


  /*
  
let tempFahrenheit = 104;
const THIRTYTWO = 32;
const TEMP = 1.8;
const NORMAL_CELSIUS = 37;
let result1 = tempFahrenheit - THIRTYTWO;
let result2 = result1 / TEMP;

document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the user's choice from the input field
  let choice = parseInt(document.getElementById("choice").value);

  switch (choice) {
    case 1:
      document.write("Your body temperature in Celsius is: " + result2 + "<br>");
      result2 > NORMAL_CELSIUS
        ? document.write("You have a fever, take rest!")
        : document.write("You are absolutely OK! Enjoy your day");
      break;
    case 2:
      document.write("No, I don't want to check whether I have a fever or not<br>");
      break;
    default:
      document.write("Sorry, wrong choice provided<br>");
  }
});

*/