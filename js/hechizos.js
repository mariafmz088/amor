const canvas = document.getElementById("confetti-canvas"); 
const konamiCode = "arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba";
const easterEggsList = {
    "teamo": { pts: 100, usado: false, num: 1, titulo: "🏆 PISTA 1: LOGRO DESBLOQUEADO (+100 pts)", pista: "Te amo con todo mi corazón. El hombre más guapo del mundo. ❤️\n\n💡 Pista para la PISTA 2: ¿Qué me dices cuando ya gastaste el te quiero y el te amo?" },
    "teadoro": { pts: 100, usado: false, num: 2, titulo: "💖 PISTA 2: LOGRO DESBLOQUEADO (+100 pts)", pista: "Te adoro infinitamente y te adoro mucho mas🥰\n\n💡 Pista para la PISTA 3: Una palabra corta de 4 letras que rima con flor." },
    "amor": { pts: 100, usado: false, num: 3, titulo: "🌹 PISTA 3: LOGRO DESBLOQUEADO (+100 pts)", pista: "Amor... :3🌹\n\n💡 Pista para la PISTA 4: ¿Cómo me dices cuando me pongo consentida o mimada?" },
    "cariño": { pts: 100, usado: false, num: 4, titulo: "🧸 PISTA 4: LOGRO DESBLOQUEADO (+100 pts)", pista: "Cariño mío, antes me podría inducir a un coma diabetico. 🧸\n\n💡 Pista para la PISTA 5: Cuando te pongo de mal genio eres un..." },
    "gruñon": { pts: 100, usado: false, num: 5, titulo: "😠 PISTA 5: LOGRO DESBLOQUEADO (+100 pts)", pista: "En efecto, y te amo, aunque seas un amargado de cuidado. 😠\n\n💡 Pista para la PISTA 6: Con esto te molesto desde tiempos inmemorables, eres mi ..." },
    "viejito": { pts: 100, usado: false, num: 6, titulo: "👴 PISTA 6: LOGRO DESBLOQUEADO (+100 pts)", pista: "Un viejito aburrido de más... pero lo perdono por setsy 👴\n\n💡 Pista para la PISTA 7: El primer apodo bonito que atiné a ponerte." },
    "mivida": { pts: 100, usado: false, num: 7, titulo: "🪐 PISTA 7: LOGRO DESBLOQUEADO (+100 pts)", pista: "Lo peor es que al final terminaste siendo más que eso -.- Brujería 🪐\n\n💡 Pista para la PISTA 8: Apodito que empieza con una nota musical y termina donde vuelan los pájaros..." },
    "micielo": { pts: 100, usado: false, num: 8, titulo: "🌌 PISTA 8: LOGRO DESBLOQUEADO (+100 pts)", pista: "Y en efecto, soy tu cielo, solo me falta estar sobre ti siempre. Y también lo de vigilarte 24/7 🌌\n\n💡 Pista para la PISTA 9: Tú eres..." },
    "mibien": { pts: 100, usado: false, num: 9, titulo: "🍀 PISTA 9: LOGRO DESBLOQUEADO (+100 pts)", pista: "De verdad me haces bien:c 🍀\n\n💡 Pista para la PISTA 10: El día del mes en el que mi precioso cumple meses de vida (dos dígitos)." },
    "09": { pts: 100, usado: false, num: 10, titulo: "🎂 PISTA 10: CÓDIGO CORRECTO (+100 pts)", pista: "El 09: El día exacto en el que mi noviecito amado cumple un mes más de vida. 🎂\n\n💡 Pista para la PISTA 11: El día en el que tu noviecita trae un mes más de sol al mundo." },
    "15": { pts: 100, usado: false, num: 11, titulo: "☀️ PISTA 11: CÓDIGO CORRECTO (+100 pts)", pista: "El 15: El día en el que este mundo celebra un mes más siendo iluminado por mi existencia. ☀️\n\n💡 Pista para la PISTA 12: El número del día en el que te pude decir mío." },
    "18": { pts: 100, usado: false, num: 12, titulo: "📅 PISTA 12: CÓDIGO CORRECTO (+100 pts)", pista: "El 18: Preciosos momentos junto al único al que puedo llamar orgullosamente mi novio. 📅\n\n💡 Pista para la PISTA 13: Lo que me dices cuando estoy a punto de hacer algo :3." },
    "animo": { pts: 100, usado: false, num: 13, titulo: "✨ PISTA 13: LOGRO DESBLOQUEADO (+100 pts)", pista: " 'Ánimo'Adoro que lo digas. 🥺✨\n\n💡 Pista para la PISTA 14: Una confirmación tierna." },
    "simiamor": { pts: 100, usado: false, num: 14, titulo: "🥰 PISTA 14: LOGRO DESBLOQUEADO (+100 pts)", pista: "Sí mi amor, Deberías darme la razón en todo y consentirme. 🥰\n\n💡 Pista para la PISTA 15: Mi pequeñito..." },
    "miniño": { pts: 100, usado: false, num: 15, titulo: "👶 PISTA 15: LOGRO DESBLOQUEADO (+100 pts)", pista: "Mi niño precioso, mi pequeñito amado, mi nenito engreido (wácalaquecursi). 👶❤️\n\n💡 Pista para la PISTA 16: La fecha exacta de nuestro primer beso." },
    "11/09": { pts: 100, usado: false, num: 16, titulo: "💋 PISTA 16: EFEMÉRIDE MEMORABLE (+100 pts)", pista: "Si tardaste en recordarlo tendrás problemas. 💋✨\n\n💡 Pista para la PISTA 17: Teclea el nombre de la mujer de tu vida." },
    "maria": { pts: 100, usado: false, num: 17, titulo: "👑 PISTA 17: DECLARACIÓN ACERTADA (+100 pts)", pista: "Maria. La mujer de tu vida, tu novia, futura esposa, y dueña de todo tu ser. 👑💜\n\n💡 Pista para la PISTA 18: Algo que siempre te mando a hacer pero que evitas por puerco." },
    "bañate": { pts: 100, usado: false, num: 18, titulo: "🧼 PISTA 18: LOGRO HIGIÉNICO (+100 pts)", pista: "En serio amor, ya báñese, hasta acá huele. 🧼🐷\n\n💡 Pista para la PISTA 19: Nuestro primer dibujo juntos." },
    "gusanitoborracho": { pts: 100, usado: false, num: 19, titulo: "🐛 PISTA 19: MEMORIA ARTÍSTICA (+100 pts)", pista: "A decir verdad, lo considero una obra maestra 🐛🍷\n\n💡 Pista para la PISTA 20: Cosa que haces y que repites una y otra vez hasta por lo mas bobo amor." },
    "perdon": { pts: 100, usado: false, num: 20, titulo: "🤝 PISTA 20: LOGRO DESBLOQUEADO (+100 pts)", pista: "Creo que si sigues pidiendolo de a gratis te cortaré la lengua 🤝💜\n\n💡 Pista para la PISTA 21: La fruta de la paz." },
    "mandarina": { pts: 100, usado: false, num: 21, titulo: "🍊 PISTA 21: LOGRO FRUTAL (+100 pts)", pista: "Quizá funcionaría más si te la pudiera tirar en la cabeza. 🍊✨\n\n💡 Pista para la PISTA 22:Soy la reina en eso amor (si lo niegas te asesino)" },
    "drama": { pts: 100, usado: false, num: 22, titulo: "🎭 PISTA 22: LOGRO DRAMÁTICO (+100 pts)", pista: "Sí, me paso a veces, pero así me amas. 🎭😼\n\n💡 Pista para la PISTA 23: Me paso de ello, a veces te estreso por eso." },
    "indecisa": { pts: 100, usado: false, num: 23, titulo: "🤔 PISTA 23: ESTADO IDENTIFICADO (+100 pts)", pista: "Mi poder para colapsar hilos de conversación es indiscutible. 🤔💭\n\n💡 Pista para la PISTA 24: Cómo me pones con tus bromitas:)." },
    "esponjada": { pts: 100, usado: false, num: 24, titulo: "🎈 PISTA 24: LOGRO ADVERTIDO (+100 pts)", pista: "Deberías cuidar mejor tu vida❤️\n\n💡 Pista para la PISTA 25: Se puede averiguar entrando a la papelera" },
    "mimujermanda": { pts: 100, usado: false, num: 25, titulo: "👑 PISTA 25: SUMISIÓN ABSOLUTA (+100 pts)", pista: "✔ Sincronización absoluta restablecida de forma definitiva. ¡Felicidades! Has completado el juego exitosamente. 👑❤️", isFinalCode: true },
    [konamiCode]: { pts: 100, usado: false, num: 99, titulo: "🕹️ ¡HACKER SÚPER AMOROSO! (+100 pts)", pista: "¡Has activado el Konami Code secreto! Eres oficialmente el novio más inteligente del mundo. 🕹️" }
};

let keysPressed = "";
let spaceClickCount = 0;
let currentTaskStep = 1;
let totalScore = 0;
let esquivesContador = 0;
let punishClicks = 0;
let confettiInterval = null;
let confettiArr = [];
let papeleraTimeout = null;
let yaVioMatrix = false; 


function setupButtonNo() {
    let btnNo = document.getElementById("btn-no"); 
    if (!btnNo) return;
    
    // Clonación para mantener el botón limpio de eventos repetidos
    const nuevoBtnNo = btnNo.cloneNode(true);
    btnNo.parentNode.replaceChild(nuevoBtnNo, btnNo);
    btnNo = nuevoBtnNo;

    btnNo.addEventListener("mouseover", () => {
        esquivesContador++;
        
        // 🔹 NIVEL 1: Brincos pequeños e inocentes dentro de la ventana (Primeros 2 toques)
        if (esquivesContador <= 2) { 
            let randomX = Math.random() * 80 - 40; 
            let randomY = Math.random() * 30 - 15;
            btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`; 
        } 
        // 🚀 NIVEL 2: ¡EL ESCAPE DIVERTIDO POR TODO EL ESCRITORIO! (Del toque 3 al 14)
        else if (esquivesContador < 15) { 
            let desplazarX, desplazarY;

            if (esquivesContador % 2 === 0) {
                desplazarX = Math.random() * 150 + 250; // Salto largo a la derecha (Dock)
            } else {
                desplazarX = -(Math.random() * 150 + 280); // Salto largo a la izquierda (Papelera)
            }

            if (esquivesContador % 3 === 0) {
                desplazarY = Math.random() * 100 + 150; // Salto hacia abajo
            } else {
                desplazarY = -(Math.random() * 120 + 180); // Salto hacia arriba (Barra superior)
            }
            
            Object.assign(btnNo.style, {
                position: "absolute",
                zIndex: "9999999",
                margin: "0",
                display: "inline-block"
            });
            
            btnNo.style.transform = `translate(${desplazarX}px, ${desplazarY}px)`;
        } 
        // 💥 NIVEL 3: ¡Puff! El botón explota
        else {
            btnNo.style.transform = "none";
            btnNo.classList.add("explode-animation"); 
            
            setTimeout(() => { 
                btnNo.style.display = "none"; 
                
                // 🕵️‍♀️ AQUÍ OCURRE TU COMPORTAMIENTO DESEADO:
                if (yaVioMatrix === false) {
                    // Si es la primera vez, cerramos ventana y vamos a Matrix
                    if (typeof closeWindow === "function") closeWindow('win-perdonar');
                    if (typeof lanzarLluviaBinariaLimon === "function") lanzarLluviaBinariaLimon();
                } else {
                    // Si ya la vio una vez, NO hace nada más. Se esfuma en silencio y ya.
                    console.log("El botón explotó en segunda ronda. No se fuerza Matrix.");
                }
            }, 400); 
        }
    });

    // LA TRAMPA DEL CLIC: Si logra atraparlo (Ya sea en primera o segunda vuelta)
    btnNo.addEventListener("click", (e) => {
        e.preventDefault(); 
        
        // Cerramos la ventana de la mandarina
        if (typeof closeWindow === "function") {
            closeWindow('win-perdonar');
        }
        
        // 🚨 SIEMPRE lo manda al Manual del Buen Operador si le da clic
        const punishScreen = document.getElementById("punishment-screen");
        if (punishScreen) {
            punishScreen.classList.remove("hidden");
        }
    });
}
function clickPunishmentHeart() {
    const heart = document.getElementById("broken-heart-clicker"); 
    const bar = document.getElementById("punish-progress-bar"); 
    const text = document.getElementById("punish-clicks-text");
    if (!heart || !bar || !text) return;

    punishClicks++;
    
    // Animación rápida de latido al hacer clic
    heart.classList.add("heart-beat-click"); 
    setTimeout(() => heart.classList.remove("heart-beat-click"), 100);
    
    // Actualizar barra de progreso
    let porcentaje = (punishClicks / 15) * 100; 
    bar.style.width = `${porcentaje}%`; 
    text.innerText = `Progreso de reparación: ${punishClicks} / 15 clics`;
    
    // Evolución del corazón roto
    if (punishClicks === 8) heart.innerText = "❤️‍🩹"; 
    
    // ¡Victoria! El corazón se repara por completo
    if (punishClicks >= 15) {
        heart.innerText = "👑";
        const panelCastigo = document.getElementById("punishment-screen").querySelector(".terminal-window");
        
        if (panelCastigo) {
            // 🌟 OPTIMIZADO: Ordenamos el sermón en vertical para que se lea con total comodidad en tu editor
            panelCastigo.innerHTML = `
                <div style="color: #ffbd2e; font-weight: bold; font-size: 18px; margin-bottom: 15px;"> MANUAL DEL BUEN OPERADOR</div>
                <div style="font-size: 14px; color: #fff; text-align: left; line-height: 1.6; margin-bottom: 20px; max-height: 250px; overflow-y: auto; padding-right: 5px;">
                    <p style="margin-bottom: 10px;">A ver, caballero... Un pequeño sermón sobre el perdón y saber perdonar: El orgullo no nos lleva a ningún lado y menos cuando se trata de su noviecita amada y adorada. El amor verdadero consiste en dejar ir los días tercos y aceptar las mandarinas de la paz de inmediato :), no persigas un limón por toda la pantalla </p>
                    <p>Pero bueno... como soy un amor de persona, no te preocupes, <strong>te perdono por no haberme querido perdonar a la primera</strong>. Te restauro el acceso al sistema nada mas por guapo, tu carita me ablanda el corazón. Ahora regresa allá adentro y haz las cosas bien, ¿bueno? Gracias </p>
                </div>
                <button onclick="exitPunishmentAndRetry()" style="background-color: #6a9955; color: #fff; border-color: #8cc379; padding: 10px 20px; font-weight: bold; width: 100%;">Volver a Intentarlo </button>
            `;
        }
    }
}
function forgiveAccepted() { 
    document.getElementById("huge-yes-panel").classList.remove("hidden"); 
    startConfetti(); 
}
function closeHugeYes() { 
    document.getElementById("huge-yes-panel").classList.add("hidden"); 
    closeWindow("win-perdonar"); 
}
function startConfetti() {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Configurar el lienzo al tamaño de la pantalla completa
    Object.assign(canvas.style, { display: "block", opacity: "1" });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    confettiArr = [];

    // Generamos 120 papelitos de colores brillantes
    for (let i = 0; i < 120; i++) {
        const rc = () => Math.floor(Math.random() * 255); // Función rápida para colores
        confettiArr.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: `rgba(${rc()}, ${rc()}, ${rc()}, 1)`,
            tilt: Math.random() * 10 - 5
        });
    }

    if (confettiInterval) clearInterval(confettiInterval);
    confettiInterval = setInterval(() => drawConfetti(ctx), 20);

    // A los 5 segundos limpiamos el lienzo y lo volvemos a esconder en paz
    setTimeout(() => {
        clearInterval(confettiInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = "none";
    }, 5000);
}
function drawConfetti(ctx) {
    if (!canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiArr.forEach((p) => {
        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();

        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(p.d);

        if (p.y > canvas.height) {
            p.y = -20;
            p.x = Math.random() * canvas.width;
        }
    });
}
function triggerGlobalSparkles() {
    for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement("div");
        
        // Elegir emoji brillante al azar
        sparkle.innerText = ["✨", "⭐", "🌟"][Math.floor(Math.random() * 3)];

        // Inyectar todos los estilos base de golpe
        Object.assign(sparkle.style, {
            position: "fixed",
            zIndex: "999999999",
            pointerEvents: "none",
            opacity: "1",
            fontSize: `${Math.floor(Math.random() * 12 + 14)}px`,
            left: `${Math.random() * window.innerWidth}px`,
            top: `${Math.random() * window.innerHeight}px`,
            transition: "all 1.2s ease-out"
        });

        document.body.appendChild(sparkle);

        // Activar la animación de flotación hacia arriba y desvanecido
        setTimeout(() => {
            sparkle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * -150 - 50}px) scale(0.2)`;
            sparkle.style.opacity = "0";
        }, 40);

        // Limpiar el elemento del HTML al terminar
        setTimeout(() => sparkle.remove(), 1250);
    }
}
function exitPunishmentAndRetry() { 
    document.getElementById("punishment-screen")?.classList.add("hidden"); 
    openWindow("win-perdonar"); 
    if (typeof startConfetti === "function") startConfetti(); 
}
function readPapelera() {
    if (papeleraTimeout) clearTimeout(papeleraTimeout);
    if (matrixInterval) clearInterval(matrixInterval);
    
    const body = document.getElementById("body-papelera"); 
    if (!body) return; 
    body.innerHTML = ""; 

    // 🌟 OPTIMIZADO: Tus archivos de la papelera ahora se leen en vertical con total claridad
    const archivosBorrados = [
        `<div class="trash-item" onclick="triggerFullscreenGlitch('terquedad_maria_v1.bak')">📄 terquedad_maria_v1.bak <span class='trash-size'>(0 KB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('discusiones_antiguas.log')">📄 discusiones_antiguas.log <span class='trash-size'>(1.2 MB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('momentos_tensos_reparados.tmp')">📄 momentos_tensos_reparados.tmp <span class='trash-size'>(45 KB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('modo_drama_override.bat')">📄 modo_drama_override.bat <span class='trash-size'>(7 KB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('indecisiones_totales.cfg')">📄 indecisiones_totales.cfg <span class='trash-size'>(0 KB)</span></div>`
    ];

    let lineIdx = 0;
    function typeTrashLine() { 
        if (lineIdx < archivosBorrados.length) { 
            body.innerHTML += archivosBorrados[lineIdx]; 
            lineIdx++; 
            papeleraTimeout = setTimeout(typeTrashLine, 200); 
        } 
    }
    typeTrashLine();
}
function tryEmptyTrash() { 
    openWindow("win-alerta-papelera"); 
}
function showMissionAchievement(tituloLogro, textologro) {
    const winLogro = document.getElementById("win-popup-login-final"); // 🌟 Cambiado al ID real de tu HTML para la ventana de control
    const logroTxt = document.getElementById("logro-puntos-text");
    const logroPista = document.getElementById("logro-puntos-pista");
    const btnCloseLogro = document.getElementById("btn-close-logro");

    if (!winLogro || !logroTxt || !logroPista || !btnCloseLogro) return;

    logroTxt.innerText = tituloLogro;
    logroPista.innerHTML = textologro;

    // Sumar los puntos al marcador global en vivo
    totalScore += 100;
    const scoreEl = document.getElementById("current-score");
    if (scoreEl) scoreEl.innerText = totalScore;

    // Configurar acción del botón de cierre
    btnCloseLogro.onclick = () => {
        closeWindow("win-popup-login-final");

        // 🌟 OPTIMIZADO: Avanzar el paso de la tarea de forma limpia y directa
        if (typeof currentTaskStep === "number" && currentTaskStep < 3) {
            currentTaskStep++;
        } else if (currentTaskStep === 3) {
            currentTaskStep = "final";
        }

        // ❌ ELIMINADO: Quitamos updateTaskInstructionText(); para evitar que el programa explote
    };

    openWindow("win-popup-login-final");
}