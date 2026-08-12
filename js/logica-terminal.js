
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
    "Gracias por seguir actualizando esta historia conmigo. ❤️",
    "⚠️ ALERTA DE SISTEMA: Detectado un bug de tinta en la muñeca. Se recomienda láser de inmediato o te dibujo encima un gusanito borracho. 🎨✍️",
    "Sincronizando ubicación satelital... Veo que te moviste 2 centímetros a la izquierda en el sillón. Reporte de actividad solicitado. 🛰️😼",
    "Verificando base de datos de apodos... Buscando 'Mafiosa'. Acceso concedido, más te vale tener tus papeles al día, operador. 🕶️⚙️",
    "Comprobando nivel de obediencia del usuario... Cargando comando: 'Báñate por el amor de Dios'. 🧼🐷",
    "Analizando el inventario... Tu llavero de panda te está vigilando en este preciso momento para que no hagas cosas malas. 🐼🔑",
    "Iniciando el protocolo Tortuga... Vamos lento, pero te aseguro que de mí no te escapas ni en cien años. 🐢💚",
    "Glitches detectados en tu sistema emocional. Menos mal que tu novia tiene un doctorado en aguantar tus dramas y caras largas. 🎭🤷‍♀️",
    "Ejecutando script de teletransportación mental... Listo, ya estoy metida en tu cabeza otra vez haciendo desorden. ⚡🧠"
];

const exeLines = [
    "Inicializando proyecto...", "",
    "Actualizando dependencias de código compartido...", "",
    "Importando módulo: confianza ✔",
    "Importando módulo: respeto ✔",
    "Importando módulo: admiración ✔",
    "Importando módulo: paciencia infinita (sobre todo de la desarrolladora) ✔",
    "Importando módulo: risas ✔",
    "Importando módulo: complicidad ✔",
    "Importando módulo: muchísimos mimos obligatorios ✔", "",
    "Compilating: Relación en producción...", "",
    "✔ Trabajo en equipo",
    "✔ Conversaciones difíciles",
    "✔ Aprender del otro",
    "✔ Bromas bien bobas",
    "✔ Bullying (con amor)",
    "✔ Monitoreo de ubicación satelital 24/7 (Broma... o tal vez no) ✔",
    "✔ Apapachos certificados",
    "✔ Besitos premium libres de impuestos",
    "✔ Planes para el futuro junto al operador más guapo",
    "✔ Elegirnos incluso en los días complicados", "",
    "Ejecutando pruebas de estrés en el entorno...", "",
    "⚠️ ADVERTENCIA: Nivel de preocupación del usuario al 99.9%.",
    "Detectado: Noviecito preocupón activando alertas por todo.",
    "Parcheando: Bajándole dos rayitas a la ansiedad de fondo... [OK]", "",
    "🔍 ANALIZANDO PARÁMETROS DE TOXICIDAD...",
    "Resultado: Nivel de toxicidad peligrosamente bajo.",
    "Intento de escena celosa detectado... Fracasó por exceso de ternura.",
    "El sistema determinó que eres un pancito de Dios que no asusta a nadie. 🍞🥰", "",
    "Detectando bugs emocionales...", "",
    "Se encontraron pequeños errores de comunicación y caras largas.",
    "Aplicando parches de emergencia...",
    "Corrigiendo con abrazos a la fuerza...",
    "Obligando al usuario a bañarse (parche higiénico)... [OK]",
    "Reiniciando sistema emocional...",
    "Verificando estabilidad de la red con el llavero de panda...",
    "Todo listo.", "",
    'RelationshipStatus = "Seguimos eligiéndonos todos los días con todo y bugs. ❤️"'
];
const v2AcrosticoPistas = [
    "¿Cómo se llama la estructura de datos donde el primero en entrar es el primero en salir? (Se vale Google).",
    "Nombre de mi perrita.",
    "Apellido del piloto tricampeón de Red Bull.",
    "¿Cuál es letra que te hizo sufrir para el otro acertijo?",
    "¿Qué tipo de pintura dejó tus zapatillas con colorcito?",
    "Escultura del primer museo que vimos juntos.",
    "¿Qué alimento de Popeyes vendería mi alma por comer?",
    "¿Cuál fue el primer libro que me regalaste?",
    "¿En qué fecha te pinté la carita por primera vez? (no acepto numeros amor, escribe)",
    "¿Qué instrumento mide los terremotos?",
    "¿A qué soy alérgica?",
    "¿Qué otro piloto siempre va pegadito a Max y sabrosea a Max?.",
    "¿Qué aplicación usábamos para hablar de amigos?",
    "¿Posición que prefiero?",
    "¿Palabra favorita? Quiero saber que se te ocurre, intenta"
];

const respuestasCorrectas = [
    "queue", "petipanes", "verstappen", "ñ", "tempera", 
    "oso", "papitasconaji", "alasdesangre", "octubre", "sismografo", 
    "bloqueador", "checo", "instagram", "tudueña", "nosabo"
];
let solvedCount = 0;
const totalNodes = 15;
let keypadInput = ""; 
const SECRET_PIN = "2026"; // 🔑 PIN secreto para forzar el sistema
const letrasHex = ["L", "O", "V", "E", "2", "0", "2", "6", "!", "X", "A", "B", "C", "D", "E"];

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



function startJokeLoading() {
    activarPantallaCompleta();
    const jokeDisplay = document.getElementById("joke-display");
    const progressBar = document.getElementById("progress-bar");
    const circlePercent = document.getElementById("circle-percent-text"); 
    
    if (!jokeDisplay || !progressBar) return;

    // Control de música nativo
    const musicaNormal = document.getElementById("musica-cyber");
    if (musicaNormal) { musicaNormal.pause(); musicaNormal.currentTime = 0; }

    const musicaCarga = document.getElementById("musica-carga");
    if (musicaCarga) {
        musicaCarga.volume = 0.20; 
        musicaCarga.currentTime = 0;
        musicaCarga.play().catch(e => {});
    }

    // Primer chiste inmediato
    jokeDisplay.innerText = jokeList[Math.floor(Math.random() * jokeList.length)];
    
    // Rotación de frases cada 2.5 segundos
    jokeInterval = setInterval(() => { 
        jokeDisplay.innerText = jokeList[Math.floor(Math.random() * jokeList.length)]; 
    }, 2550);

    // 🌟 CALIBRADO A 45 SEGUNDOS EXACTOS:
    // El intervalo corre cada 100ms (10 veces por segundo). 45 segundos = 450 iteraciones.
    // 100% / 450 = 0.2222 por cada ciclo.
    currentProgress = 0; 
    progressInterval = setInterval(() => {
        currentProgress += 0.2222; 
        if (currentProgress > 100) currentProgress = 100;
        
        // Renderizado visual en barra y anillo neón
        progressBar.style.width = `${currentProgress}%`;
        if (circlePercent) {
            circlePercent.innerText = `${Math.floor(currentProgress)}%`;
        }
        
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
function checkAnswer(nodeNum) {
    const inputElement = document.getElementById('ans' + nodeNum);
    if (!inputElement) return;

    const valueInput = inputElement.value.toLowerCase().trim();
    const respuestaEsperada = respuestasCorrectas[nodeNum - 1];

    if (valueInput === respuestaEsperada) {
        // 🌟 ¡DESTELLO VERDE EN TODA LA PANTALLA!
        const successOverlay = document.getElementById('success-screen-overlay');
        if (successOverlay) {
            successOverlay.classList.add('active');
        }

        // ⏳ Espera exactamente 2.2 segundos (2200ms) antes de procesar el éxito
        setTimeout(() => {
            // Apaga el destello verde de la pantalla
            if (successOverlay) {
                successOverlay.classList.remove('active');
            }

            const displayChar = document.getElementById('p' + nodeNum);
            if (displayChar) displayChar.innerText = letrasHex[nodeNum - 1];

            const currentNode = document.getElementById('node' + nodeNum);
            if (currentNode) {
                currentNode.classList.add('node-resolved');
                currentNode.onclick = null;
            }

            const listItem = document.getElementById('list' + nodeNum);
            if (listItem) {
                listItem.innerHTML = `Sector ${nodeNum < 10 ? '0' + nodeNum : nodeNum}: <span class="badge-ok">[OK]</span>`;
            }

            solvedCount++;
            document.getElementById('counter').innerText = `${solvedCount}/${totalNodes}`;
            document.getElementById('bar-fill').style.width = ((solvedCount / totalNodes) * 100) + '%';

            // Cierra el panel de forma fluida
            closePopup('popup' + nodeNum);

            if (solvedCount === totalNodes) {
                const masterBtn = document.getElementById('master-btn');
                if (masterBtn) {
                    masterBtn.removeAttribute('disabled');
                    masterBtn.className = 'locked-btn unlocked';
                }
            }
        }, 2200);

    } else {
        // 🚨 EFECTO DE LUZ DE ERROR EN PANTALLA (Rojo si falla)
        const errorOverlay = document.getElementById('error-screen-overlay');
        if (errorOverlay) {
            errorOverlay.classList.add('active');

            // ⏳ Apaga el efecto rojo automáticamente después de 2.2 segundos (2200ms)
            setTimeout(() => {
                errorOverlay.classList.remove('active');
            }, 2200);
        }
    }
}

function handleKeypadPress(value) {
    const pinScreen = document.getElementById('pin-screen');
    
    if (value === "C") {
        keypadInput = ""; // Borra la memoria
        if (pinScreen) pinScreen.innerText = "[SISTEMA EN ESPERA...]";
        console.log("Teclado reiniciado.");
    } else if (value === "#") {
        if (keypadInput === SECRET_PIN) {
            if (pinScreen) pinScreen.innerText = "ACCESO OTORGADO";
            triggerMassiveHack();
        } else {
            // Alarma roja de error
            keypadInput = "";
            if (pinScreen) pinScreen.innerText = "PIN INVÁLIDO";
            
            const errorOverlay = document.getElementById('error-screen-overlay');
            if (errorOverlay) {
                errorOverlay.classList.add('active');
                setTimeout(() => { 
                    errorOverlay.classList.remove('active'); 
                    if (pinScreen) pinScreen.innerText = "[SISTEMA EN ESPERA...]";
                }, 1500);
            }
        }
    } else {
        // Acumula dígitos (máximo 4 para el PIN de aniversario/secreto)
        if (keypadInput.length < 4) {
            keypadInput += value;
            // Muestra asteriscos en la pantalla digital por cada número presionado
            if (pinScreen) pinScreen.innerText = "* ".repeat(keypadInput.length);
        }
    }
}
function triggerMassiveHack() {
    solvedCount = 0;
    
    // 🚨 Activa la luz de emergencia VERDE neón de éxito en pantalla
    const successOverlay = document.getElementById('success-screen-overlay');
    if (successOverlay) successOverlay.classList.add('active');

    for (let i = 1; i <= totalNodes; i++) {
        const displayChar = document.getElementById('p' + i);
        if (displayChar) displayChar.innerText = letrasHex[i - 1];
        
        const currentNode = document.getElementById('node' + i);
        if (currentNode) {
            currentNode.classList.add('node-resolved');
            currentNode.onclick = null; 
        }
        
        const listItem = document.getElementById('list' + i);
        if (listItem) {
            listItem.innerHTML = `Sector ${i < 10 ? '0' + i : i}: <span class="badge-ok">[OVERRIDE]</span>`;
        }
        
        closePopup('popup' + i);
    }
    
    solvedCount = totalNodes;
    document.getElementById('counter').innerText = `${totalNodes}/${totalNodes}`;
    document.getElementById('bar-fill').style.width = '100%';
    
    // Desactiva el destello verde después de 2 segundos para apreciar la victoria limpia
    setTimeout(() => {
        if (successOverlay) successOverlay.classList.remove('active');
    }, 2000);

    const masterBtn = document.getElementById('master-btn');
    if (masterBtn) {
        masterBtn.removeAttribute('disabled');
        masterBtn.className = 'locked-btn unlocked';
    }
}
function openPopup(id) {
    const activePopups = document.querySelectorAll('.cyber-popup');
    activePopups.forEach(p => p.style.display = 'none');
    const popup = document.getElementById(id);
    if (popup) popup.style.display = 'block';
}
function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) popup.style.display = 'none';
}
function startLoadingPhase() {
    // 1. Apaga la pantalla del mapa usando el id que tiene en tu html
    document.getElementById("loading-screen").style.setProperty("display", "none", "important");
    
    // 2. Enciende tu pantalla de chistes nativa quitándole la clase hidden
    const jokeScreen = document.getElementById("joke-loading-screen");
    jokeScreen.classList.remove("hidden");
    jokeScreen.style.setProperty("display", "block", "important");
    
    // 3. Dispara tu función nativa para que corran los chistes y la barra azul
    if (typeof startJokeLoading === "function") startJokeLoading();
}








document.addEventListener("DOMContentLoaded", () => {
    v2AcrosticoPistas.forEach((pregunta, index) => {
        const numeroPregunta = index + 1;
        const parrafoAcertijo = document.getElementById("txt-acertijo-" + numeroPregunta);
        if (parrafoAcertijo) {
            parrafoAcertijo.innerText = `PREGUNTA [${numeroPregunta < 10 ? '0' + numeroPregunta : numeroPregunta}/15]: ${pregunta}`;
        }
    });

    const keys = document.querySelectorAll(".cyber-keypad .key");
    keys.forEach(key => {
        key.addEventListener("click", () => {
            const keyValue = key.innerText;
            handleKeypadPress(keyValue);
        });
    });
});

