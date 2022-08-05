const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.map(ingredient => {
//   const ingredientsList = document.querySelector('#ingredients');
//   const newIngredient = document.createElement('li');
//   newIngredient.textContent = ingredient;
//   newIngredient.classList.add('item');
//   console.log(newIngredient);
//   ingredientsList.append(newIngredient);
// });

const ingredientsList = document.querySelector('#ingredients');

const allIngredients = ingredients.map(ingredient => {
  const newIngredient = document.createElement('li');
  newIngredient.textContent = ingredient;
  newIngredient.classList.add('item');

  return newIngredient;
});

ingredientsList.append(...allIngredients);
