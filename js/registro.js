document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro-form");
    const message = document.getElementById("message");

    if (form && message) { // Verifica si los elementos existen

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const tipoDocumento = form.tipoDocumento.value;
            const numeroDocumento = form.numeroDocumento.value;
            const apellidos = form.apellidos.value;
            const nombres = form.nombres.value;
            const sexo = form.sexo.value;
            const direccion = form.direccion.value;
            const correo = form.correo.value;
            const celular = form.celular.value;
            const contrasena = form.contrasena.value;

            // Verificar si los campos están completos
            if (tipoDocumento && numeroDocumento && apellidos && nombres && sexo && direccion && correo && celular && contrasena ) {
                // Enviar datos al servidor PHP para el registro.
                fetch("./php/registro.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        tipoDocumento: tipoDocumento,
                        numeroDocumento: numeroDocumento,
                        apellidos: apellidos,
                        nombres: nombres,
                        sexo: sexo,
                        direccion: direccion,
                        correo: correo,
                        celular: celular,
                        contrasena: contrasena,
                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            // Obtener el nombre de usuario de la sesión
                            const numeroDocumento = data.numeroDocumento; // Asegúrate de enviar el nombre de usuario desde el backend.

                            // Registro exitoso
                            showMessage(`¡Registro exitoso para ${numeroDocumento}! Redirigiendo al inicio de sesión.`, "green");

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
