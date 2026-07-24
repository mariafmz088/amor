const v2AcrosticoPistas = [
    "Pregunta [01/15]: ¿Cómo se llama la estructura de datos donde el primero en entrar es el primero en salir? (Se vale Google).",
    "Pregunta [02/15]: Nombre de mi perrita.",
    "Pregunta [03/15]: Apellido del piloto tricampeón de Red Bull.",
    "Pregunta [04/15]: ¿Cuál es letra que te hizo sufrir para el otro acertijo?",
    "Pregunta [05/15]: ¿Qué tipo de pintura dejó tus zapatillas con colorcito?",
    "Pregunta [06/15]: Escultura del primer museo que vimos juntos.",
    "Pregunta [07/15]: ¿Qué alimento de Popeyes vendería mi alma por comer?",
    "Pregunta [08/15]: ¿Cuál fue el primer libro que me regalaste?",
    "Pregunta [09/15]: ¿En qué fecha te pinté la carita por primera vez? (no acepto numeros amor, escribe)",
    "Pregunta [10/15]: ¿Qué instrumento mide los terremotos?",
    "Pregunta [11/15]: ¿A qué soy alérgica?",
    "Pregunta [12/15]: ¿Qué otro piloto siempre va pegadito a Max y sabrosea a Max?.",
    "Pregunta [13/15]: ¿Qué aplicación usabamos para hablar de amigos?",
    "Pregunta [14/15]: ¿Posición que prefiero?",
    "Pregunta [15/15]: ¿Palabra favorita? Quiero saber que se te ocurre, intenta"
];
const jokeList = [
    "Compilando al hombre más guapo del universo... Espera tantito. ❤️",
    "Actualizando el algoritmo de mimos... Ahora con un 27% más de cariño.",
    "¿Sabías que un Main que duerme y come bien funciona muchísimo mejor? Anda a descansar cuando toque. 😠",
    "Escaneando operadores disponibles... El más guapo sigue siendo el usuario actual.",
    "Sincronizando dos cerebritos medio dañados... Operación completada. 🧠",
    "Inicializando protocolo de abrazos largos... Carga completada. 🫂",
    "Verificando nivel de guapura... Error: el valor excede el límite permitido por el sistema.",
    "Buscando defectos en Main... 0 resultados encontrados.\n\nBueno... quizá uno.\n\nEL PIERCING DE TORO.\nSigo sin negociar eso. 🐂",
    "Optimizando recursos... Eliminando dudas e instalando todavía más besitos.",
    "Actualizando recuerdos bonitos... Esta versión incluye muchos más. ❤️",
    "Advertencia: Este programa detectó una desarrolladora profundamente enamorada del usuario.",
    "Compilando relación... Este proceso puede tardar toda una vida, pero no tengo apuro.",
    "Verificando compatibilidad...\nResultado: Mosito + Mosita = ✔",
    "Detectando sonrisita del usuario... Espero haberla encontrado. 🥹",
    "Gracias por seguir actualizando esta historia conmigo. ❤️"
];
const bootLines = [
    "$ updater.exe\n",
    /*"Buscando actualizaciones...\n",
    "Versión actual detectada:\n",
    'v1.0 "Mi Hombre"\n',
    "\n",
    "Consultando servidor...\n",
    "✔ Actualización disponible.\n",
    "\n",
    "Descargando paquete:\n",
    "love_update_v8.0.pkg\n",
    "███████████████████████████ 100%\n",
    "\n",
    "Verificando integridad...\n",
    "Sin errores encontrados.\n",
    "\n",
    "Instalando nuevas funciones...\n",
    "\n",
    "   NOTAS DE LA ACTUALIZACIÓN\n",
    "==============================\n",
    "\n",
    "+ Se añadieron más fotitos del operador precioso.\n",
    "+ Se corrigieron pequeños errores de ortografía escritos con sueño.\n",
    "+ Se optimizó el sistema de mimos.\n",
    "+ Ahora el programa requiere 27% más cariño para funcionar correctamente.\n",
    "+ Se aumentó el límite máximo permitido de besitos.\n",
    "+ Mejoras generales en estabilidad emocional (en proceso).\n",
    "+ Se redujo ligeramente la cantidad de dramas. (Resultado no garantizado).\n",
    "\n",
    "Error.\n",
    'No fue posible instalar "menos celos".\n',
    "\n",
    "Motivo:\n",
    "Archivo protegido por la desarrolladora.\n",

    "\n",
    "Actualización completada correctamente.\n",
    "\n",
    "Gracias por seguir siendo el usuario favorito de esta aplicación.\n",
    "\n",
    "Espero que esta versión te saque tantas sonrisas como la primera.\n",
    "\n",
    "Reiniciando aplicación...\n",
    "No cierres la ventanita, porfi. ❤️\n",
    "\n",
    "$ ./mi_hombre.exe\n",
    "\n",
    "Y para no perder la bonita costumbre...\n",
    "La pregunta del millón es...\n",
    "\n"*/
];
const exeLines = [
    "Inicializando proyecto...", "",
    "Actualizando dependencias...", "",
    "Importando módulo: confianza ✔",
    "Importando módulo: respeto ✔",
    "Importando módulo: admiración ✔",
    "Importando módulo: paciencia ✔",
    "Importando módulo: risas ✔",
    "Importando módulo: complicidad ✔",
    "Importando módulo: muchísimos mimos ✔", "",
    "Compilando relación...", "",
    "✔ Trabajo en equipo",
    "✔ Conversaciones difíciles",
    "✔ Aprender del otro",
    "✔ Bromas bien bobas",
    "✔ Bullying (con amor)",
    "✔ Apapachos certificados",
    "✔ Besitos premium",
    "✔ Planes para el futuro",
    "✔ Elegirnos incluso en los días complicados", "",
    "Ejecutando pruebas...", "",
    "Detectando bugs...", "",
    "Se encontraron pequeños errores de comunicación.",
    "Aplicando parches...",
    "Corrigiendo con abrazos...",
    "Reiniciando sistema emocional...",
    "Verificando estabilidad...",
    "Todo listo.", "",
    'RelationshipStatus = "Seguimos eligiéndonos todos los días. ❤️"'
];

let terminalStep = "question";
let lineIndex = 0;
let charIndex = 0;
let currentTextHtml = "";
let v2AcrosticoLetras = ["q", "p", "v", "ñ", "v", "o", "p", "a", "o", "s", "b", "c", "i", "d", "o"];
let v2AcrosticoIdx = 0;
let v2PalabrasRegistradasArray = [];
let currentProgress = 0;
let jokeInterval = null;
let progressInterval = null;
let timeRemaining = 55;

function activarPantallaCompleta() {
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
    } else if (docEl.webkitRequestFullscreen) { // Chrome, Safari y Opera
        docEl.webkitRequestFullscreen();
    } else if (docEl.mozRequestFullScreen) { // Firefox
        docEl.mozRequestFullScreen();
    } else if (docEl.msRequestFullscreen) { // Edge
        docEl.msRequestFullscreen();
    }
}


function typeBootLetter() {
    const bootTextDiv = document.getElementById("boot-text");
    const zone = document.getElementById("terminal-input-zone");
    if (!bootTextDiv) return;
    if (zone) zone.classList.add("hidden"); // Oculta la zona de entrada al arrancar

    startContinuousTypingSound();

    function runType() {
        if (lineIndex >= bootLines.length) {
            stopContinuousTypingSound();
            startCyberambientMusic();
            activateTerminalInteractivity();
            glitchScreenScrollTerminal();
            return;
        }

        let currentLineText = bootLines[lineIndex];

        if (charIndex < currentLineText.length) {
            let character = currentLineText.charAt(charIndex);
            currentTextHtml += (character === "\n") ? "<br>" : character;
            bootTextDiv.innerHTML = currentTextHtml;
            charIndex++;
            glitchScreenScrollTerminal();
            setTimeout(runType, 40);
        } else {
            lineIndex++;
            charIndex = 0;
            setTimeout(runType, 300);
        }
    }

    runType();
}
function activateTerminalInteractivity() {
    const zone = document.getElementById("terminal-input-zone");
    const promptTxt = document.getElementById("terminal-prompt-text");
    const inputField = document.getElementById("terminal-user-input");
    const bootTextDiv = document.getElementById("boot-text");
    if (!zone || !promptTxt || !inputField || !bootTextDiv) return;
    
    zone.classList.remove("hidden");
    inputField.focus();

    const actualizarPrompt = () => {
        if (terminalStep === "question") {
            promptTxt.innerHTML = `<span style="color: #fff;">¿Me amas mucho? (Y/N):</span>`;
        } else if (terminalStep === "password") {
            promptTxt.innerHTML = `<span style="color:var(--accent-yellow);">${v2AcrosticoPistas[v2AcrosticoIdx]}</span><br><span style="color:#fff;">Ingrese palabra clave:</span>`;
        }
    };
    actualizarPrompt();

    inputField.onkeydown = (e) => {
        if (e.key !== "Enter") return;

        let valor = inputField.value.trim().toLowerCase();
        inputField.value = ""; 
        const rootPrompt = `<br><span style="color: var(--accent-purple); font-weight: bold;">$ root@main_os: ~ </span>`;

        // 🛠️ COMANDO superusuario: Ir directo al escritorio principal
        if (valor === "superusuario") {
            if (jokeInterval) clearInterval(jokeInterval);
            if (progressInterval) clearInterval(progressInterval);
            
            const loadScreen = document.getElementById("loading-screen");
            const jokeScreen = document.getElementById("joke-loading-screen");
            const desktop = document.getElementById("desktop-screen");

            if (loadScreen) loadScreen.style.setProperty("display", "none", "important");
            if (jokeScreen) jokeScreen.style.setProperty("display", "none", "important");
            
            // 🌟 CORREGIDO: Usamos "block" para mantener el diseño original de tu fondo de pantalla
            if (desktop) desktop.style.setProperty("display", "block", "important");
            
            if (typeof closeWindow === "function") closeWindow("win-viejito");
            return;
        }

        // 🛠️ COMANDO supercarga: Ir directo a la pantalla de chistes
        if (valor === "cargasuperior") {
            const loadScreen = document.getElementById("loading-screen");
            const jokeScreen = document.getElementById("joke-loading-screen");

            if (loadScreen) loadScreen.style.setProperty("display", "none", "important");
            if (jokeScreen) {
                jokeScreen.classList.remove("hidden");
                // 🌟 CORREGIDO: Usamos "block" para que la ventana interna del contador no se deforme
                jokeScreen.style.setProperty("display", "block", "important");
            }
            
            // 🌟 CORREGIDO: Movimos esta línea ADENTRO del bloque para que solo se ejecute con el comando real
            if (typeof startJokeLoading === "function") startJokeLoading();
            return;
        }

        // [FASE A]: Pregunta de amor inicial
        if (terminalStep === "question") {
            if (["y", "si", "s","SI","S","yes"].includes(valor)) {
                bootTextDiv.innerHTML += `${rootPrompt}<span style="color: #00ff00;">${valor}</span><br><br><span style='color:var(--accent-green);'>✔ Conexión establecida.</span><br><span style='color:var(--accent-purple);'>[SISTEMA]: Inicializando Protocolo de Encriptación Secuencial...</span><br><span style='color:#abb2bf;'>[INFO]: Descifre las siguientes transmisiones para autorizar el escritorio.</span><br><br>`;
                terminalStep = "password";
                v2AcrosticoIdx = 0; 
                actualizarPrompt();
                glitchScreenScrollTerminal();
            } else {
                const loadingScreen = document.getElementById("loading-screen");
                if (loadingScreen) { loadingScreen.style.backgroundColor = "#000"; loadingScreen.innerHTML = ""; }
            }
        } 
        // [FASE B]: 15 Acertijos en Cadena
        else if (terminalStep === "password") {
            let letraRequerida = v2AcrosticoLetras[v2AcrosticoIdx];
            
            if (valor.length > 0 && valor.charAt(0) === letraRequerida) {
                v2PalabrasRegistradasArray.push(valor);
                
                const contenedorLista = document.getElementById("v2-lista-palabras-guardadas");
                if (contenedorLista) {
                    contenedorLista.innerHTML = v2PalabrasRegistradasArray.map((palabra, i) => 
                        `<div style="color:#27c93f;">✔ [REG_${i+1}]: <span style="color:#fff; font-weight:bold;">${palabra}</span></div>`
                    ).join("");
                }

                bootTextDiv.innerHTML += `${rootPrompt}<span style="color: #00ff00;">${valor}</span><br><span style='color:var(--accent-green);'>✔ Transmisión [${v2AcrosticoIdx + 1}] guardada con éxito.</span><br>`;
                v2AcrosticoIdx++;

                if (v2AcrosticoIdx < v2AcrosticoLetras.length) {
                    actualizarPrompt();
                } else {
                    zone.classList.add("hidden");
                    bootTextDiv.innerHTML += "<br><span style='color:var(--accent-purple); font-weight:bold; font-size:14px;'>🧠 [TRANS_COMPLETADA]: LA RESPUESTA ESTÁ EN TUS RESPUESTAS.</span><br><span style='color:#abb2bf;'>Revisa el historial de registros a tu derecha para descifrar el código maestro.</span>";
                    if (typeof spawnFinalPasswordBox === "function") setTimeout(spawnFinalPasswordBox, 1200);
                }
                glitchScreenScrollTerminal();
            } else {
                bootTextDiv.innerHTML += `${rootPrompt}<span style="color: #ff5f56;">${valor}</span><br><span style='color:var(--red-dot);'>❌ Error de descifrado: Entrada no válida para la transmisión actual.</span><br>`;
                glitchScreenScrollTerminal();
            }
        }
    };
}
function spawnFinalPasswordBox() {
    const msgBox = document.createElement("div");
    msgBox.id = "win-popup-login-final";
    msgBox.className = "window";

    Object.assign(msgBox.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "360px",
        zIndex: "999999999",
        borderColor: "var(--accent-purple)",
        boxShadow: "0 0 25px rgba(186, 85, 211, 0.4)"
    });
    msgBox.innerHTML = `
        <div class="window-header">
            <div class="dot-group"><span class="dot red"></span></div>
            <span class="window-title">Security_Gateway.exe</span>
        </div>
        <div class="window-body text-center" style="background-color: #202026; padding: 25px; color:#fff; font-family: monospace;">
            <p style="font-size:14px; font-weight:bold; color:var(--accent-purple); margin-bottom:10px; text-align: center;">🔐 CONTROL DE ACCESO AL ESCRITORIO</p>
            <p style="font-size:12px; color:#abb2bf; margin-bottom:15px; text-align: center;">Descifra el acertijo de la consola para obtener la llave maestra de desencriptación.</p>
            <input type="password" id="popup-final-pass-input" style="background:#151518; border:1px solid #444; color:#00ff00; font-family:monospace; padding:8px; width:100%; text-align:center; outline:none; border-radius:4px; font-size:14px;" placeholder="Ingrese clave oculta..." autofocus>
            <div id="popup-final-error-txt" style="color:var(--red-dot); font-size:11px; margin-top:8px; font-weight:bold; text-align: center;"></div>
        </div>
    `;
    document.body.appendChild(msgBox);
    
    const inputField = document.getElementById("popup-final-pass-input");
    if (!inputField) return;

    inputField.focus();
    inputField.onkeydown = (e) => {
        if (e.key !== "Enter") return;

        let claveIngresada = inputField.value.trim().toLowerCase();
        const errorTxt = document.getElementById("popup-final-error-txt");
        
        // 🌟 OPTIMIZADO: Simplificamos la validación usando .includes() en una sola línea corta
        if (["dientesdelata", "dientes de lata"].includes(claveIngresada)) {
            msgBox.remove(); 
            
            const bootTextDiv = document.getElementById("boot-text");
            if (bootTextDiv) {
                bootTextDiv.innerHTML += "<br><span style='color:var(--accent-green); font-weight:bold;'>✔ LLAVE MAESTRA CORRECTA. Cargando escritorio...</span>";
            }
            
            const mainLoadingScreen = document.getElementById("loading-screen");
            if (mainLoadingScreen) {
                mainLoadingScreen.classList.add("hidden");
                mainLoadingScreen.style.setProperty("display", "none", "important"); 
            }
            
            const jokeScreen = document.getElementById("joke-loading-screen");
            if (jokeScreen) {
                jokeScreen.classList.remove("hidden");
                // Aseguramos que herede el display correcto para que no se altere el contador azul
                jokeScreen.style.setProperty("display", "block", "important");
                if (typeof startJokeLoading === "function") startJokeLoading();
            }
        } else {
            if (errorTxt) errorTxt.innerText = "❌ Clave incorrecta. Ruega a tu patrona.";
        }
    };
}
function startJokeLoading() {

    activarPantallaCompleta();
    const jokeDisplay = document.getElementById("joke-display");
    const progressBar = document.getElementById("progress-bar");
    const countdownText = document.getElementById("countdown-text");
    if (!jokeDisplay || !progressBar || !countdownText) return;

    // 🌟 REPARADO: Apagamos estrictamente la música bonita de fondo antes de prender la de carga
    const musicaNormal = document.getElementById("musica-cyber");
    if (musicaNormal) { musicaNormal.pause(); musicaNormal.currentTime = 0; }

    const musicaCarga = document.getElementById("musica-carga");
    if (musicaCarga) {
        musicaCarga.volume = 0.20; 
        musicaCarga.currentTime = 0;
        musicaCarga.play().catch(e => {});
    }

    // Mostrar el primer chiste de golpe al arrancar
    jokeDisplay.innerText = jokeList[Math.floor(Math.random() * jokeList.length)];
    
    // Cambiar de chiste cada 1.5 segundos
    jokeInterval = setInterval(() => { 
        jokeDisplay.innerText = jokeList[Math.floor(Math.random() * jokeList.length)]; 
    }, 2550);

    // Intervalo de la barra de progreso
    progressInterval = setInterval(() => {
        currentProgress += 0.20; 
        if (currentProgress > 100) currentProgress = 100;
        
        progressBar.style.width = `${currentProgress}%`;
        timeRemaining = Math.max(0, 50 - Math.floor((currentProgress / 100) * 55));
        countdownText.innerText = `Tiempo restante de indexación: ${timeRemaining}s`;
        
        if (currentProgress >= 100) { 
            clearLoadingIntervals(); 
            goToDesktop(); 
        }
    }, 100);
}
function clearLoadingIntervals() { 
    clearInterval(jokeInterval); 
    clearInterval(progressInterval); 
}
function goToDesktop() { 
    const jokeScreen = document.getElementById("joke-loading-screen");
    const desktopScreen = document.getElementById("desktop-screen");

    // 🌟 REPARADO: Apagamos por completo la música de la pantalla de carga
    const musicaCarga = document.getElementById("musica-carga");
    if (musicaCarga) {
        musicaCarga.pause();
        musicaCarga.currentTime = 0;
    }

    // 🌟 REPARADO: Devolvemos tu hermosa música de fondo original al escritorio
    if (typeof startCyberambientMusic === "function") {
        startCyberambientMusic();
    }

    if (jokeScreen) {
        jokeScreen.style.setProperty("display", "none", "important");
    }
    
    if (desktopScreen) {
        desktopScreen.classList.remove("hidden");
        desktopScreen.style.setProperty("display", "block", "important");
    }
    
    if (typeof closeWindow === "function") closeWindow("win-viejito"); 
}
function confirmSkip(isViejitoAburrido) { 
    if (isViejitoAburrido) { 
        clearLoadingIntervals(); 
        goToDesktop(); 
        closeWindow("win-viejito"); // 🌟 REPARADO: Obliga a la alerta a apagarse al ir al escritorio
    } else { 
        closeWindow("win-viejito"); // 🌟 REPARADO: Obliga a la alerta a apagarse si decide quedarse a leer
    }
}




// 🔌 EL INTERRUPTOR PRINCIPAL DEL SISTEMA
// Este evento espera a que todo tu HTML cargue y despierta la terminal
window.addEventListener("DOMContentLoaded", () => {
    // Llama a la función que ahora vive en logica-terminal.js
    if (typeof typeBootLetter === "function") {
        typeBootLetter(); 
    }
});



