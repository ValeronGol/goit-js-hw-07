// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто
// елементів `li.item`. Вийде `'У списку 3 категорії.'`.

// Для кожного елемента `li.item` в списку `ul#categories`, знайде і виведе в
// консоль текст заголовка елемента (тега h2) і кількість елементів в категорії
// (всіх вкладених в нього елементів `li`).

// Наприклад, для першої категорії вийде:

// - Категорія: Тварини
// - Кількість елементів: 4

const itemlength = function () {
  const item = document.querySelectorAll('.item');
  const lengthItem = item.length;
  return console.log(`У списку ${lengthItem} категорії.`);
};
itemlength();
const ulCategories = document.querySelector('#categories');

const itemlifirst = ulCategories.firstElementChild;

const itemlilast = ulCategories.lastElementChild;

const elemUl = ulCategories.querySelectorAll('ul');
const title = ulCategories.querySelectorAll('h2');

console.log(elemUl);
console.log(title);
const elemBytitle = title.forEach((elem) => {
  return console.log(elem.textContent);
});
console.log(elemBytitle);

const elemByul = elemUl.forEach((elem) => {
  return console.log(elem);
});
console.log(elemByul);
