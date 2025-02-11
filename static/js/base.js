// Espera a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    // Cierra los mensajes de alerta al hacer clic en la "x"
    let closeButtons = document.querySelectorAll(".alert .close");
    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        });
    });
});