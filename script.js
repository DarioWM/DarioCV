// Función para mostrar y ocultar el modal de Kontaktinformationen
function toggleContacto() {
    var dropdown = document.getElementById("contacto-dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Función para cerrar el modal de Kontaktinformationen
function cerrarContacto() {
    var dropdown = document.getElementById("contacto-dropdown");
    dropdown.style.display = "none";
}

// Cerrar el modal de Kontaktinformationen al hacer clic fuera de él
window.onclick = function(event) {
    var dropdown = document.getElementById("contacto-dropdown");
    if (event.target !== dropdown && !event.target.matches('.contacto-btn')) {
        dropdown.style.display = "none";
    }
}

// Función para mostrar el modal de traducción
function mostrarTraduccion(idModal) {
    var modal = document.getElementById(idModal);
    modal.style.display = "block";

    // Cerrar el modal al hacer clic fuera de él
    modal.onclick = function(event) {
        if (event.target == modal) {
            cerrarModal(idModal);
        }
    };
}

// Función para cerrar cualquier modal
function cerrarModal(idModal) {
    var modal = document.getElementById(idModal);
    modal.style.display = "none";
}

// Función para alternar el zoom de la imagen
function toggleZoom(imageId) {
    var image = document.getElementById(imageId);
    if (image.style.maxWidth === "70%") {
        image.style.maxWidth = "30%";
    } else {
        image.style.maxWidth = "70%";
    }
}
