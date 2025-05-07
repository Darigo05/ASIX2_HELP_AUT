document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de eliminar
    const botonesEliminar = document.querySelectorAll('.btn-eliminar');

    // Añadir el evento de click a cada uno de los botones de eliminar
    botonesEliminar.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            // Prevenir el comportamiento por defecto (formulario submit)
            event.preventDefault();

            // Obtener el id del psicologo desde el atributo data-id
            const idPsicologo = this.getAttribute('data-id');
            
            // Mostrar el cuadro de confirmación
            const confirmacion = confirm("¿Estás seguro de que deseas eliminar este psicólogo?");
            
            if (confirmacion) {
                // Si el usuario confirma, crear el formulario dinámicamente para eliminar al psicologo
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = 'index_admin_psicologos.php'; // El archivo que manejará la eliminación

                // Crear un input oculto con el id del psicologo
                const inputId = document.createElement('input');
                inputId.type = 'hidden';
                inputId.name = 'id_psicologo';
                inputId.value = idPsicologo;

                // Crear un input oculto para indicar que se quiere eliminar
                const inputEliminar = document.createElement('input');
                inputEliminar.type = 'hidden';
                inputEliminar.name = 'eliminar';
                inputEliminar.value = '1';

                // Añadir los inputs al formulario
                form.appendChild(inputId);
                form.appendChild(inputEliminar);

                // Enviar el formulario
                document.body.appendChild(form);
                form.submit(); // Envía el formulario para eliminar el psicologo
            }
        });
    });
});
