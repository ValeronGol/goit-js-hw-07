// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.
// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

const validationIn = document.getElementById('validation-input');
Number(validationIn.dataset.length);

validationIn.addEventListener('blur', (elem) => {
  if (Number(validationIn.dataset.length) !== elem.currentTarget.value.length) {
    validationIn.classList.add('invalid');
    validationIn.classList.remove('valid');
  } else {
    validationIn.classList.add('valid');
    validationIn.classList.remove('invalid');
  }
});
