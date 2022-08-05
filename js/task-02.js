const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.map(ingredient => {
  const ingredientsList = document.querySelector('#ingredients');
  const newIngredient = document.createElement('li');
  newIngredient.textContent = ingredient;
  newIngredient.classList.add('item');
  ingredientsList.append(newIngredient);
});
