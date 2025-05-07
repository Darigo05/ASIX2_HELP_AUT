jQuery(document).ready(function () {
    var selectedEvent = null; // Para almacenar el evento seleccionado

    // Inicializar el selector de fecha
    jQuery('.datetimepicker').datepicker({
        timepicker: true,
        language: 'en',
        range: false,
        multipleDates: false,
        dateFormat: 'yyyy-mm-dd',
        multipleDatesSeparator: " - "
    });

    // Inicializar el calendario
    jQuery('#calendar').fullCalendar({
        themeSystem: 'bootstrap4',
        businessHours: false,
        defaultView: 'month',
        editable: true,
        header: {
            left: 'title',
            center: 'month,agendaWeek,agendaDay',
            right: 'today prev,next'
        },
        events: [], // No hay eventos al inicio

        // Al renderizar un evento
        eventRender: function (event, element) {
            // Si el evento tiene un icono, lo agregamos
            if (event.icon) {
                element.find(".fc-title").prepend(
                    "<i class='fa fa-" + event.icon + "' style='color:" + event.iconColor + ";'></i> "
                );
            }
        },

        // Al hacer clic en un día del calendario
        dayClick: function (date) {
            selectedEvent = null; // Limpiar evento seleccionado
            $('#add-event')[0].reset(); // Limpiar el formulario
            $("input[name='edate']").val(date.format("YYYY-MM-DD")); // Prellenar la fecha seleccionada
            jQuery('#modal-view-event-add').modal('show'); // Abrir el modal para crear un evento
        },

        // Al hacer clic en un evento
        eventClick: function (event) {
            selectedEvent = event; // Guardar el evento seleccionado para poder eliminarlo
            // Mostrar el modal con los detalles del evento
            $('#modal-view-event .event-title').text(event.title); // Mostrar título
            $('#modal-view-event .event-body').text(event.description); // Mostrar descripción
            $('#modal-view-event .event-icon').html("<i class='fa fa-" + event.icon + "' style='color:" + event.iconColor + ";'></i> "); // Mostrar ícono

            // Abrir modal con los detalles
            jQuery('#modal-view-event').modal('show');
        }
    });

    // Manejar el envío del formulario (Crear evento)
    jQuery("#add-event").submit(function (e) {
        e.preventDefault();

        var values = {};
        $.each($(this).serializeArray(), function (i, field) {
            values[field.name] = field.value;
        });

        // Mapa de colores
        var colorMap = {
            "fc-bg-default": "#000000",  // Negro
            "fc-bg-blue": "#007bff",
            "fc-bg-lightgreen": "#28a745",
            "fc-bg-pinkred": "#e83e8c",
            "fc-bg-deepskyblue": "#17a2b8"
        };

        // **CREAR NUEVO EVENTO**
        var newEvent = {
            title: values.ename,
            start: values.edate,
            description: values.edesc || "",
            className: values.ecolor,
            icon: values.eicon,
            iconColor: colorMap[values.ecolor] || "#000000" // Asignar el color correcto
        };

        // Renderizar el nuevo evento en el calendario
        $('#calendar').fullCalendar('renderEvent', newEvent, true); // Crear el nuevo evento

        // Cerrar el modal y resetear el formulario
        jQuery('#modal-view-event-add').modal('hide');
        $('#add-event')[0].reset();
    });

    // Eliminar el evento cuando se haga clic en el botón de eliminar
    $('#delete-event-btn').click(function () {
        if (selectedEvent) {
            $('#calendar').fullCalendar('removeEvents', selectedEvent._id); // Eliminar el evento del calendario
            $('#modal-view-event').modal('hide'); // Cerrar el modal
        }
    });
});
