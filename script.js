// Función para mostrar el modal
function mostrarTraduccion(idModal) {
    var modal = document.getElementById(idModal);
    modal.style.display = "block";

    // Agregar evento de clic al fondo oscuro
    modal.onclick = function(event) {
        if (event.target == modal) {
            cerrarModal(idModal);
        }
    };
}

// Función para cerrar el modal
function cerrarModal(idModal) {
    var modal = document.getElementById(idModal);
    modal.style.display = "none";
}

// Función para alternar el zoom de la imagen
function toggleZoom(imageId) {
    var image = document.getElementById(imageId);
    if (image.style.maxWidth === "70%") {
        image.style.maxWidth = "30%"; // Vuelve al tamaño original del 30%
    } else {
        image.style.maxWidth = "70%"; // Ajusta al tamaño del 70%
    }
}

// Función para mostrar y ocultar el menú de contacto
function toggleContacto() {
    var dropdown = document.getElementById("contacto-dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Cerrar el menú de contacto al hacer clic fuera de él
window.onclick = function(event) {
    var dropdown = document.getElementById("contacto-dropdown");
    if (!event.target.matches('.contacto-btn')) {
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}
