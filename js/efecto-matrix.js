let matrixInterval = null;
let isGlitchActive = false;
let isMatrixFrozen = false;
let charGlitchIdx = 0;
let textoGlitchAcumulado = "";
let binarioAnimationId = null;
let limonModoFase = 1;
let gameHeartsCaught = 0;
let minigameIntervalId = null;
let gameHeartsArray = [];


function glitchScreenScrollTerminal() {
    const activeTerminal = document.querySelector(".terminal-active-body");
    if (activeTerminal) {
        activeTerminal.scrollTop = activeTerminal.scrollHeight;
    }
}
function triggerFullscreenGlitch(archivoNombre) {
    const glitchScreen = document.getElementById("fullscreen-matrix-glitch");
    const chaosBox = document.getElementById("matrix-falling-chaos");
    if (!glitchScreen || !chaosBox) return;

    // 🌟 EFECTO DE CINE: Apagamos tu música de fondo normal
    const musicaNormal = document.getElementById("musica-cyber");
    if (musicaNormal) musicaNormal.pause();

    // 🌟 EFECTO DE CINE: Encendemos la música de tensión de Matrix
    const musicaMatrix = document.getElementById("musica-matrix");
    if (musicaMatrix) {
        musicaMatrix.volume = 0.20; // Un volumen imponente para el susto
        musicaMatrix.currentTime = 0;
        musicaMatrix.play().catch(e => {});
    }

    // Resetear estados internos del colapso
    isGlitchActive = true;
    isMatrixFrozen = false;
    currentTaskStep = 1;
    spaceClickCount = 0;
    
    if (matrixInterval) clearInterval(matrixInterval);

    // Encabezado de alerta inicial fijo
    chaosBox.innerHTML = `
        <span class="matrix-red-alert">[CRITICAL FAULT]: FORZANDO ACCESO EN SECTOR /Trash/${archivoNombre}...</span><br>
        <span class="matrix-red-alert">🔥 CORE_DUMP: COLAPSO CRÍTICO. VOLCADO DE MEMORIA EN CURSO...</span><br>
        <span style="color:#4fc1ff;">[AVISO]: ACCIÓN detener la inyección de datos...</span><br>
        --------------------------------------------------------------------------------<br>
    `;

    const frasesMatrixInfinitas = [
        "🚨 [OVERFLOW ALERT]: Se detectaron altos niveles de drama y terquedad acumulados.<br>",
        "ERROR_DATA_CORRUPT // modo_indecision_infinito == true // clearing_cache<br>",
        "⚠️ [WARNING]: Alerta del sistema. La usuaria se esponja demasiado rápido.<br>",
        "🔥 [CRITICAL]: El sistema se resiste a almacenar discusiones obsoletas. Destruyendo logs...<br>",
        "Exception in thread 'Love': TerquedadTemporaryError // safe_mode_failed<br>",
        "🚨 [SECURITY VIOLATION]: Acceso restringido. No se puede revivir el pasado aquí dentro.<br>",
        "⚠️ [ALERTA CONSOLA]: Demasiados procesos de indecisión colapsando el hilo principal.<br>",
        "01001110 01010101 01001110 01000011 01000001 // baches_superados_con_exito == true<br>",
        "Refrescando entorno... Estabilizando hilos principales de la relación... [OK]<br>"
    ];

    glitchScreen.classList.remove("hidden");

    // BUCLE DE CAÍDA OPTIMIZADO
    matrixInterval = setInterval(() => {
        if (isMatrixFrozen) return;

        let fraseAlAzar = frasesMatrixInfinitas[Math.floor(Math.random() * frasesMatrixInfinitas.length)];
        let caracteresBasura = Math.random().toString(36).substring(2, 10).toUpperCase();
        let lineaCompleta = `<span>[${caracteresBasura}] ${fraseAlAzar}</span>`;

        chaosBox.innerHTML += lineaCompleta.replace(/🚨|🔥|\[CRITICAL\]/g, '<span class="matrix-red-alert">$&</span>')
                                           .replace(/⚠️|\[WARNING\]/g, '<span class="matrix-yellow-warn">$&</span>')
                                           .replace(/\[OK\]/g, '<span style="color:#27c93f;">[OK]</span>');

        glitchScreen.scrollTop = glitchScreen.scrollHeight;

        if (chaosBox.innerHTML.length > 9000) {
            chaosBox.innerHTML = chaosBox.innerHTML.substring(3000);
        }
    }, 25);
}
function startServerRebootAnimation() {
    const rebootScreen = document.getElementById("server-reboot-screen");
    const bar = document.getElementById("reboot-progress-bar");
    const statusTxt = document.getElementById("reboot-status-text");
    
    if (!rebootScreen || !bar || !statusTxt) return;
    rebootScreen.classList.remove("hidden");

    // 🌟 REPARADO: Apagamos estrictamente la música bonita de fondo antes de prender la de carga
    const musicaNormal = document.getElementById("musica-cyber");
    if (musicaNormal) { 
        musicaNormal.pause(); 
        musicaNormal.currentTime = 0; 
    }

    // 🌟 EFECTO DE CINE: Encendemos la música divertida de espera para el reinicio azul
    const musicaCarga = document.getElementById("musica-carga");
    if (musicaCarga) {
        musicaCarga.volume = 0.20; 
        musicaCarga.currentTime = 0; 
        musicaCarga.play().catch(e => {});
    }

    const estadosServidor = [
        "Estado: Aplicando parches en caliente de la base de datos...",
        "Estado: Conectando nodos de comunicación interpersonal... [OK]",
        "Estado: Eliminando historial de indecisiones y dramas... Éxito.",
        "Estado: Sincronizando entorno de producción: Novios_Perfectos_S.A.",
        "Estado: Levantando todos los servicios esenciales... Listo. ❤️"
    ];

    let progreso = 0;
    let tiempoRestante = 35;

    let progressInterval = setInterval(() => {
        progreso += 0.2857;
        if (progreso > 100) progreso = 100;
        
        bar.style.width = `${progreso}%`;
        tiempoRestante = Math.max(0, 35 - Math.floor((progreso / 100) * 35));
        
        let indexEstado = Math.floor((progreso / 100) * (estadosServidor.length - 1));
        let estadoActual = estadosServidor[indexEstado];

        statusTxt.innerHTML = `${estadoActual} <br> <span style="color:var(--accent-yellow); font-size:11px;">Tiempo estimado de restauración: ${tiempoRestante}s</span>`;

        if (progreso >= 100) {
            clearInterval(progressInterval);
            
            // 🌟 REPARADO: Apagamos por completo la música de espera al terminar el reinicio azul
            if (musicaCarga) {
                musicaCarga.pause();
                musicaCarga.currentTime = 0;
            }

            // 🌟 REPARADO: Devolvemos tu música favorita normal de fondo usando su función oficial limpia
            if (typeof startCyberambientMusic === "function") {
                startCyberambientMusic();
            }

            setTimeout(() => {
                rebootScreen.classList.add("hidden");
                closeWindow("win-papelera");
                if (typeof readPapelera === "function") readPapelera(); 
                if (typeof showRestorationWarningWindow === "function") showRestorationWarningWindow();

                if (totalScore >= 2500) {
                    setTimeout(() => {
                        openWindow("win-premio-cita");
                        if (typeof startConfetti === "function") startConfetti();
                    }, 1200);
                }
            }, 600);
        }
    }, 100);
}
function lanzarLluviaBinariaLimon() {
    const screen = document.getElementById("limon-matrix-screen");
    const canvas = document.getElementById("canvas-binario");
    const panelIzqText = document.getElementById("limon-text-stage1");
    const panelDer = document.getElementById("limon-panel-der");
    const panelDerText = document.getElementById("limon-text-stage2");
    const promptZone = document.getElementById("limon-prompt");
    const shellLabel = document.getElementById("limon-shell-label");
    const cmdInput = document.getElementById("limon-input-cmd");

    if (!screen || !canvas || !panelIzqText || !panelDerText) return;

    // 🎵 Encender música de tensión
    const musicaNormal = document.getElementById("musica-cyber");
    if (musicaNormal) musicaNormal.pause();
    const musicaMatrix = document.getElementById("musica-matrix");
    if (musicaMatrix) { musicaMatrix.volume = 0.25; musicaMatrix.currentTime = 0; musicaMatrix.play().catch(()=>{}); }

    limonModoFase = 1;
    screen.classList.remove("hidden");

    // ==========================================
    // 🎨 LLUVIA BINARIA EN FONDO NEGRO (CANVAS)
    // ==========================================
    const ctx = canvas.getContext("2d");
    function ajustarCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    ajustarCanvas();
    window.addEventListener("resize", ajustarCanvas);

    const fontSize = 14;
    const columnas = Math.floor(canvas.width / fontSize) + 1;
    const caidaY = Array(columnas).fill(1);

    function dibujarLluvia() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ff66"; // Lluvia puramente verde
        ctx.font = `${fontSize}px 'Consolas', monospace`;
        for (let i = 0; i < caidaY.length; i++) {
            const digit = Math.random() > 0.5 ? "1" : "0";
            ctx.fillText(digit, i * fontSize, caidaY[i] * fontSize);
            if (caidaY[i] * fontSize > canvas.height && Math.random() > 0.975) { caidaY[i] = 0; }
            caidaY[i]++;
        }
        binarioAnimationId = requestAnimationFrame(dibujarLluvia);
    }
    dibujarLluvia();

    // ==========================================
    // 📊 IMPRESIÓN DEL PANEL 1 (IZQUIERDA)
    // ==========================================
    panelIzqText.innerHTML = `
        <span style="color: #00ff66;">⚙️ [SYS_REGISTERS]:</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;- REG_ALPHA : <span style="color: #a2e080;">0x07D3</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;- REG_BETA  : <span style="color: #a2e080;">0x07D4</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;- OFFSET_X  : <span style="color: #a2e080;">0x12</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;- OFFSET_Y  : <span style="color: #a2e080;">0x0B</span><br><br>
        <span style="color: #00ff66;">🚨 [SYSTEM_LOGS]:</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;[LOG_01]: Thread_07D4_1510 initialized successfully at runtime.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[LOG_02]: Thread_07D3_0911 high priority mutex lock established.<br>
    `;

    // Pasados 1.5 segundos, el Panel 1 manda una instrucción para inicializar el Panel 2
    setTimeout(() => {
        panelIzqText.innerHTML += `<br><span style="color: #ffbd2e; font-weight: bold; animation: pulse 1s infinite;">[SISTEMA]: STAGE 1 volcado. Escriba 'sudo init_stage2' para enlazar terminales...</span>`;
        
        // Habilitamos la consola del panel derecho en modo espera básico
        if (promptZone) promptZone.classList.remove("hidden");
        if (shellLabel) shellLabel.style.color = "#00ff66";
        if (cmdInput) {
            cmdInput.removeAttribute("disabled");
            cmdInput.style.color = "#00ff66";
            cmdInput.value = "";
            cmdInput.focus();
        }
    }, 1500);

    // ==========================================
    // ⌨️ SISTEMA DE COMANDOS CRIPTOGRÁFICOS
    // ==========================================
    if (cmdInput) {
        cmdInput.onkeydown = function(e) {
            if (e.key === "Enter") {
                let valor = cmdInput.value.trim();
                let valorMin = valor.toLowerCase();
                cmdInput.value = "";

                // 🔗 INTERCONEXIÓN: Comando para encender el Panel Derecho
                if (limonModoFase === 1) {
                    if (valorMin === "sudo init_stage2") {
                        
                        // Encendemos visualmente el panel derecho (Se vuelve verde neón)
                        panelDer.style.borderColor = "#00ff66";
                        panelDer.style.color = "#00ff66";
                        panelDer.style.boxShadow = "0 0 25px rgba(0, 255, 102, 0.25)";
                        document.getElementById("title-stage2").style.color = "#00ff66";

                        // Cargamos la Fase 2 con tus textos carmesí solicitados
                        panelDerText.innerHTML = `
                            <span style="color: #dc143c; font-weight: bold;">⚠️ [CRITICAL]: Stack corrupted at memory address:<br>&nbsp;&nbsp;(REG_ALPHA + REG_BETA) / OFFSET_X</span><br><br>
                            <span style="color: #00ff66;">[SHELL]: Enter your cryptographic signature to stabilize the core:</span><br>
                            <span style="color: #a2e080;">$ sudo ./unlock_kernel.bin --key [INPUT_REQUIRED]</span>
                        `;
                        
                        limonModoFase = 2;
                    } else {
                        alert("❌ Comando inválido. Primero debes enlazar los paneles con 'sudo init_stage2'");
                    }
                } 

                // 🔐 PANTALLA FINAL: Validación sin ventanas alert() molestas
                else if (limonModoFase === 2) {
                    if (valor === "222_AMOR" || valorMin === "222_amor") {
                        
                        // 1. Apagamos por completo las animaciones y el lienzo de la lluvia anterior
                        cancelAnimationFrame(binarioAnimationId);
                        window.removeEventListener("resize", ajustarCanvas);
                        
                        // 2. Escondemos la pantalla de la Matrix Binaria completa con sus paneles
                        screen.classList.add("hidden");
                        if (promptZone) promptZone.classList.add("hidden");

                        // 3. 🚀 ACTIVAMOS LA NUEVA PANTALLA DEL SERMÓN TRAMPA
                        const sermonScreen = document.getElementById("screen-sermon-trap");
                        if (sermonScreen) {
                            sermonScreen.classList.remove("hidden");
                        }
                        
                    } else {
                        // Mensaje de error integrado directo en la pantalla por si falla la clave
                        panelDerText.innerHTML += `<br><span style="color: #ff3333; font-weight:bold;">[ERROR]: Firma criptográfica incorrecta. Núcleo inestable.</span>`;
                    }
                }

            }
        };
    }
}
// 📋 FUNCIÓN QUE EVALÚA SI LEYÓ O NO EL TESTAMENTO
function procesarTrampaLectura(esCorrecto) {
    // Escondemos el cuadro del sermón de la pantalla
    document.getElementById("screen-sermon-trap").classList.add("hidden");
    
    let scoreEl = document.getElementById("current-score");
    let actualScore = parseInt(scoreEl.innerText) || 0;

    if (esCorrecto) {
        // 🎉 ¡GANÓ EL JUEGO! Le sumamos los 1000 puntos completos por precioso y atento
        let nuevoScore = actualScore + 1000;
        scoreEl.innerText = nuevoScore;
        if (typeof verificarLogroPuntos === "function") verificarLogroPuntos(nuevoScore);
        
        document.getElementById("game-status-title").innerHTML = "🔓 ¡FIRMA DE LECTURA CONFIRMADA! (+1000 pts) <br><span style='color:#50fa7b; font-size:12px;'>Reescribiendo archivos del escritorio...</span>";
    } else {
        // ❌ CAYÓ EN LA TRAMPA: Le sumamos 10 pero le restamos un castigo por distraído (-400 puntos)
        let nuevoScore = Math.max(0, actualScore + 10);
        scoreEl.innerText = nuevoScore;
        if (typeof verificarLogroPuntos === "function") verificarLogroPuntos(nuevoScore);
        
        document.getElementById("game-status-title").innerHTML = "❌ ¡CAÍSTE EN LA TRAMPA POR NO LEER! (-390 pts) <br><span style='color:#ff5555; font-size:12px;'>Penalización aplicada por ignorar a tu novia.</span>";
    }

    esquivesContador = 0; 
    yaVioMatrix = true; 

    // Despertamos la pantalla de carga con el minijuego interactivo
    document.getElementById("screen-loading-minigame").classList.remove("hidden");
    iniciarMinijuegoCarga();
}

function iniciarMinijuegoCarga() {
    const canvas = document.getElementById("canvas-minijuego");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    gameHeartsCaught = 0;
    gameHeartsArray = [];
    document.getElementById("game-hearts-score").innerText = "0";
    document.getElementById("game-loading-bar").style.width = "0%";

    // Crear corazones flotantes aleatorios
    for (let i = 0; i < 4; i++) {
        gameHeartsArray.push({
            x: Math.random() * (canvas.width - 30) + 15,
            y: Math.random() * (canvas.height - 30) + 15,
            vx: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
            vy: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
            radius: 12
        });
    }

    // Escuchar el clic del mouse para atrapar los corazones rebotines
    canvas.onclick = function(e) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        gameHeartsArray.forEach((heart, index) => {
            let dist = Math.sqrt((mouseX - heart.x)**2 + (mouseY - heart.y)**2);
            if (dist <= heart.radius + 8) {
                // ¡Atrapado! Lo reubicamos y sumamos al contador
                heart.x = Math.random() * (canvas.width - 30) + 15;
                heart.y = Math.random() * (canvas.height - 30) + 15;
                gameHeartsCaught++;
                document.getElementById("game-hearts-score").innerText = gameHeartsCaught;

                // Cada corazón atrapado llena un 20% la barra de carga visual
                let progreso = Math.min(100, gameHeartsCaught * 20);
                document.getElementById("game-loading-bar").style.width = `${progreso}%`;

                // Al atrapar 5 corazones, el juego termina con éxito y limpia la pantalla
                if (gameHeartsCaught >= 5) {
                    clearInterval(minigameIntervalId);
                    document.getElementById("screen-loading-minigame").classList.add("hidden");
                    
                    // Apagamos la música de tensión y restauramos el fondo del sistema normal
                    const musicaMatrix = document.getElementById("musica-matrix");
                    if (musicaMatrix) musicaMatrix.pause();
                    const musicaNormal = document.getElementById("musica-cyber");
                    if (musicaNormal) { musicaNormal.currentTime = 0; musicaNormal.play().catch(()=>{}); }
                }
            }
        });
    };

    // Bucle de renderizado físico para los rebotes dentro del cuadrito
    minigameIntervalId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        gameHeartsArray.forEach(heart => {
            // Mover
            heart.x += heart.vx;
            heart.y += heart.vy;

            // Rebotar en paredes laterales
            if (heart.x - heart.radius < 0 || heart.x + heart.radius > canvas.width) heart.vx *= -1;
            if (heart.y - heart.radius < 0 || heart.y + heart.radius > canvas.height) heart.vy *= -1;

            // Dibujar un corazón pixelado estético de color rosa
            ctx.fillStyle = "#ff79c6";
            ctx.font = "20px Arial";
            ctx.fillText("❤️", heart.x - 10, heart.y + 7);
        });
    }, 1000 / 60);
}