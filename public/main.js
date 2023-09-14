//Hardcoded object.
const lifeExpectancyData = {
    'Denmark': {
      'male': 79, 
      'female': 82 
    }
  };

//fixes loading error
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('userInputForm').addEventListener('submit', handleFormSubmit);
});

// This function will run when the form is submitted
function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    //get form values
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    //calculation
    const averageLifeExpectancy = lifeExpectancyData.Denmark[gender];
    const remainingYears = averageLifeExpectancy - age;

    // Calculate the estimated end-of-life date
    const currentYear = new Date().getFullYear();
    //sets the estimated year end to the (year)31/DEC/23:59:59
    const endOfYear = new Date(currentYear + remainingYears, 11, 31, 23, 59, 59);

    // Start the countdown timer
    startTimer(endOfYear);
}

function startTimer(endDate) {
    clearInterval(window.timerInterval);
    //every second.
    window.timerInterval = setInterval(function() {
        //curent date
        const now = new Date();
        //calculates the reamining seconds (endYear - currentDate/s)
        let remainingSeconds = Math.floor((endDate - now) / 1000);

        if (remainingSeconds >= 0) {
            document.getElementById('timer').textContent = `Show's over in ${remainingSeconds}`;
        } else {
            clearInterval(window.timerInterval);
            document.getElementById('timer').textContent = "Time to pay the piper";
        }
    }, 1000);
}


