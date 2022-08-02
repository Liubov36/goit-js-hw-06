const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayItems = [];
const listEl = document.querySelector('#ingredients');
for (let ingredient of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  arrayItems.push(itemEl);
  console.log(itemEl);
}
listEl.append(...arrayItems);
