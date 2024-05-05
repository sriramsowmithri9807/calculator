// Get the display and button elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('#button-grid button');

// Function to update the display
function updateDisplay(text) {
    display.value = text;
}

// Function to handle button clicks
function handleClick(event) {
    const button = event.target;
    const value = button.textContent;

    // Handle number buttons
    if (value.match(/\d/)) {
        updateDisplay(display.value + value);
    }
    // Handle operator buttons
    else if (value.match(/[+-*/]/)) {
        updateDisplay(display.value + value);
    }
    // Handle equals button
    else if (value === '=') {
        try {
            const result = eval(display.value);
            updateDisplay(result.toString());
        } catch (error) {
            updateDisplay('Error');
        }
    }
    // Handle clear button
    else if (value === 'C') {
        updateDisplay('');
    }
}

// Add event listeners to the buttons
buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});