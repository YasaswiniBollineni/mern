
/*project 1 BMI*/
let continueProgram = true;

while (continueProgram) {
    let mass = parseFloat(prompt("Enter your mass in kg:"));
    let height = parseFloat(prompt("Enter your height in cm:"));

    let bmi = mass / ((height / 100) ** 2);

    if (bmi < 18.5) {
        alert("You are underweight.");
    } else if (bmi < 25) {
        alert("Your BMI is normal.");
    } else if (bmi < 30) {
        alert("You are overweight.");
    } else {
        alert("You are obese.");
    }

    let response = prompt("Do you want to continue? (yes/no)").toLowerCase();
    if (response !== "yes") {
        continueProgram = false;
    }
}

/*----------------------------------------*/
/*project2*/

const secretNumber = parseInt(prompt("Enter a secret number between 1 and 100:"));


if (isNaN(secretNumber) || secretNumber < 1 || secretNumber > 100) {
    alert("Please enter a valid number between 1 and 100.");
} else {
    
    let attempts = 5;
    let gameOver = false;

   
    while (attempts > 0 && !gameOver) {
      
        const guess = parseInt(prompt("Guess the number (between 1 and 100):"));


        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            continue;
        }

       
        if (guess === secretNumber) {
            alert("Congratulations! You've guessed the number!");
            gameOver = true;
        } else {
        
            if (guess > secretNumber) {
                alert("The number is high");
            } else {
                alert("The number is low");
            }
           
            attempts--;
        }
    }

    // If the game is over and the player hasn't guessed correctly, reveal the secret number
    if (!gameOver) {
        alert(`Game over! The correct number was ${secretNumber}.`);
    }
}
