document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro-form");
    const message = document.getElementById("message");

    if (form && message) { // Verifica si los elementos existen

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = form.nombre.value;
            const email = form.email.value;
            const password = form.password.value;

            // Verificar si los campos están completos
            if (nombre && email && password) {
                // Enviar datos al servidor PHP para el registro.
                fetch("./php/registro.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        nombre: nombre,
                        email: email,
                        password: password,
                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            // Obtener el nombre de usuario de la sesión
                            const username = data.username; // Asegúrate de enviar el nombre de usuario desde el backend.

                            // Registro exitoso
                            showMessage(`¡Registro exitoso para ${username}! Redirigiendo al inicio de sesión.`, "green");

                            // Redirección a la página de inicio de sesión después de 2 segundos
                            setTimeout(function () {
                                console.log("Redireccionando...");
                                window.location.href = "login.html";
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
            } else {
                showMessage("Por favor, complete todos los campos.", "red");
            }
        });
    } else {
        console.error("Los elementos del formulario no fueron encontrados.");
    }

    function showMessage(text, color) {
        if (message) { // Verifica si el elemento existe antes de intentar establecer su contenido
            message.textContent = text;
            message.style.color = color;
        }
    }
});
