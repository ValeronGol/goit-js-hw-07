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
  return console.log(`В списке ${lengthItem} категории.`);
};
itemlength();
const ulCategories = document.querySelector('#categories');

const elemUl = ulCategories.querySelectorAll('.item');

const elemByul = elemUl.forEach((elem) => {
  console.log(`-Категория: ${elem.firstElementChild.textContent}`);

  console.log(
    ` -Количество элементов: ${elem.lastElementChild.children.length}`
  );
});
