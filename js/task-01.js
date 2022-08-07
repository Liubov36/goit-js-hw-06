const ulEl = document.querySelectorAll("li.item");

// знаходимо кількість категорій у головного ul
const numberUlEl = ulEl.childElementCount;

// знаходимо назву h2
// const x = document.querySelectorAll("#categories h2");
// const y = [...x].map((element) => {
//     return element.textContent;
// });
console.log(`Number of categories: ${numberUlEl}`);

ulEl.forEach((element)  => {

console.log(`Category: ${element.firstElementChild.textContent}`);
console.log(`Category: ${element.lastElementChild.children.length}`);
});

// console.log(navEl);