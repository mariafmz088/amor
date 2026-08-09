const canvas = document.getElementById("confetti-canvas"); 
const konamiCode = "arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba";
const easterEggsList = {

    "teamo": { pts: 100, usado: false, num: 1, titulo: "🏆 PISTA 1: LOGRO DESBLOQUEADO (+100 pts)", pista: "Te amo con todo mi corazón. El hombre más guapo del mundo. ❤️\n\n💡 Pista para la PISTA 2: El color exacto de su carro." },

    "rojo": { pts: 100, usado: false, num: 2, titulo: "🚗 PISTA 2: COLOR DETECTADO (+100 pts)", pista: "¡Ese mero! El color que resalta en el asfalto. 🚗✨\n\n💡 Pista para la PISTA 3: Una palabra corta de 4 letras que rima con flor." },

    "amor": { pts: 100, usado: false, num: 3, titulo: "🌹 PISTA 3: LOGRO DESBLOQUEADO (+100 pts)", pista: "Amor... :3🌹\n\n💡 Pista para la PISTA 4: La aplicación que utilizo para el registro de mi periodo." },

    "flo": { pts: 100, usado: false, num: 4, titulo: "🌸 PISTA 4: REPORTE MENSUAL (+100 pts)", pista: "Exacto, mi calendario de confianza para que sepas cuándo tener paciencia extra y engreirme, gracias. 🌸📅\n\n💡 Pista para la PISTA 5: Uno de mis apodos de la época del colegio... cuidado conmigo." },

    "mafiosa": { pts: 100, usado: false, num: 5, titulo: "🕶️ PISTA 5: RANGO CRIMINAL DESBLOQUEADO (+100 pts)", pista: "Respeto ante la jefa. Nadie se mete con este sindicato. 🕶️🔫\n\n💡 Pista para la PISTA 6: El oficio de mi novio." },

    "operador": { pts: 100, usado: false, num: 6, titulo: "⚙️ PISTA 6: SISTEMA EN EJECUCIÓN (+100 pts)", pista: "El que maneja y controla el entorno como un experto. ⚙️💪\n\n💡 Pista para la PISTA 7: Un adjetivo innegable para describirte (porque lo eres y punto)." },

    "guapo": { pts: 100, usado: false, num: 7, titulo: "✨ PISTA 7: VALIDACIÓN ESTÉTICA (+100 pts)", pista: "Tal cual. El dueño absoluto y causante de mi caos mental. ✨🤤\n\n💡 Pista para la PISTA 8: El animalito que tiene la forma del llaverito que te regalé." },

    "panda": { pts: 100, usado: false, num: 8, titulo: "🐼 PISTA 8: OBJETO DE INVENTARIO (+100 pts)", pista: "Un pandita hermoso. 🐼🔑\n\n💡 Pista para la PISTA 9: El nombre de mi perro adorado." },

    "chancho": { pts: 100, usado: false, num: 9, titulo: "🐶 PISTA 9: MASCOTA LOCALIZADA (+100 pts)", pista: "¡El rey de la casa! aunque solo la destroce y tumbe a sus visitantes, se le adora. 🐶🐾\n\n💡 Pista para la PISTA 10: Uno de los animales que más quisiera tener en el futuro." },

    "tortuga": { pts: 100, usado: false, num: 10, titulo: "🐢 PISTA 10: DESEOS DESBLOQUEADOS (+100 pts)", pista: "Una pequeña tortuguita mi amor, de verdad quiero una. 🐢💚\n\n💡 Pista para la PISTA 11: El otro animalito que también quiero tener." },

    "loro": { pts: 100, usado: false, num: 11, titulo: "🦜 PISTA 11: REQUISITO DE FAUNA (+100 pts)", pista: "Un periquito parlanchín, amor, uno pequeñito pequeñito 🦜🗣️\n\n💡 Pista para la PISTA 12: Teclea el nombre de la mujer de tu vida." },

    "maria": { pts: 100, usado: false, num: 12, titulo: "👑 PISTA 12: DECLARACIÓN ACERTADA (+100 pts)", pista: "Maria. La mujer de tu vida, tu novia, futura esposa, y dueña de todo tu ser y de tu pilín. 👑💜\n\n💡 Pista para la PISTA 13: Nuestro primer e inigualable dibujo juntos." },

    "gusanitoborracho": { pts: 100, usado: false, num: 13, titulo: "🐛 PISTA 13: MEMORIA ARTÍSTICA (+100 pts)", pista: "A decir verdad, lo considero una obra maestra para la posteridad. 🐛🍷\n\n💡 Pista para la PISTA 14: Comando estándar de la terminal para limpiar la pantalla (Relleno informático)." },

    "clear": { pts: 100, usado: false, num: 14, titulo: "🧹 PISTA 14: TERMINAL LIMPIA (+100 pts)", pista: "Pantalla despejada de código antiguo. Todo limpio para lo que sigue. 🧹💻\n\n💡 Pista para la PISTA 15: Tipo de dato en programación que solo puede ser Verdadero o Falso (True/False)." },

    "boolean": { pts: 100, usado: false, num: 15, titulo: "🧮 PISTA 15: LÓGICA COMPILADA (+100 pts)", pista: "Mi amor por ti es una variable que siempre está en TRUE. 🧮❤️\n\n💡 Pista para la PISTA 16: El protocolo de internet seguro que empieza con H y tiene un candadito verde." },

    "https": { pts: 100, usado: false, num: 16, titulo: "🔒 PISTA 16: PROTOCOLO SEGURO (+100 pts)", pista: "Conexión encriptada y 100% segura contra intrusos. 🔒🌐\n\n💡 Pista para la PISTA 17: Bebida programadora por excelencia, oscura y con mucha cafeína." },

    "cafe": { pts: 100, usado: false, num: 17, titulo: "☕ PISTA 17: COMBUSTIBLE DE SISTEMA (+100 pts)", pista: "Energía inyectada directamente al servidor para seguir jugando. ☕🔥\n\n💡 Pista para la PISTA 18: Archivo de texto plano que suele incluir las instrucciones de uso en un repositorio." },

    "readme": { pts: 100, usado: false, num: 18, titulo: "📖 PISTA 18: DOCUMENTACIÓN LEÍDA (+100 pts)", pista: "Manual de usuario completado. Eres un novio muy aplicado. 📖✔\n\n💡 Pista para la PISTA 19: Término en inglés para referirse a un error o fallo en el sistema." },

    "bug": { pts: 100, usado: false, num: 19, titulo: "🪲 PISTA 19: ERROR DEPURADO (+100 pts)", pista: "¡Bicho eliminado! Nuestro entorno está libre de fallos técnicos. 🪲❌\n\n💡 Pista para la PISTA 20: El lenguaje de etiquetas usado para estructurar las páginas web básicas (3 letras)." },

    "html": { pts: 100, usado: false, num: 20, titulo: "🌐 PISTA 20: MAQUETACIÓN EXITOSA (+100 pts)", pista: "Estructura sólida y bien construida. Ya casi llegamos al final. 🌐🏗️\n\n💡 Pista para la PISTA 21: Lo opuesto al backend; la parte visual con la que interactúa el usuario." },

    "frontend": { pts: 100, usado: false, num: 21, titulo: "🎨 PISTA 21: INTERFAZ HERMOSA (+100 pts)", pista: "La vista es perfecta y los elementos están en su lugar correcto. 🎨✨\n\n💡 Pista para la PISTA 22: El cerebro de la computadora, la Unidad Central de Procesamiento (siglas)." },

    "cpu": { pts: 100, usado: false, num: 22, titulo: "🧠 PISTA 22: PROCESAMIENTO AL MÁXIMO (+100 pts)", pista: "Pensando en ti a una velocidad de procesamiento inalcanzable. 🧠⚡\n\n💡 Pista para la PISTA 23: Carpeta o repositorio donde se guardan los archivos borrados del sistema." },

    "papelera": { pts: 100, usado: false, num: 23, titulo: "🗑️ PISTA 23: DIRECTORIO VACÍO (+100 pts)", pista: "Los archivos viejos han sido eliminados de forma segura. Limpieza total. 🗑️🧼\n\n💡 Pista para la PISTA 24: Palabra clave que se usa para guardar los cambios en Git ('hacer un...')." },

    "commit": { pts: 100, usado: false, num: 24, titulo: "💾 PISTA 24: CAMBIOS GUARDADOS (+100 pts)", pista: "Historial actualizado correctamente. JAKDJAJAJA, ya dejaré la bobada, pongámonos serios amor. 💾💖\n\n💡 Pista para la PISTA 25: Frase de confirmación final que se puede averiguar entrando a la papelera..." },

    "soyunlobodomesticado": { pts: 100, usado: false, num: 25, titulo: "👑 PISTA 25: SUMISIÓN ABSOLUTA (+100 pts)", pista: "✔ Sincronización absoluta restablecida de forma definitiva. ¡Felicidades! Has completado el juego exitosamente. 👑❤️", isFinalCode: true },

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
                    <p style="margin-bottom: 10px;"><p>A ver, caballero... Siéntese y escuche con atención, porque le toca recibir un pequeño pero muy necesario sermón sobre el perdón y el arte de saber perdonar. Vamos a ser claros: el orgullo no nos lleva a ningún lado en este sistema, y muchísimo menos cuando se trata de su noviecita amada, adorada y dueña de su servidor central.</p>

                    <p>El amor verdadero consiste en dejar ir los días tercos, apagar los códigos de la amargura y aceptar las mandarinas de la paz de inmediato :). No persiga un limón agrio por toda la pantalla cuando tiene un jardín entero de dulzura frente a usted.</p>

                    <p>Pero bueno... analicemos la situación con frialdad matemática. Como yo soy un completo amor de persona, un alma caritativa y un monumento viviente a la paciencia, no te preocupes.</p>

                    <p>Es más, mi nivel de benevolencia es tan astronómico que <strong>te perdono por la osadía de no haberme querido perdonar a la primera</strong>. Sí, leyó bien: estoy perdonando tu falta de perdón inicial, un bucle de compasión que solo una reina como yo podría ejecutar sin que se le caiga la corona.</p>

                    <p>Te restauro el acceso total al sistema con privilegios de administrador nada más porque estás muy guapo, tu carita preciosa me ablanda el corazón y, la verdad, el servidor se ve muy aburrido sin tu usuario activo.</p>

                    <p>Ahora regrese allá adentro, reinicie sus procesos afectivos y haga las cosas bien, ¿bueno? Gracias.</p>

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
        `<div class="trash-item" onclick="triggerFullscreenGlitch('indecisiones_totales.cfg')">📄 indecisiones_totales.cfg <span class='trash-size'>(0 KB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('bucle_toxico_noviecito_drama.exe')">📄 bucle_toxico_noviecito_drama.exe <span class='trash-size'>(50.0 GB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('historial_ubicaciones_24_7.db')">📄 historial_ubicaciones_24_7.db <span class='trash-size'>(8.4 GB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('rastreador_satelital_antinovias.sh')">📄 rastreador_satelital_antinovias.sh <span class='trash-size'>(12 KB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('modo_toxico_intermitente.cfg')">📄 modo_toxico_intermitente.cfg <span class='trash-size'>(400 KB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('limon_perseguido_por_la_pantalla.png')">📄 limon_perseguido_por_la_pantalla.png <span class='trash-size'>(15 MB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('reporte_visto_por_un_milisegundo.log')">📄 reporte_visto_por_un_milisegundo.log <span class='trash-size'>(3.2 MB)</span></div>`
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