const inpEl = document.querySelector("#font-size-control");
const outputSize = document.querySelector("#text");
outputSize.classList.add(input-style);
inpEl.addEventListener("input", (element) => {
  const valInput = element.target.value;
  outputSize.style.fontSize = $(valInput);
  return outputSize.style.fontSize;
});