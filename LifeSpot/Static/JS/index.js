// Запрос имени у пользователя
var userName = prompt("Пожалуйста, введите ваше имя:");

// Проверка на пустой ввод или нажатие "Отмена"
if (userName === null || userName === "") {
    alert("Вы не ввели имя. Вы будете перенаправлены");
    window.location.href = "https://www.google.com";
} else {
    // Вывод имени и количества символов
    var nameLength = userName.length;
    alert("Привет, " + userName + "! В вашем имени " + nameLength + " символов.");
}


let elements = document.getElementsByTagName('*');