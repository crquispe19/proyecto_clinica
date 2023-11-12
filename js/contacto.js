document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contacto-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = contactForm.querySelector("#nombre").value;
        const direccion = contactForm.querySelector("#direccion").value;
        const telefono = contactForm.querySelector("#telefono").value;
        const correo = contactForm.querySelector("#correo").value;
        const especialidad = contactForm.querySelector("#especialidad").value;
        const fecha = contactForm.querySelector("#fecha").value;

        // Se muestran los datos ingresados en la cosola
        console.log("Nombre: " + nombre);
        console.log("Dirección: " + direccion);
        console.log("Teléfono: " + telefono);
        console.log("Correo: " + correo);
        console.log("Especialidad: " + especialidad);
        console.log("Fecha: " + fecha);

        // Restablece el formulario después de enviar
        contactForm.reset();
    });
});
