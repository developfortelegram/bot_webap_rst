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
    tg.sendData(text.value);
    tg.close();
});

tg.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData(text.value);
    tg.close();
});
