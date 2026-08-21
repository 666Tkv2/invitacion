const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelope-screen');
const invitationScreen = document.getElementById('invitation-screen');

let opened = false;

envelope.addEventListener('click', () => {
    if (opened) return;
    opened = true;

    // 1. Inicia la secuencia de apertura: cinta se desata, sello se rompe,
    //    la solapa se pliega y la tarjeta emerge (todo orquestado en CSS).
    envelope.classList.add('open');

    // 2. Cuando termina la animación del sobre, se desvanece esa pantalla
    setTimeout(() => {
        envelopeScreen.style.opacity = '0';

        setTimeout(() => {
            envelopeScreen.style.display = 'none';
            invitationScreen.style.display = 'flex';

            // Pequeño respiro antes de activar el reveal escalonado
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    invitationScreen.classList.add('active');
                });
            });

        }, 1000);
    }, 2000);
});

// TEMPORIZADOR
const fechaBoda = new Date("Nov 14, 2026 14:00:00").getTime();

const timer = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = dias.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = horas.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutos.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = segundos.toString().padStart(2, '0');

    if (distancia < 0) {
        clearInterval(timer);
        document.querySelector(".countdown-container").innerHTML = "<h2 style='color:#d4af37'>¡Llegó el gran día!</h2>";
    }
}, 1000);