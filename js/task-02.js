// В HTML есть пустой список `ul#ingredients`.

// ```html
// <ul id="ingredients"></ul>
// ```

// В JS есть массив строк.

// ```js
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// ```

// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulIngredients = document.querySelector('#ingredients');

const makeItemEl = (elem) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = elem;
  return itemEl;
};

const elements = ingredients.map(makeItemEl);

ulIngredients.append(...elements);
