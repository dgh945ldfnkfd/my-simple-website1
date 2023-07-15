window.onload = function() {
    var form = document.querySelector("form");
    form.onsubmit = function(e) {
        e.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Пожалуйста, заполните все поля!");
        } else {
            form.submit();
        }
    }
}
