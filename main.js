const URL_APP = "https://script.google.com/macros/s/AKfycby2q03uciLmuHu5MtWQU4yqZfNBSVoQE_r7uvLveHzJnYfMYTpgrny_XdnlcXLvseB5/exec";

// находим форму в документе
const form = document.querySelector("#payment-form");

// указываем адрес отправки формы (нужно только в начале примера)
form.action = URL_APP;

// вспомогательная функция проверки заполненности формы
function isFilled(details) {
    const {
        customer_first_name,
        customer_last_name,
        email,
        country,
        amount
    } = details;
    if (!customer_first_name) return false;
    if (!customer_last_name) return false;
    if (!email) return false;
    if (!country) return false;
    if (!amount) return false;
    return true;
}

// навешиваем обработчик на отправку формы
form.addEventListener("submit", async(ev) => {
    // отменяем действие по умолчанию
    ev.preventDefault();

    // получаем ссылки на элементы формы
    const customer_first_name = document.querySelector("[name=customer_first_name]");
    const customer_last_name = document.querySelector("[name=customer_last_name]");
    const email = document.querySelector("[name=email]");
    const country = document.querySelector("[name=country]");
    const amount = document.querySelector("[name=amount]");

    // собираем данные из элементов формы
    let details = {
        customer_first_name: customer_first_name.value.trim(),
        customer_last_name: customer_last_name.value.trim(),
        email: email.value.trim(),
        country: country.value,
        amount: amount.value.trim()
    };

    // если поля не заполнены - прекращаем обработку
    if (!isFilled(details)) return;

    // подготавливаем данные для отправки
    let formBody = [];
    for (let property in details) {
        // кодируем названия и значения параметров
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    // склеиваем параметры в одну строку
    formBody = formBody.join("&");

    // выполняем отправку данных в Google Apps
    const result = await fetch(URL_APP, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            cors: "no-cors",
            body: formBody,
        })
        .then((res) => res.json())
        .catch((err) => alert("Ошибка!"));

    if (result.type === 'success') {
        customer_first_name.value = '';
        customer_last_name.value = '';
        email.value = '';
        country.value = '';
        amount.value = '';
        alert('Спасибо за оплату!');
        window.location.href = 'success.html';
    }
    if (result.type === 'error') {
        alert(`Ошибка: ${result.errors}`);
    }
});