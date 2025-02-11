document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.toggle-password').forEach(function (eyeIcon) {
        eyeIcon.addEventListener('click', function () {
            // Encontrar el campo de contraseña asociado con este botón
            const input = this.closest('.input-group').querySelector('input');

            // Verificar si el evento se está ejecutando
            console.log('Contraseña cambiada', input.type);

            // Cambiar el tipo de campo entre 'password' y 'text'
            if (input.type === "password") {
                input.type = "text";  // Mostrar la contraseña
                this.classList.add('show-password');  // Cambiar el ícono a rojo
            } else {
                input.type = "password";  // Ocultar la contraseña
                this.classList.remove('show-password');  // Restaurar el color original
            }
        });
    });
});

