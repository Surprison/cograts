document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('SLo_TFUTzSqiDXBTj'); // Замените YOUR_USER_ID на ваш фактический User ID

    const form = document.getElementById('greeting-form');
    const messageInput = document.getElementById('message');
    const styleSelect = document.getElementById('style');
    const generateBtn = document.getElementById('generate-btn');
    const emailInput = document.getElementById('email');
    const greetingCard = document.getElementById('greeting-card');
    const generatedMessage = document.getElementById('generated-message');

    generateBtn.addEventListener('click', () => {
        const message = messageInput.value;
        const style = styleSelect.value;
        generatedMessage.textContent = message;
        generatedMessage.className = style; // Применяем класс в зависимости от выбранного стиля
        greetingCard.classList.remove('hidden');
    });


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const message = messageInput.value;
        const style = styleSelect.value;

        const templateParams = {
            to_email: email,
            message: message,
        };

        console.log('templateParams:', templateParams); // Выводим параметры для проверки

        emailjs.send('service_1o72377', 'template_ml8zzzu', templateParams, 'SLo_TFUTzSqiDXBTj')
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
            }, error => {
                console.log('FAILED...', error);
            });
    });
});
