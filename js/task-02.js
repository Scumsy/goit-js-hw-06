const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.map(element => {
  const ingredientsList = document.querySelector('#ingredients');
  const ingredient = document.createElement('li');
  ingredient.textContent = element;
  ingredient.classList.add('item');
  ingredientsList.append(ingredient);
});
