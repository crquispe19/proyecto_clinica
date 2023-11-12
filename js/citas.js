//Permite que el JS se ejecute solo cuando la página haya terminado de cargar y no antes.
document.addEventListener("DOMContentLoaded", function () {
    // Recuperar las citas almacenadas en el localStorage
    const citas = JSON.parse(localStorage.getItem("citas")) || [];
  
    // Función para mostrar las citas en la sección "Mis Citas"
    function mostrarCitas() {
      const citasContainer = document.querySelector(".citas-container");
      citasContainer.innerHTML = ""; // Borra el contenido existente
  
      if (citas.length === 0) {
        citasContainer.innerHTML = "<p>No tienes citas agendadas.</p>";
      } else {
        const citasList = document.createElement("ul");
        citas.forEach(function (cita) {
          const citaItem = document.createElement("li");
          citaItem.textContent = `Especialidad: ${cita.especialidad}, Fecha: ${cita.fecha}, Hora: ${cita.hora}`;
          citasList.appendChild(citaItem);
        });
        citasContainer.appendChild(citasList);
      }
    }
  
    // Mostrar citas al cargar la página
    mostrarCitas();
  
    // Manejar el botón de "Agendar Cita"
    const agendarCitaButton = document.getElementById("agendar-cita");
    agendarCitaButton.addEventListener("click", function () {
      // Acceder a los elementos del formulario
      const especialidadInput = document.getElementById("especialidad");
      const fechaInput = document.getElementById("fecha");
      const horaInput = document.getElementById("hora");

      // Obtener los valores seleccionados en el formulario
      const especialidad = especialidadInput.value;
      const fecha = fechaInput.value;
      const hora = horaInput.value;

      if (especialidad && fecha && hora) {
        // Crear una nueva cita
        const nuevaCita = { especialidad, fecha, hora };
  
        // Agregar la nueva cita al array de citas
        citas.push(nuevaCita);
  
        // Guardar el array actualizado en el localStorage
        localStorage.setItem("citas", JSON.stringify(citas));
  
        // Actualizar y mostrar las citas en la sección "Mis Citas"
        mostrarCitas();
      }
    });
  });
