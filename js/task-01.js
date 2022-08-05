const categoriesCount = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesCount.length);

const categorieNames = document.querySelectorAll('.item h2');
categorieNames.forEach(element => {
  console.log('Category:', element.textContent);

  console.log('Elements:', element.nextElementSibling.childElementCount);
});

// const categorieNames = document.querySelectorAll('.item');

// categorieNames.forEach(element => {
//   console.log('Category:', element.firstElementChild.textContent);

//   console.log('Elements:', element.lastElementChild.children.length);
// });
