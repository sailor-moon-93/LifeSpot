// Prompt the user to enter their age
var age = prompt("Пожалуйста, введите ваш возраст:");

// Create a new Map to store user data
var userMap = new Map();

// Check if the user entered a valid age
if (age !== null && !isNaN(age)) {
    // Convert the age to a number
    age = parseInt(age);

    // Store the user's age in the Map
    userMap.set('age', age);

    // Check if the user is 18 or older
    if (age >= 18) {
        // Display a welcome message
        document.write("Добро пожаловать на LifeSpot " + new Date().toLocaleString());

        // Store the login time in the Map
        userMap.set('loginTime', new Date().toLocaleString());
    } else {
        // Display a message indicating the site is for users 18 or older
        document.write("К сожалению, наш сайт предназначен для пользователей старше 18 лет. Вы будете перенаправлены на сайт Google.");

        // Redirect to Google
        window.location.replace("https://www.google.com");
    }
} else {
    // Display an error message if the user didn't enter a valid age
    document.write("Неверный возраст. Вы будете перенаправлены на сайт Google.");
    window.location.replace("https://www.google.com");
}

// Output the user's age and login time
console.log("Пользователю " + userMap.get('age') + " лет, пользователь зашёл в " + userMap.get('loginTime'));

