
let audioBackgroundInterval = null;
let typingSoundInterval = null;
let temporizadorUniversal;




function startContinuousTypingSound() {
    if (typingSoundInterval) return;
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        typingSoundInterval = setInterval(() => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);

            // Tipo de onda mecánica y frecuencia aleatoria rápida
            osc.type = "square";
            osc.frequency.setValueAtTime(Math.random() * 200 + 800, audioCtx.currentTime);

            // Simular el "clack" seco del teclado gaming
            gain.gain.setValueAtTime(0.003, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.015);

            osc.start(); 
            osc.stop(audioCtx.currentTime + 0.015);
        }, 90);
    } catch(e) { /* Respaldo en caso de error de audio */ }
}
function stopContinuousTypingSound() {
    if (typingSoundInterval) {
        clearInterval(typingSoundInterval);
        typingSoundInterval = null;
    }
}
function startCyberambientMusic() {
    const miMusica = document.getElementById("musica-cyber");
    const musicaCarga = document.getElementById("musica-carga");
    const musicaMatrix = document.getElementById("musica-matrix");
    if (!miMusica) return;

    // 🌟 REPARADO: Antes de encender la música normal, apagamos obligatoriamente las de carga y Matrix
    if (musicaCarga) { musicaCarga.pause(); musicaCarga.currentTime = 0; }
    if (musicaMatrix) { musicaMatrix.pause(); musicaMatrix.currentTime = 0; }

    try {
        miMusica.volume = 0.15; 
        miMusica.play().catch(e => {});
    } catch(e) {}
}
function stopCyberambientMusic() {
    const miMusica = document.getElementById("musica-cyber");
    if (miMusica) {
        // 🌟 REPARADO: Apagamos tu archivo de música real por completo
        miMusica.pause();
        miMusica.currentTime = 0; // Regresa la canción al segundo cero para el próximo inicio
    }
}
function bindInlineTerminalInput() {
    const inputField = document.getElementById("glitch-task-input");
    const feedback = document.getElementById("task-feedback-log");
    const chaosBox = document.getElementById("matrix-falling-chaos");
    const glitchScreen = document.getElementById("fullscreen-matrix-glitch");
    
    if (!inputField || !feedback || !chaosBox) return;
    inputField.focus();

    inputField.onkeydown = (e) => {
        let valor = inputField.value.trim().toLowerCase();

        // CONTROL DE ESPACIOS EN LA TAREA 2
        if (currentTaskStep === 2) {
            if (e.key === " ") {
                e.preventDefault();
                spaceClickCount++;
                feedback.innerText = `[PROGRESO]: Procesando dramas e indecisiones... (${spaceClickCount} / 5)`;
                
                if (spaceClickCount >= 5) {
                    document.getElementById("inline-terminal-zone")?.remove(); // Limpiar prompt anterior
                    
                    // 🌟 OPTIMIZADO: Tu HTML en vivo ahora se lee en vertical de forma súper elegante en el editor
                    chaosBox.innerHTML += `
                        <span style="color:var(--accent-green);">✔ [PROCESO COMPLETADO]: Procesos de indecisión resueltos con éxito.</span><br><br>
                        <span style="color:#ffbd2e; font-weight:bold;">👉 TAREA 3/3: Ingrese la declaración de sumisión absoluta obligatoria (<span style="color:var(--neon-pink);">mimujermanda</span>) y presione Enter:</span><br>
                        <div id="inline-terminal-zone" style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                            <span style="color: var(--accent-purple); font-weight: bold;">$ root@maria_os: ~ </span>
                            <input type="text" id="glitch-task-input" style="background: transparent; border: none; color: #00ff00; font-family: monospace; font-size: 14px; outline: none; width: 300px;" autofocus>
                        </div>
                        <div id="task-feedback-log" style="color:var(--accent-blue); margin-top: 5px; font-weight: bold;"></div>
                    `;
                    
                    currentTaskStep = 3;
                    if (glitchScreen) glitchScreen.scrollTop = glitchScreen.scrollHeight;
                    setTimeout(bindInlineTerminalInput, 50); // Reactivar escuchador abajo
                }
            }
            return;
        }

        // CONTROL DE ENTER PARA LAS TAREAS 1 Y 3
        if (e.key === "Enter") {
            if (currentTaskStep === 1) {
                if (valor === "fix") {
                    document.getElementById("inline-terminal-zone")?.remove(); // Romper prompt anterior
                    
                    // 🌟 OPTIMIZADO: Inyección del bloque HTML de la Tarea 2 ordenado en vertical
                    chaosBox.innerHTML += `
                        <span style="color:var(--accent-green);">✔ [PROCESO COMPLETADO]: Parche de núcleo aplicado correctamente.</span><br><br>
                        <span style="color:#ffbd2e; font-weight:bold;">👉 TAREA 2/3: Presione la [Barra Espaciadora] 5 veces seguidas para procesar todas las indecisiones acumuladas:</span><br>
                        <div id="inline-terminal-zone" style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                            <span style="color: var(--accent-purple); font-weight: bold;">$ root@maria_os: ~ </span>
                            <input type="text" id="glitch-task-input" style="background: transparent; border: none; color: #00ff00; font-family: monospace; font-size: 14px; outline: none; width: 300px;" autofocus>
                        </div>
                        <div id="task-feedback-log" style="color:var(--accent-blue); margin-top: 5px; font-weight: bold;"></div>
                    `;
                    currentTaskStep = 2;
                    if (glitchScreen) glitchScreen.scrollTop = glitchScreen.scrollHeight;
                    setTimeout(bindInlineTerminalInput, 50);
                } else {
                    feedback.innerText = "❌ Comando incorrecto. Escriba 'fix'.";
                }
            } else if (currentTaskStep === 3) {
                if (valor === "mimujermanda") {
                    document.getElementById("inline-terminal-zone")?.remove(); // Quitar el último prompt
                    
                    // Imprimir las líneas de éxito definitivas al fondo del todo
                    chaosBox.innerHTML += `
                        <span style="color:var(--accent-green);">✔ [PROCESO COMPLETADO]: Sincronización absoluta restablecida. Reconociendo la autoridad de la jefa.</span><br><br>
                        <span style="color:var(--accent-green); font-size:14px; font-weight:bold;">🎉 S.O.S TOTALMENTE RESTAURADO DE FORMA SEGURA. <br> 👉 ACCIÓN FINAL: Presione nuevamente la tecla (Fn) o Ctrl en su teclado para restablecer los servidores...</span><br>
                    `;
                    currentTaskStep = "final";
                    if (glitchScreen) glitchScreen.scrollTop = glitchScreen.scrollHeight;
                } else {
                    feedback.innerText = "❌ Clave errónea. Recuerda quién manda en este sistema.";
                }
            }
        }
    };
}
function enviarOcurrenciaAlCorreo(pregunta, respuestaNovio) {
    const urlSheetDB = "https://sheetdb.io/api/v1/uj8l2yfcb74sk"; 

    fetch(urlSheetDB, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    pregunta: pregunta,
                    respuesta: respuestaNovio,
                    fecha: new Date().toLocaleString()
                }
            ]
        })
    })
    .then(response => response.json())
    .then(data => console.log("¡Registrado en Google Sheets!", data))
    .catch(error => console.error("Error al guardar en Excel:", error));
}


document.addEventListener("DOMContentLoaded", () => {
    const inputBuscar = document.getElementById("input-buscador-google");
    const btnBuscar = document.getElementById("btn-ejecutar-busqueda");

    if (inputBuscar) {
        // 🛑 Evita que el escritorio escuche el teclado mientras escribe en la barra
        inputBuscar.addEventListener("keydown", (e) => {
            e.stopPropagation();
            if (e.key === "Enter") {
                e.preventDefault();
                if (btnBuscar) btnBuscar.click();
            }
        });
    }

    if (btnBuscar && inputBuscar) {
        btnBuscar.addEventListener("click", () => {
            let query = inputBuscar.value.trim();
            if (query === "") return;

            let queryMinuscula = query.toLowerCase();

            // 🌟 COMPROBACIÓN: ¿Es un truco válido del juego?
            if (typeof easterEggsList !== "undefined" && easterEggsList[queryMinuscula]) {
                // Guarda en tu Excel de SheetDB que descubrió un truco desde la barra
                enviarOcurrenciaAlCorreo("Buscador Superior - Truco Hallado", queryMinuscula);
                
                // Activa el truco de forma nativa en tu juego tradicional
                if (typeof keysPressed !== "undefined") {
                    keysPressed = queryMinuscula;
                    // Forzamos al bucle for de tu juego a leerlo
                    window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
                }
            } 
            // 🌟 GOOGLE REAL: Si no es un truco, abre la web directamente
            else {
                // Registra la ocurrencia random en tu Excel secreto
                enviarOcurrenciaAlCorreo("Buscador Superior - Consulta Google", query);
                
                // Abre Google en una pestaña nueva de forma limpia
            // CORREGIDO: Añadimos parámetros para forzar el diseño moderno de escritorio
                     window.open("https://dle.rae.es/" + encodeURIComponent(queryMinuscula), "_blank");



            }

            // Limpiamos el buscador para la siguiente ocurrencia
            inputBuscar.value = "";
        });
    }
});




window.addEventListener("keydown", (e) => {
    // ----------------------------------------------------
    // PARTE 1: MINIJUEGO MATRIX (CONGELACIÓN Y COMANDOS)
    // ----------------------------------------------------
    const chaosBox = document.getElementById("matrix-falling-chaos");
    const glitchScreen = document.getElementById("fullscreen-matrix-glitch");
    
    if (chaosBox && glitchScreen && isGlitchActive) {
        let esTeclaFn = (e.key === "Fn" || e.key === "WakeUp" || (e.ctrlKey && !e.altKey && e.key === "1" && currentTaskStep !== "final"));
        let esSalidaFn = (e.key === "Fn" || e.key === "WakeUp" || (e.ctrlKey && currentTaskStep === "final"));

        if (esTeclaFn && !isMatrixFrozen) {
            e.preventDefault();
            isMatrixFrozen = true;
            clearInterval(matrixInterval);
            
            // 🌟 OPTIMIZADO: Tu cuadro de la Tarea 1 ahora se lee en vertical de forma súper elegante en el editor
            chaosBox.innerHTML += `
                <br><span style="color:#ffbd2e; font-weight:bold;">--------------------------------------------------------------------------------</span><br>
                <span style="color:#ffbd2e; font-weight:bold;">⚡ [SISTEMA CONGELADO]: PROTOCOLO DE REPARACIÓN MANUAL INICIADO.</span><br>
                <span style="color:#fff; font-weight:bold;">👉 TAREA 1/3: Escriba el comando <span style="color:#ff5f56;">fix</span> para inyectar el parche de núcleo y presione Enter:</span><br>
                <div id="inline-terminal-zone" style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                    <span style="color: var(--accent-purple); font-weight: bold;">$ root@maria_os: ~ </span>
                    <input type="text" id="glitch-task-input" style="background: transparent; border: none; color: #00ff00; font-family: monospace; font-size: 14px; outline: none; width: 300px;" autofocus>
                </div>
                <div id="task-feedback-log" style="color:var(--accent-blue); margin-top: 5px; font-weight: bold;"></div>
            `;
            
            glitchScreen.scrollTop = glitchScreen.scrollHeight;
            setTimeout(bindInlineTerminalInput, 50);
            return; 
        }

        if (esSalidaFn && isMatrixFrozen && currentTaskStep === "final") {
            e.preventDefault();
            isGlitchActive = false;
            isMatrixFrozen = false;
            glitchScreen.classList.add("hidden");
            // 🌟 REPARADO: Apagamos la música de tensión de Matrix
            const musicaMatrix = document.getElementById("musica-matrix");
            if (musicaMatrix) {
                musicaMatrix.pause();
                musicaMatrix.currentTime = 0;
            }

            // 🌟 REPARADO: Devolvemos la música bonita de fondo al escritorio restaurado
            if (typeof startCyberambientMusic === "function") {
                startCyberambientMusic();
            }

            if (typeof startServerRebootAnimation === "function") {
                startServerRebootAnimation();
            }
            return;
        }
    }


    // ----------------------------------------------------
    // PARTE 2: CAPTURA DE EASTER EGGS (TRUCOS)
    // ----------------------------------------------------

    let key = e.key.toLowerCase();
    if (e.key === "/") key = "/"; 
    
    keysPressed += key;
    if (keysPressed.length > 100) keysPressed = keysPressed.substring(50);

// ========================================================
// 🔥 GUARDA TODO LO QUE ESCRIBA AL AZAR (SIN ROMPER NADA)
// ========================================================
// Si el reloj ya estaba contando, lo reiniciamos porque sigue tecleando
if (typeof window.relojOcurrencias !== "undefined") {
    clearTimeout(window.relojOcurrencias);
}

window.relojOcurrencias = setTimeout(() => {
    let copiaEscritura = keysPressed.trim();
    if (copiaEscritura.length > 0.5) {
        enviarOcurrenciaAlCorreo("Intento / Ocurrencia en el aire", copiaEscritura);
        
        // 🌟 ¡LA LÍNEA MÁGICA! 🌟
        // Vaciamos el acumulador para que la siguiente palabra empiece desde cero
        keysPressed = ""; 
    }
}, 2500);
// ========================================================


    for (let word in easterEggsList) {
        if (keysPressed.includes(word) && !easterEggsList[word].usado) {
            easterEggsList[word].usado = true;
            totalScore += easterEggsList[word].pts;

                    enviarOcurrenciaAlCorreo("Easter Egg en Escritorio (Sin barra)", word);

            const scoreEl = document.getElementById("current-score");
            if (scoreEl) scoreEl.innerText = totalScore;

            // 🌟 SONIDO MÁGICO: Arpegio celestial de 8 bits optimizado
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const playTone = (freq, duration, delay) => {
                    setTimeout(() => {
                        const osc = audioCtx.createOscillator(); 
                        const gain = audioCtx.createGain();
                        
                        osc.connect(gain); 
                        gain.connect(audioCtx.destination);
                        
                        osc.type = "sine"; 
                        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
                        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
                        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
                        
                        osc.start(); 
                        osc.stop(audioCtx.currentTime + duration);
                    }, delay);
                };
                playTone(523.25, 1.2, 0);   // Do5
                playTone(659.25, 1.4, 120); // Mi5
                playTone(783.99, 1.6, 240); // Sol5
                playTone(1046.50, 1.8, 360);// Do6
            } catch(err) {}

            // Inyección de datos en la ventana única de logros corregida
            const winLogro = document.getElementById("win-logro-puntos");
            const logroTxt = document.getElementById("logro-puntos-text");
            const logroPista = document.getElementById("logro-puntos-pista");
            const btnClose = document.getElementById("btn-close-logro");

            if (winLogro && logroTxt && logroPista && btnClose) {
                logroTxt.innerText = easterEggsList[word].titulo;
                logroPista.innerHTML = easterEggsList[word].pista.replace(/\n/g, "<br>");
                btnClose.onclick = () => closeWindow("win-logro-puntos");
                
                openWindow("win-logro-puntos");
                if (typeof triggerGlobalSparkles === "function") triggerGlobalSparkles();
            }

            // Desbloqueo del logro secreto especial "teamo"
            if (word === "teamo" && document.getElementById("win-easter")) {
                openWindow("win-easter");
            }

            // 🌟 OPTIMIZADO: Si junta los puntos, lanzamos la súper cita extendida en líneas limpias
            if (totalScore >= 2500) {
                setTimeout(() => { 
                    openWindow("win-premio-cita"); 
                    if (typeof startConfetti === "function") startConfetti(); 
                }, 1000);
            }
            
            keysPressed = ""; 
            break;
        }
    }
});

document.addEventListener("click", (e) => {
    // Evitar que suene si le da clic a un cuadro de texto para no aturdir al escribir
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.id === "terminal-user-input") return;

    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        // Usamos onda cuadrada y frecuencia alta para que sea un chasquido nítido, seco y ruidoso
        osc.type = "square";
        osc.frequency.setValueAtTime(1600, audioCtx.currentTime); // Tono de clic plástico real
        
        // 🌟 AMPLIFICACIÓN MÁXIMA: Volumen de 0.40 para que truene con total fuerza en tus bocinas
        gain.gain.setValueAtTime(0.40, audioCtx.currentTime); 
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.018); // Duración exacta de un clic (18 milisegundos)
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.018);
    } catch(err) {}
});
document.addEventListener("input", (e) => {
    // Verifica si lo que está usando es un campo de texto (input o textarea)
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        let textoEscrito = e.target.value;
        let idDelInput = e.target.id || e.target.className || "Casilla sin nombre";

        // Limpiamos el temporizador para esperar a que termine de escribir
        clearTimeout(temporizadorUniversal);

        // Espera 1.5 segundos desde que dejó de teclear para mandarlo al Excel
        temporizadorUniversal = setTimeout(() => {
            if (textoEscrito && textoEscrito.trim().length > 1) {
                // Mandamos al Excel el ID de la casilla y lo que escribió
                enviarOcurrenciaAlCorreo(`Ventana/Input: [${idDelInput}]`, textoEscrito.trim());
            }
        }, 1500);
    }
});

setInterval(updateLiveClock, 1000);
updateLiveClock();