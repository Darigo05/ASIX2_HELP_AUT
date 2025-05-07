function toggleLocationFields() {
    let countrySelect = document.getElementById("country");
    let comunidadContainer = document.getElementById("comunidad-autonoma-container");
    let customCountryContainer = document.getElementById("custom-country-container");

    if (countrySelect.value === "España") {
        comunidadContainer.style.display = "block";
        customCountryContainer.style.display = "none";
    } else {
        comunidadContainer.style.display = "none";
        customCountryContainer.style.display = "block";
    }
}

// Función para actualizar la foto de perfil
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('profile-image');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

// Asociar la función de vista previa de imagen al input
document.getElementById('profile-image-upload').addEventListener('change', previewImage);
