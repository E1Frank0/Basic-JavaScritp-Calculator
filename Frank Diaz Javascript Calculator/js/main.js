// Frank Diaz, DIG 2106C, Professor William Hackney

/*

   The following Javascript code was inspire/based off of a Calculator tutorial video posted on YouTube.
   None of this code was copied and pasted in any shape or form.
   Hopefully this will be good enough for me to practice and study in the future.
   All rights and credits go to the original author of the code.
   
   Original sources:

   Part 1:
   https://www.youtube.com/watch?v=TX30jTaPs28

   Part 2:
   https://www.youtube.com/watch?v=7HiC7RK6f-c&t=404s

   YouTube channel of the original author, Ana Melvine:
   https://www.youtube.com/channel/UCjOVC0tPIo78a_DNeYs7ETQ

   */

// Set up a 'use strict'
'use strict';

 // Set up a function declaring all of the number values
 function calcNum(num) {

  // Display the numbers on the DOM Display
  var numDisplay = document.getElementById('numDisplay');

  // Set up switch statements containing the calculator number values
  switch (num) {
          
  // Declare cases applying the number values from the DOM
    case 1:
      numDisplay.value += '1';
      break;
    case 2:
      numDisplay.value += '2';
      break;
    case 3:
      numDisplay.value += '3';
      break;
    case 4:
      numDisplay.value += '4';
      break;
    case 5:
      numDisplay.value += '5';
      break;
    case 6:
      numDisplay.value += '6';
      break;
    case 7:
      numDisplay.value += '7';
      break;
    case 8:
      numDisplay.value += '8';
      break;
    case 9:
      numDisplay.value += '9';
      break;
    case 0:
      numDisplay.value += '0';
      break;
   }
}

// Set up a function to declare the math operator signs
function calcCom(operand) {

  // Display the signs on the DOM
  var operDisplay = document.getElementById('numDisplay');

  // Set up switch statements to declare the operator values
  switch(operand) {
        
   // Declare cases applying the operator values from the DOM
    case '+':
    operDisplay.value += '+';
    break;
    case '-':
    operDisplay.value += '-';
    break;
    case '*':
    operDisplay.value += '*';
    break;
    case '/':
    operDisplay.value += '/';
    break;
    case '%':
    operDisplay.value += '%';
    break;
    case '.':
    operDisplay.value += '.';
    break;
  }
}

// Set up a function to clear the display screen
function calcClear() {
  document.getElementById('numDisplay').value = "";
// document.getElementById('numAnswer').value = "";
}

// Set up a function to allow the calculator to compute the reustlts
function calcEquals() {

// Display the number input on the document
var ansDisplay = document.getElementById('numDisplay');

// Calculate the number inputs and evaluate the values
var inputAns = eval(ansDisplay.value);

// Display the results to the DOM
document.getElementById('numDisplay').value = inputAns;
}
