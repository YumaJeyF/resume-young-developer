const form = document.forms[0];
const inputs = Array.from(form);
const btnSubmit = document.querySelector('.sub');
const errorValue = 'Вы ввели неверное значение';

inputs.forEach(input => {
    if (input.type !== 'submit') input.setAttribute('is-valid', 0);
});

form.addEventListener('input', event => {
    if (event.target.getAttribute('is-valid')) validForm(event.target);
});

btnSubmit.addEventListener('click', event => {
    event.preventDefault();
    let validIndex = [];
    inputs.forEach(input => {
        if (input.getAttribute('is-valid')) validIndex.push(input.getAttribute('is-valid'));
    });
    const res = validIndex.reduce((acc, item) => acc & item);
    
    if (!Boolean(Number(res))) {
        activeErrors();
        alert('Форма заполнена неверно');
    } else {
        sendData();
    }
});

function validForm(input) {
    if (input.dataset.reg) validWithReg(input);
    else validNotReg(input);
}

function validWithReg(input) {
    let attribute = input.dataset.reg;
    const regular = new RegExp(attribute, 'i');
    
    if (!regular.test(attribute)) {
        input.parentNode.nextElementSibling.innerHTML = errorValue;
        input.parentNode.classList.add('error');
        input.setAttribute('is-valid', 0)
    } else {
        input.parentNode.nextElementSibling.innerHTML = '';
        input.parentNode.classList.remove('error');
        input.setAttribute('is-valid', 1);
    }
}

function validNotReg(input) {
    if (input.value === '') {
        input.parentNode.nextElementSibling.innerHTML = errorValue;
        input.classList.add('error');
        input.setAttribute('is-valid', 0)
    } else {
        input.parentNode.nextElementSibling.innerHTML = '';
        input.classList.remove('error');
        input.setAttribute('is-valid', 1)
    }
}

function activeErrors() {
    inputs.forEach(input => {
        if (input.getAttribute('is-valid') == 0) {
            input.classList.add('error');
            input.parentNode.nextElementSibling.innerHTML = errorValue;
        }
    });
}

async function sendData(form) {
    const formData = new FormData(form);

    let response = await fetch('mail.php', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        let result = await response.json();
        alert('Форма отправлена');
        form.reset();
    } else {
        alert('Произошла непредвиденная ошибка');
    }
}

// Автоматическая высота textarea

const textarea = document.querySelector('#your-mess');

textarea.addEventListener('input', event => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
});