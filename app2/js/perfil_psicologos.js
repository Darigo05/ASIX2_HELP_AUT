function toggleLocationFields() {
    let countrySelect = document.getElementById("country");
    let customCountryContainer = document.getElementById("custom-country-container");

    if (countrySelect.value === "España") {
        customCountryContainer.style.display = "none";
    } else {
        customCountryContainer.style.display = "block";
    }
}

// Ejecutamos la función una vez para que se aplique el comportamiento por defecto
toggleLocationFields();

function updateProfilePhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-image').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}