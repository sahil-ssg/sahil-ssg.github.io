function appendValue(value) {
    const display = document.getElementById("display");
    const display_content = display.value;
    display.value = display_content == '0' ? value : display_content + value;
}

function clearValue() {
    const display = document.getElementById("display");
    const display_content = display.value
    display.value = display_content == '0' ? '0' : display_content.slice(0, -1)
}

function reset() {
    const display = document.getElementById("display")
    display.value = '0'
}

function calculate() {
    const display = document.getElementById("display")
    display.value = eval(display.value)
}