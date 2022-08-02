const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
event.preventDefault()
})
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("login=form").onsubmit = validate_form;
    function validate_form() {
        if (!document.getElementsByName("email").value) {
            alert("Введите почту!");
            return false;
        }
        if (!document.getElementsByName("password").value) {
            alert("Введите пароль!");
            return false;
        }
        return true;
    }
});
