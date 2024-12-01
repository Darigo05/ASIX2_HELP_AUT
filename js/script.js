// Validar que las contraseñas coincidan
function validatePasswords() {
    const password = document.getElementById('contrasena').value; // Cambiado para coincidir con el ID del HTML
    const confirmPassword = document.getElementById('cpassword').value; // Cambiado para coincidir con el ID del HTML
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, verifica.");
        return false;
    }
    return true;
}

// Mostrar/ocultar contraseñas
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const toggleIcon = document.getElementById(`toggle-${fieldId}`);
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.replace('fa-eye', 'fa-eye-slash'); // Cambiar a ojo tachado
    } else {
        passwordField.type = "password";
        toggleIcon.classList.replace('fa-eye-slash', 'fa-eye'); // Cambiar a ojo normal
    }
}

