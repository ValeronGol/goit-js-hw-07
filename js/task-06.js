// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.
// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

const validationIn = document.querySelector('#validation-input');
const dataLength = Number(validationIn.dataset.length);

validationIn.addEventListener('blur', onInputChangefocus);

function onInputChangefocus(event) {
  if (dataLength !== event.currentTarget.value.length) {
    validationIn.classList.add('invalid');
    validationIn.classList.remove('valid');
  } else {
    validationIn.classList.add('valid');
    validationIn.classList.remove('invalid');
  }
}
