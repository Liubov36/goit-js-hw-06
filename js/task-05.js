const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
// =================================================

inputName.addEventListener("input",  onInputChange); 
console.log(`Input: ${inputName.value}`);
 

function onInputChange (event) {
  // event.preventDefault();   
  if (inputName.value === "") {
    outputName.textContent = `Anonymous`;
    return console.log("Please fill in  the fields!");
  }
  outputName.textContent = event.currentTarget.value.trim();

    
 }
console.log(inputName);

