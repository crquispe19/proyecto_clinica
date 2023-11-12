document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = form.username.value;
        const password = form.password.value;

        // Enviar datos al servidor PHP para verificar las credenciales.
        fetch("./php/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: username,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Obtener el nombre de usuario de la sesión
                const username = data.username; // Asegúrate de enviar el nombre de usuario desde el backend.

                // Mensaje de éxito con credenciales válidas.
                showMessage(`¡Inicio de sesión EXITOSO para ${username}!`, "green");

                // Redirección a la página de citas después de 2 segundos
                setTimeout(function () {
                    window.location.href = "./citas.html";
                }, 2000);
            } else {
                // Mostrar mensaje de error del servidor
                showMessage(data.message, "red");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            showMessage("Error en el servidor. Por favor, inténtalo de nuevo.", "red");
        });
    });

    function showMessage(text, color) {
        message.textContent = text;
        message.style.color = color;
    }
});
