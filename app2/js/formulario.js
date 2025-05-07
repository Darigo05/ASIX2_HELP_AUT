// Mostrar u ocultar la sección de "¿Para quién es la terapia?" cuando se selecciona un plan
function toggleTherapyFor() {
    const planType = document.getElementById("planType").value;
    const therapyForSection = document.getElementById("therapyForSection");
    if (planType === "premium") {
        therapyForSection.style.display = "block";
    } else {
        therapyForSection.style.display = "none";
    }
}

// Mostrar u ocultar los detalles de la terapia cuando se selecciona "Sí" o "No"
function toggleTherapyDetails(show) {
    const therapyDetails = document.getElementById("therapyDetails");
    therapyDetails.style.display = show ? "block" : "none";
}

// Asegurar que solo un checkbox se seleccione en cada grupo
function onlyOne(checkbox) {
    const checkboxes = document.getElementsByName(checkbox.name);
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}

// Función para mostrar y ocultar el menú desplegable
function toggleDropdown() {
    const dropdown = document.getElementById("accountDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block"; // Alterna la visibilidad del desplegable
}

// Cambiar el tipo de cuenta y marcar la opción seleccionada con un tick
function changeAccountType(accountType) {
    // Primero, quita el tick de todas las opciones
    const items = document.querySelectorAll('.dropdown-item i');
    items.forEach(item => {
        item.classList.remove('fa-check-circle'); // Remover el tick
        item.classList.add('fa-circle'); // Cambiar el ícono a círculo vacío
    });

    // Luego, selecciona el nuevo tipo de cuenta y marca con un tick
    const selectedAccount = document.querySelector(`#account-type-${accountType}`);
    const label = selectedAccount.nextElementSibling; // Obtener el label correspondiente
    const icon = label.querySelector('i'); // Obtener el ícono dentro del label
    icon.classList.remove('fa-circle');
    icon.classList.add('fa-check-circle'); // Cambiar a un tick verde

    // Marcar el radio button seleccionado
    selectedAccount.checked = true;

    // Ocultar el desplegable después de seleccionar
    document.getElementById("accountDropdown").style.display = "none";
}



