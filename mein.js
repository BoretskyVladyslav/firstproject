// Вибираємо елемент електронної пошти за ідентифікатором
var emailAddress = document.getElementById("email-address");

// Додаємо обробник події для наведення курсора
emailAddress.addEventListener("mouseover", function() {
    emailAddress.style.color = "blue"; // Змінюємо колір тексту на синій
});

// Додаємо обробник події для зняття курсора
emailAddress.addEventListener("mouseout", function() {
    emailAddress.style.color = ""; // Повертаємо колір тексту до значення за замовчуванням
});

// Додаємо обробник події для кліку
emailAddress.addEventListener("click", function() {
    var emailText = emailAddress.innerText.trim(); // Отримуємо текст електронної пошти
    copyToClipboard(emailText); // Копіюємо текст у буфер обміну
    alert("Адресу електронної пошти скопійовано: " + emailText); // Повідомлення про успішне копіювання
});

// Функція для копіювання тексту у буфер обміну
function copyToClipboard(text) {
    var dummyInput = document.createElement("textarea");
    document.body.appendChild(dummyInput);
    dummyInput.value = text;
    dummyInput.select();
    document.execCommand("copy");
    document.body.removeChild(dummyInput);
}
