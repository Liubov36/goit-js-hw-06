const inputName = document.queryCommandValue("#name-input");
const outputName = document.queryCommandValue("#name-output");

inputName.addEventListener("input", (event) =>{
    outputName.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
});

