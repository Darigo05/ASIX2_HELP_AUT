document.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos el enlace de perfil y el contenedor del menú
  const profileLink = document.querySelector('.profile-link');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // Aseguramos que profileLink y dropdownMenu existen antes de agregarles el evento
  if (profileLink && dropdownMenu) {
    // Añadimos un evento de clic para mostrar el menú
    profileLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenimos el enlace por defecto
      dropdownMenu.classList.toggle('show'); // Alternamos la clase 'show' para mostrar/ocultar el menú
    });

    // Cerramos el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
      // Si el clic no es dentro del perfil o del menú, lo cerramos
      if (!event.target.closest('.dropdown')) {
        dropdownMenu.classList.remove('show');
      }
    });
  }
});
