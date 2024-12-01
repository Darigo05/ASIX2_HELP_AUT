document.getElementById("load-more-btn").addEventListener("click", function() {
    // Mostrar las tarjetas adicionales
    var additionalBlogs = document.getElementById("additional-blogs");
    additionalBlogs.style.display = "block";
    
    // Ocultar el botón "Explora más blogs" después de hacer clic
    this.style.display = "none";
});
