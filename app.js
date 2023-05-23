let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text = "Send"; //изменяем текст кнопки
// tg.MainButton.setText("Send1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

// tg.MainButton.show();

let submitBtn = document.getElementById("submitBtn");
let text =  document.getElementById("textDesc");







submitBtn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
    //
    // Знаходимо елемент з ідентифікатором "optionSelect"
        const optionSelect = document.getElementById('optionSelect');

    // Знаходимо всі чекбокси всередині елементу "optionSelect"
        const checkboxes = optionSelect.querySelectorAll('input[type="checkbox"]');

    // Створюємо порожній масив для зберігання інформації про чекбокси
        const checkboxValues = [];

    // Проходимося по кожному чекбоксу
        checkboxes.forEach(checkbox => {
            // Отримуємо ім'я та значення чекбоксу
            const name = checkbox.name;
            const value = checkbox.checked ? 'Заповнено' : 'Не заповнено';

            // Формуємо рядок з іменем та значенням чекбоксу
            const checkboxString = `${name}: ${value}`;

            // Додаємо рядок до масиву
            checkboxValues.push(checkboxString);
        });

    // Об'єднуємо всі рядки в один рядок, розділені комами
        const resultString = checkboxValues.join(', ');

    // Виводимо результат у консоль
        console.log(resultString);




    //
    tg.sendData(text.value+"!("+resultString+")!");
    tg.close();
});

tg.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData(text.value);
    tg.close();
});
