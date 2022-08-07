
const inputEl = document.querySelector("#validation-input");


inputEl.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(inputEl.getAttribute(['data-length']))) {
        
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid'); 
        
}
    });
// const textInput = document.querySelector("#validation-input");
// // console.log(textInput.getAttribute(["data-length"]));
// textInput.addEventListener("blur", (event) => {
//     // event.preventDefault();
//     // console.log(event.currentTarget.value.length);
//     // console.log(Number(textInput.getAttribute(["data-length"])));
//     if (
//         event.currentTarget.valua.length ===
//         Number(textInput.getAttribute(['data-length']))
//     ) {
//         textInput.classList.add('valid');
//         textInput.classList.remove('invalid');
//         // textInput.style.borderColor = "#4caf50";
//         // console.log("hurraw");
//     } else {
//         textInput.classList.remove('valid');
//         textInput.classList.add('invalid');
//         // textInput.getElementsByClassName.borderColor = "#f44336";
//         // console.log("not good");
//     }
//     // textInput.classList.remove("invalid");
// });