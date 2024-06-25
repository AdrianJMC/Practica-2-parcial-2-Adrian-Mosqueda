document.getElementById('generar').addEventListener('click', function() {
    const nombres1 = ['Carlos', 'María', 'Juan', 'Laura', 'Pedro', 'Ana'];
    const nombres2 = ['García', 'Martínez', 'López', 'Sánchez', 'Pérez', 'Gómez'];

    const nombreAleatorio1 = nombres1[Math.floor(Math.random() * nombres1.length)];
    const nombreAleatorio2 = nombres2[Math.floor(Math.random() * nombres2.length)];

    const nombreCompleto = `${nombreAleatorio1} ${nombreAleatorio2}`;

    document.getElementById('nombre').textContent = nombreCompleto;
});
