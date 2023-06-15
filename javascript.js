function appendToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    const newValue = currentValue === '0' ? value : currentValue + value;
    display.value = newValue;
  }

  function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    let result;
    try {
      result = eval(expression);
    } catch (error) {
      result = 'Error';
    }
    display.value = result;
  }