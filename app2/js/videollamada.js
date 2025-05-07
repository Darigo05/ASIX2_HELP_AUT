// Función para ir atrás en la historia del navegador
function goBack() {
    window.history.back(); // Vuelve a la página anterior
}

// Función para unirse a la reunión
function joinMeeting() {
    let link = document.getElementById("meetingLink").value;
    if (link.startsWith("http")) {
        window.open(link, "_blank");
    } else {
        alert("Por favor ingresa un enlace válido.");
    }
}

// Función para crear una nueva reunión en Zoom
function createZoomMeeting() {
    window.open("https://zoom.us/start", "_blank");
    document.getElementById("meetingCreated").innerHTML = "Abriendo Zoom para crear una reunión...";
}

// Código para mover las burbujas interactivas con el mouse
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});
