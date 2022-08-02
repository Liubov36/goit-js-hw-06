const navEl = document.querySelector(".item");

// знаходимо кількість категорій у головного ul
const numberOfCategories = navEl.length;

// знаходимо назву h2
// const x = document.querySelectorAll("#categories h2");
// const y = [...x].map((element) => {
//     return element.textContent;
// });
console.log(`Number of categories: ${numberOfCategories}`);

navEl.forEach((element)  => {
console.log(`Category: ${element.firstElementChild.textContent}`);
console.log(`Elements: ${element.lastElementChild.children.length}`);
});

console.log(navEl);