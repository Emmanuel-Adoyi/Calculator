function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let display = document.getElementById("display");
  let expression = display.value;

  try {
    // Replace ^ with ** for exponentiation
    expression = expression.replace(/\^/g, '**');
    let result = eval(expression);
    display.value = result;
  } catch (error) {
    alert("Invalid Expression");
  }
}