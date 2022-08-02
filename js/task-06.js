const textInput = document.querySelector("#validation-input");
// console.log(textInput.getAttribute(["data-length"]));
textInput.addEventListener("blur", (event) => {
    event.preventDefault();
    // console.log(event.currentTarget.value.length);
    // console.log(Number(textInput.getAttribute(["data-length"])));
    if (
        event.currentTarget.valua.length ===
        Number(textInput.getAttribute(["data-length"]))
    ) {
        textInput.classList.add("valid");
        // textInput.style.borderColor = "#4caf50";
        console.log("hurraw");
    } else {
        textInput.classList.add("invalid");
        // textInput.getElementsByClassName.borderColor = "#f44336";
        console.log("not good");
    }
    textInput.classList.remove("invalid");
});