// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.

const inputName = document.querySelector('#name-input');
const youName = document.querySelector('#name-output');

inputName.addEventListener('input', (name) => {
  if (!name.currentTarget.value.trim()) {
    youName.textContent = 'незнакомец';
  } else {
    youName.textContent = name.currentTarget.value;
  }
});
