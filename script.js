// Function to generate a random number between 1 and 99
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to update summary__value elements with random numbers
function updateSummaryValues() {
    const summaryValues = document.querySelectorAll('.summary__value');

    summaryValues.forEach((value) => {
    value.textContent = getRandomNumber();
    });

    updateResultValues();
}

function updateResultValues() {
    // Calculate the average of summary__value elements
    const summaryValues = document.querySelectorAll('.summary__value');
    const valuesArray = Array.from(summaryValues);
    const total = valuesArray.reduce((acc, element) => {
    return acc + parseInt(element.textContent, 10);
    }, 0);

    const average = Math.floor(total / valuesArray.length);

    // Update result__value with the average without decimals
    const resultValue = document.querySelector('.result__value');
    resultValue.textContent = average;

    // Update result__adjective based on the average
    const resultAdjective = document.querySelector('.result__adjective');
    const resultDescription = document.querySelector('.result__description');
    if (average < 25) {
    resultAdjective.textContent = 'Terrible';
    resultDescription.textContent = 'You did Worse than 80% of people who have taken these tests. You should rethink your life choices.';
    } else if (average >= 25 && average <= 49) {
    resultAdjective.textContent = 'Decent';
    resultDescription.textContent = 'You scored higher than 35% of people who have taken these tests.';
    } else if (average >= 50 && average <= 69) {
    resultAdjective.textContent = 'Good';
    resultDescription.textContent = 'You scored higher than 50% of people who have taken these tests.';
    } else if (average >= 70 && average <= 89) {
    resultAdjective.textContent = 'Great';
    resultDescription.textContent = 'You scored higher than 65% of people who have taken these tests.';
    } else if (average > 89 && average < 100) {
    resultAdjective.textContent = 'Amazing';
    resultDescription.textContent = 'You are among the top 5% of people who have taken these tests. Congratulations, you are Amazing!';
    } else {
    resultAdjective.textContent = 'What';
    resultDescription.textContent = 'You either are too lucky, are cheating, or have been here for too long. Go touch some grass.';
    }
}

// Add a click event listener to summary__link
const summaryLink = document.querySelector('.summary__link');
summaryLink.addEventListener('click', updateSummaryValues);

// Initial update when the page loads
updateSummaryValues();

// You bloody cheater...
function cheatCode() {
    const summaryValues = document.querySelectorAll('.summary__value');

    summaryValues.forEach((value) => {
        value.textContent = 100;
    });

    updateResultValues();
}