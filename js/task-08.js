const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    const emailValue = email.value;
    const passwordValue = password.value;
    if (emailValue === "" || passwordValue === "") {
        alert(`все поля должны быть заполнены`)
    }
    const form = {
        emailValue: email,
        passwordValue: password,    
   }
   console.log(form);
  
    formEl.resert;
};
// const form = document.querySelector('form')
// form.addEventListener('submit', (event) => {
// event.preventDefault()
// })
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementsByClassName("login=form").onsubmit = validate_form;
//     function validate_form() {
//         if (!document.getElementsByName("email").value) {
//             alert("Введите почту!");
//             return false;
//         }
//         if (!document.getElementsByName("password").value) {
//             alert("Введите пароль!");
//             return false;
//         }
//         return true;
//     }
// });
