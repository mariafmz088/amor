const FECHA_INICIO = new Date(2025, 10, 18, 15, 4, 0);
let highestZIndex = 25;
let cartaTimeout = null;
let jsonTimeout = null;
let logTimeout = null;
let exeTimeout = null;


function openWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;

    highestZIndex++;
    win.style.zIndex = highestZIndex;
    win.classList.remove("hidden"); 
    win.style.setProperty("display", "block", "important"); 

    if (id === "win-viejito") {
        win.style.setProperty("z-index", "99999999", "important");
    }

    // Revisa que tu openWindow tenga este reinicio limpio para el perdón:
    if (id === "win-perdonar") {
        // 1. Reseteamos el comportamiento de escape del botón NO
        const btnNo = document.getElementById("btn-no");
        if (btnNo) {
            btnNo.classList.remove("explode-animation");
            Object.assign(btnNo.style, {
                display: "inline-block",
                position: "relative",
                transform: "translate(0px, 0px)",
                left: "auto",
                top: "auto",
                margin: "0"
            });
        }
        esquivesContador = 0;
        if (typeof setupButtonNo === "function") { setupButtonNo(); }

        // 2. 🚀 INICIALIZACIÓN AUTOMÁTICA DEL ESCÁNER DE HISTORIAL
        const scannerZone = document.getElementById("hotfix-scanner-zone");
        const letterZone = document.getElementById("hotfix-real-letter");
        const logBox = document.getElementById("hotfix-live-logs");

        if (scannerZone && letterZone && logBox) {
            scannerZone.classList.remove("hidden");
            letterZone.classList.add("hidden");
            logBox.innerHTML = "";

            // Tus comandos personalizados explicados en español
            const lineasSermon = [
                "🔍 [ANALIZANDO]: Escaneando registro de conversaciones recientes...",
                "⚠️ [ALERTA]: Se detectó un silencio prolongado e inesperado en el sector_04.",
                "⚠️ [ALERTA]: Altos niveles de orgullo acumulados en el historial de la semana.",
                "🛠️ [REPARANDO]: Purgando malos ratos y reseteando actitudes tercas... 100%",
                "💖 [INSTALANDO]: Sobrescribiendo sistema con el módulo 'mimos_y_abrazos.bin'...",
                "✨ [ÉXITO]: Conexión del corazón reestablecida. Desplegando mensaje de tu novia:"
            ];

            // Va inyectando los renglones de código uno por uno de forma fluida
            lineasSermon.forEach((linea, index) => {
                setTimeout(() => {
                    if (linea.includes("ALERTA")) {
                        logBox.innerHTML += `<div style="color: #ffbd2e; margin-bottom: 6px;">${linea}</div>`;
                    } else if (linea.includes("ÉXITO")) {
                        logBox.innerHTML += `<div style="color: #4fc1ff; font-weight: bold; margin-bottom: 6px;">${linea}</div>`;
                    } else {
                        logBox.innerHTML += `<div style="margin-bottom: 6px;">${linea}</div>`;
                    }
                }, (index + 1) * 750); // Ajustado para que corra rápido y no aburra
            });

            // Al terminar la última línea de éxito, apaga el láser y revela la carta dulce
            setTimeout(() => {
                scannerZone.classList.add("hidden");
                letterZone.classList.remove("hidden");
            }, (lineasSermon.length + 1.2) * 750);
        }
    }




    const dockItem = document.getElementById(`dock-${id}`);
    if (dockItem) { 
        dockItem.classList.remove("minimized"); 
        dockItem.classList.add("running"); 
    }

    if (id === "win-contador") {
    iniciarUptimeTracker();
}}
function closeWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;
    
    win.style.setProperty("display", "none", "important");
    win.classList.add("hidden"); 
    
    // 🌟 REPARADO: Si cierran la ventana de mimos, escondemos al limón del fondo de pantalla al instante
    if (id === "win-perdonar") {
        const btnNo = document.getElementById("btn-no");
        if (btnNo) {
            btnNo.style.setProperty("display", "none", "important");
        }
    }
    
    const dockItem = document.getElementById(`dock-${id}`); 
    if (dockItem) dockItem.className = "dock-item"; 
}
function minimizeWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;

    // 🌟 VOLVEMOS AL ESTADO PERFECTO: Usamos la clase hidden nativa que antes te corría genial
    win.classList.add("hidden"); 
    win.style.setProperty("display", "none", "important");

    const dockItem = document.getElementById(`dock-${id}`); 
    if (dockItem) { 
        dockItem.classList.remove("running"); 
        dockItem.classList.add("minimized"); 
    } 
}
function toggleMinimize(id, textLoaderFunctionName) {
    const win = document.getElementById(id); 
    if (!win) return;
    
    // 🌟 REPARADO: Si la ventana tiene la clase hidden o el display apagado, la restaura de inmediato
    if (win.classList.contains("hidden") || win.style.display === "none") { 
        openWindow(id); 
        if (textLoaderFunctionName && typeof window[textLoaderFunctionName] === "function") { 
            window[textLoaderFunctionName](); 
        } 
    } else { 
        minimizeWindow(id); 
    }
}
function readCarta() {
    if (cartaTimeout) clearTimeout(cartaTimeout);
    const body = document.getElementById("body-carta"); if(!body) return; body.innerHTML = "";
    const textoCarta = "Hola otra vez, Main. ❤️ \n\nSi encontraste esta actualización es porque, sorprendentemente, el proyecto sigue vivo y seguimos sacando versiones nuevas.\n\nEsta ya no viene solo con chistes o tonterías escondidas. Viene con un poquito más de nosotros.\n\n En estos meses aprendí que querer a alguien también significa aprender su idioma. A veces tú hablas desde la preocupación, yo desde el miedo, y terminamos creyendo que hablamos de cosas distintas, cuando en realidad los dos solo queremos lo mismo: cuidar al otro.\n\nTodavía me falta muchísimo por aprender. Habrá días en los que me cueste explicar lo que siento, otros en los que haga un drama enorme por cosas chiquitas y otros en los que necesite un abrazo antes que cualquier solución. \n\nPero también prometo seguir intentándolo. Gracias por seguir aquí, por tenerme paciencia incluso cuando mi cabecita decide complicar todo un poquito más de la cuenta. Y gracias por hacerme sentir que este proyecto vale la pena todos los días. Te amo muchísimo. \n\n Ahora sí...\n\n Continúe ejecutando el programa, operador precioso. ❤️ ";
    let idx = 0;
    function type() { if(idx < textoCarta.length) { let char = textoCarta.charAt(idx); body.innerHTML += char === "\n" ? "<br>" : char; idx++; cartaTimeout = setTimeout(type, 25); } }
    type();
}
function readJson() {
    if (jsonTimeout) clearTimeout(jsonTimeout);
    
    const pre = document.getElementById("body-json"); 
    if (!pre) return; 
    pre.innerHTML = "";

    // 🌟 OPTIMIZADO: Tu JSON ahora se lee en vertical sin estirar la pantalla hacia los lados
const textoJson = `{
  "responsable": true,
  "tierno": true,
  "guapo": true,
  "inteligente": true,
  "trabajador": true,
  "paciente": true,
  "noble": true,
  "atento": true,
  "me_hace_reir": true,
  "me_hace_sentir_segura": true,
  "mi_lugar_seguro": true,
  "operador_mas_guapo": true,
  "me_enamora_todos_los_dias": true,
  "sabe_escuchar": true,
  "apoya_mis_proyectos": true,
  "besitos_en_la_frente": true,
  "abrazos_sanadores": true,
  "detallista": true,
  "comprensivo": true,
  "mi_mejor_amigo": true,
  "me_da_paz": true,
  "su_sonrisa": true,
  "su_mirada": true,
  "me_cuida_cuando_enfermo": true,
  "hace_los_peores_momentos_buenos": true,
  "acepta_mis_bugs": true,
  "no_me_juzga": true,
  "me_motiva_a_mejorar": true,
  "hace_que_el_tiempo_vuele": true,
  "leal": true,
  "su_olor": true,
  "sus_mensajes_de_buenos_dias": true,
  "me_deja_ser_yo_misma": true,
  "respeta_mis_silencios": true,
  "admiro_su_fuerza": true,
  "me_mira_con_amor": true,
  "es_mi_persona_favorita": true,
  "calma_mi_ansiedad": true,
  "celebra_mis_logros": true,
  "es_mi_hogar": true,
  "proyecto_de_vida_juntos": true,
  "lo_amo": "Infinity"
}`;


    let idx = 0;
    function typeHtmlJson() {
        if (idx < textoJson.length) { 
            pre.innerHTML += textoJson.charAt(idx); 
            idx++; 
            jsonTimeout = setTimeout(typeHtmlJson, 15); 
        } else {
            // 🌟 OPTIMIZADO: Coloreado en bloque directo usando clases de tu CSS
            pre.innerHTML = pre.innerHTML
                .replace(/"([^"]+)":/g, '<span class="j-key">"$1"</span>:')
                .replace(/: (true|false|"Infinity")/g, ': <span class="j-val">$1</span>');
        }
    }
    typeHtmlJson();
}
function readLog() {
    if (logTimeout) clearTimeout(logTimeout);
    
    const body = document.getElementById("body-log"); 
    if (!body) return; 
    body.innerHTML = "";

    // 🌟 OPTIMIZADO: Tus logs ahora se leen en vertical con total claridad
const textoLogs = `[INFO] Actualizando módulo de comunicación...
    [OK] Se añadieron más palabras antes de los silencios.

    [PATCH] Mejorada la detección de abrazos necesarios.
    [PATCH] Reducido el tiempo entre 'estoy bien' y 'en realidad no'.

    [WARNING] La desarrolladora sigue creyendo que puede sola.
    [WARNING] Puede ocultar tristeza detrás de chistes muy malos.
    [WARNING] Continúa existiendo una tendencia preocupante a sobrepensar todo.

    [INFO] El operador sigue siendo la persona favorita de la desarrolladora.
    [INFO] Su sonrisa continúa teniendo efectos secundarios graves.
    [INFO] La usuaria sigue sintiéndose muy orgullosa de él aunque no siempre lo diga.

    [NEW] Implementado el protocolo: 'abrazar primero, preguntar después'.
    [NEW] Añadido soporte para conversaciones difíciles.

    [FIX] Corregido un error donde la usuaria pedía espacio cuando en realidad quería compañía.
    [FIX] Mejorada la traducción de 'estoy bien'.
    [FIX] Optimizada la recepción de besitos en la frente.

    [STATUS] Sistema más estable que la versión anterior.
    [STATUS] Aún quedan bugs conocidos, pero ambos decidieron seguir desarrollando el proyecto.`;


    let idx = 0;
    function typeHtmlLog() {
        if (idx < textoLogs.length) { 
            let char = textoLogs.charAt(idx);
            body.innerHTML += char === "\n" ? "<br>" : char; 
            idx++; 
            logTimeout = setTimeout(typeHtmlLog, 20); 
        } else {
            // 🌟 OPTIMIZADO: Coloreado instantáneo en un solo viaje de escaneo
            body.innerHTML = body.innerHTML
                .replace(/\[WARNING\]/g, '<span class="log-warn">[WARNING]</span>')
                .replace(/\[INFO\]/g, '<span class="log-info">[INFO]</span>')
                .replace(/\[FIX\]/g, '<span class="log-fix">[FIX]</span>');
        }
    }
    typeHtmlLog();
}
function runNovioExe() {
    if (exeTimeout) clearTimeout(exeTimeout);
    
    const body = document.getElementById("exe-body"); 
    if (!body) return; 
    body.innerHTML = ""; 
    
    let lIdx = 0;
    function typeExeLine() { 
        if (lIdx < exeLines.length) { 
            let div = document.createElement("div"); 
            div.innerText = exeLines[lIdx]; 
            div.style.margin = "4px 0"; 
            
            // Colorear según el contenido de la línea informático
            if (exeLines[lIdx].includes("✔")) div.style.color = "#6a9955"; 
            if (exeLines[lIdx].includes("Resultado")) div.style.color = "#ff79c6"; 
            
            body.appendChild(div); 
            lIdx++; 
            exeTimeout = setTimeout(typeExeLine, 400); 
        } 
    }
    typeExeLine();
}
function makeWindowsDraggable() {
    const windows = document.querySelectorAll('.window');
    
    windows.forEach(win => {
        const header = win.querySelector('.draggable-header'); 
        if (!header) return;

        // Traer al frente la ventana que se acaba de tocar
        win.addEventListener('mousedown', () => { 
            highestZIndex++; 
            win.style.zIndex = highestZIndex; 
        });

        let isDragging = false; 
        let startX, startY, initialX, initialY;

        header.addEventListener('mousedown', (e) => {
            // Evitar arrastrar si se hace clic en los botones de cerrar/minimizar
            if (e.target.classList.contains('dot') || e.target.classList.contains('close-btn-x')) return;
            
            isDragging = true; 
            startX = e.clientX; 
            startY = e.clientY;
            
            const rect = win.getBoundingClientRect(); 
            initialX = rect.left; 
            initialY = rect.top;
            
            // 🌟 OPTIMIZADO: Sintaxis moderna para fijar la posición inicial
            win.style.left = `${initialX}px`; 
            win.style.top = `${initialY}px`; 
            win.style.margin = '0';
            
            document.addEventListener('mousemove', mouseMoveHandler); 
            document.addEventListener('mouseup', mouseUpHandler); 
            e.preventDefault();
        });

        function mouseMoveHandler(e) { 
            if (!isDragging) return; 
            // 🌟 OPTIMIZADO: Desplazamiento fluido usando plantillas de texto
            win.style.left = `${initialX + (e.clientX - startX)}px`; 
            win.style.top = `${initialY + (e.clientY - startY)}px`; 
        }

        function mouseUpHandler() { 
            isDragging = false; 
            document.removeEventListener('mousemove', mouseMoveHandler); 
            document.removeEventListener('mouseup', mouseUpHandler); 
        }
    });
}
function readRecuerdos() {
    const body = document.getElementById("body-recuerdos"); 
    if (!body || body.children.length > 0) return; 
    
    const misFotos = [
        { url: "assets/img/PequeñitoAmor.jpeg", nota: "De las primeras fotos que me regalaste, peligrosamente adorable, ¿tendremos un pequeñito así? ❤️" },
        { url: "assets/img/SonrisaPreciosa.jpeg", nota: "Creo que fue una de las primeras que presumí, amor su sonrisa, fck, me tuvo, me tiene y me tendrá mal" },
        { url: "assets/img/DizqueTieneFrio.jpeg", nota: "'Tengo frio', decia. Mentiroso. Solo queria poner las manos encima. 😡 (JAKAJAJA te amo)" },
        { url: "assets/img/LaLoca.jpeg", nota: "Aqui están las pruebas de que en efecto amor mio, hizo una buena elección de chamán, brujeria -.-" },
        { url: "assets/img/OliendoMiAdquisición.jpeg", nota: "Procedimiento científico indispensable: comprobar si mi hombre se bañó ese día (no lo hizo)" },
        { url: "assets/img/BelloDurmiente.jpeg", nota: "Usted dormido... y yo preguntándome cómo es que te puedo llegar a amar tanto, tanto, tanto 🥺." },
        { url: "assets/img/amor.jpeg", nota: "Simplemente, me resigné a saber que mi hombre es perfecto." }, 
        { url: "assets/img/1.jpeg", nota: "No hay mucho que decir mi niño, enamorada de este godito peludito." }, 
        { url: "assets/img/2.jpeg", nota: "Una tarde preciosa mi niño, me gusta esa foto, y me gustó cómo alentaste a mi canelita, imaginé cómo serías de papá, me encantó." },         
        { url: "assets/img/3.jpeg", nota: "A penas me estaba atreviendo a tomarte fotos despistado, creí molestarte, pero me gustó muchisimo como sales." },
        { url: "assets/img/4.jpeg", nota: "No necesita descripción:3." },
        { url: "assets/img/5.jpeg", nota: "Creo que ambos amamos esta foto, se me hace muy tierna y adorable, una patada para María del pasado por querer borrarla." },
        { url: "assets/img/6.jpeg", nota: "Usted obedeciendo mi amor, no sé de dónde saqué el querer esa foto, me encanta." },
        { url: "assets/img/7.jpeg", nota: "Como siempre, el niño de seductor, mehubieragustadomucho verteasí, muytentador." },
        { url: "assets/img/8.jpeg", nota: "Noviecito en un concierto, noviecito feliz, noviecito parecia sufrido." },
        { url: "assets/img/9.jpeg", nota: "LA LOCAAA." },
        { url: "assets/img/10.jpeg", nota: "No pude colocar el textito de abajo, pero dice que me quieres, ¿Si me quieres? Más te vale." },
        { url: "assets/img/11.jpeg", nota: "Creo que fue la primera foto tan juntos, una lastima que fuera tomada porque Fer andaba de chismoso, dejando claro que estaba con Abi y la película estaba lista para verlos." },
        { url: "assets/img/12.jpeg", nota: "Ojalá te haya gustado, la verdad luego me sentí medio idiota por no elegir otro peluchito, creí que se parecía a tí y que era original, pero luego medio mundo tuvo uno igual." },
        { url: "assets/img/13.jpeg", nota: "Por mucho tiempo esta fue mi favorita, voy rotando cada tanto para ponerla de fondo, me gustas mucho." },
        { url: "assets/img/14.jpeg", nota: "Esta es la captura de un video, el primer beso registrado c: Nunca lo había hecho, estaba muy nerviosa, no sabía si me dirías algo por grabar." },
        { url: "assets/img/15.jpeg", nota: "Nochecita de caminata por la u, también fue un recuerdo precioso." },
        { url: "assets/img/16.jpeg", nota: "Mi foto favorita de la noche, me tentó mucho subirla como publicación, pero no eramos pareja aún, y no sanbía si podía molestarte con eso." },
        { url: "assets/img/17.jpeg", nota: "TARDECITA DE MUSEO Y PIZZA, de mis tardes favoritas, odié no tener más fotos de la bañera, si volvemos? :c." },
        { url: "assets/img/18.jpeg", nota: "Cuando me mandaste esta, solo pensé, ¿y este hombre qué hace conmigo?, te falla amor." },
        { url: "assets/img/19.jpeg", nota: "Este fue un día muy largo, lloremos mucho, y me enojé mucho, el niño se mandó a mudar a la punta, me da penita el que te me hayas caido así de la silla, pero lo volvería a hacer mil veces." },
        { url: "assets/img/20.jpeg", nota: "Esta si fue la primera, la primera foto que te tomé a escondidas, la primera de uffff, fue para presumir y hablar de ti un ratito." },
        { url: "assets/img/21.jpeg", nota: "Un ramo precioso, un día precioso, tomada por un precioso." },
        { url: "assets/img/22.jpeg", nota: "Usted de nuevo engriéndome y siguiendo mis bobadas, de verdad te amo con el alma." },
        { url: "assets/img/23.jpeg", nota: "Cuándo tenia cabello:c, si te gustó esa foto? sentí que te daría cringe..." },
        { url: "assets/img/24.jpeg", nota: "Con esto descubrí que el niño tenía una pared llena de dinosaurios, fue cómo, fck, de verdad me está ganando." },
        { url: "assets/img/25.jpeg", nota: "La primera notita que me diste, con el primer monoplaza que tuve:3 Atesoro ese momento mi niño" },
        { url: "assets/img/26.jpeg", nota: "LA LOCAAAAA x2" },
        { url: "assets/img/27.jpeg", nota: "Esta foto, me pudo, me puede y me podrá. Simplemente nunca la superaré, y la amaré eternamente. No descansaré hasta que tengamos un pequeñito y le tomemos una igual." },
        { url: "assets/img/28.jpeg", nota: "Usted sabe de esta, me invitaste a ver una peli, llegué y estaba en su quinto sueño, A penas crucé la puerta Fer me mandó hacía tí, también fue el día de nuestro primer beso c:." },
        { url: "assets/img/29.jpeg", nota: "Una banana, justa y necesaria, fue después de mandartela que descubrí que habían papeles sucios en la carpeta y tu muy caballerosamente me dijiste que me matara -.- " },
        { url: "assets/img/30.jpeg", nota: "Esta me la mandaste a los días o creo que a la semana de empezar a hablar cómo amigos, fue muy wtf, pero me gustó, sentí que me había ganado tu confianza y tus mensadas :3 (Eso y que te fallaba) " },
        { url: "assets/img/31.jpeg", nota: "No sé si realmente lo dibujaste en aquel momento, y en el preciso instante de la conversación, pero amor, JAKDAJDJAJAJAJA, supe que compartiamos la misma neurona." }

    ];

    // 🌟 OPTIMIZADO: Separamos la creación de las tarjetas en líneas verticales limpias
    misFotos.forEach((foto, i) => { 
        setTimeout(() => { 
            const card = document.createElement("div"); 
            card.className = "photo-card"; 
            card.innerHTML = `<img src="${foto.url}"><p class="photo-note">${foto.nota}</p>`; 
            body.appendChild(card); 
        }, i * 300); 
    });
}
function updateLiveClock() { 
    const clockEl = document.getElementById("live-clock"); 
    if (clockEl) {
        clockEl.innerText = new Date().toLocaleTimeString(); 
    }
}
function showRestorationWarningWindow() {
    const winAlerta = document.getElementById("win-alerta-papelera"); 
    if (!winAlerta) return;

    const alertaBody = winAlerta.querySelector(".window-body");
    if (alertaBody) {
        // 🌟 OPTIMIZADO: Tu mensaje de bienvenida ahora se lee en vertical de forma súper elegante en el editor
        alertaBody.innerHTML = `
            <div style="background-color: #151515; border: 1px solid #27c93f; padding: 10px; border-radius: 4px; margin-bottom: 15px; text-align: left;">
                <span style="color:#27c93f; font-weight:bold;">✔ CONNECTION_RESTORED_SUCCESSFULLY</span><br>
                <span style="color:#888; font-size:11px;">[SESSION]: Active | [USER]: Main | [STATUS]: 200 OK</span>
            </div>
            <p style="font-size: 15px; color: #fff; font-weight: bold; margin-bottom: 10px; text-align: left;">¡Bienvenido de nuevo, Main! ❤️</p>
            <p style="font-size: 13px; color: #abb2bf; line-height: 1.6; margin-bottom: 20px; text-align: left;">
                Aviso: El entorno ha sido estabilizado de forma segura. Recuerda que lo mejor es no intentar restaurar o hurgar en estos archivos viejos porque solo sirve para revivir momentos tensos, dramas innecesarios y caer en los mismos errores. Esos archivos ya cumplieron su propósito y están mejor en la papelera. El sistema funciona muchísimo mejor cuándo se escriben lineas nuevas y si se agregan nuevos archivos a la carpeta de recuerdos.
            </p>
            <button onclick="closeWindow('win-alerta-papelera')" style="background-color: #3a3d3d; color: var(--text-main); border-color: #555; width: 100%; font-weight: bold;">Aceptar y Continuar 💜</button>
        `;
    }

    // Generar el sonido de pitido de éxito de forma limpia
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); 
        const osc = audioCtx.createOscillator(); 
        const gain = audioCtx.createGain();
        
        osc.connect(gain); 
        gain.connect(audioCtx.destination); 
        
        osc.type = "sine"; 
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime); 
        
        osc.start(); 
        osc.stop(audioCtx.currentTime + 0.12);
    } catch (err) {}

    // Mostrar la ventana emergente al frente de todo de forma segura
    highestZIndex++; 
    winAlerta.style.zIndex = highestZIndex; 
    winAlerta.classList.remove("hidden"); 
}
function iniciarUptimeTracker() {
    const timerDisplay = document.getElementById("timer-display");
    if (!timerDisplay) return;

    // Fecha exacta de aniversario: 18/11/2025 a las 15:30:00
    const FECHA_ANIV = new Date(2025, 10, 18, 15, 30, 0);

    setInterval(() => {
        const ahora = new Date();
        const diffMilisegundos = ahora - FECHA_ANIV;

        if (diffMilisegundos < 0) {
            timerDisplay.innerText = "¡El contador aún no ha comenzado!";
            return;
        }

        // 1. Cálculos de Totales Individuales
        const segundosTotales = Math.floor(diffMilisegundos / 1000);
        const minutosTotales = Math.floor(segundosTotales / 60);
        const horasTotales = Math.floor(minutosTotales / 60);
        const diasTotales = Math.floor(horasTotales / 24);
        const mesesTotales = Math.floor(diasTotales / 30.44); 

        // 2. Cálculos para el Desglose Exacto (Calendario Relativo)
        let anosDiferencia = ahora.getFullYear() - FECHA_ANIV.getFullYear();
        let mesesDiferencia = ahora.getMonth() - FECHA_ANIV.getMonth();
        let diasDiferencia = ahora.getDate() - FECHA_ANIV.getDate();

        if (diasDiferencia < 0) {
            mesesDiferencia--;
            const copiaFecha = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
            diasDiferencia += copiaFecha.getDate();
        }
        if (mesesDiferencia < 0) {
            anosDiferencia--;
            mesesDiferencia += 12;
        }

        const desgloseMeses = (anosDiferencia * 12) + mesesDiferencia;
        let finalHoras = ahora.getHours() - FECHA_ANIV.getHours();
        let finalMinutos = ahora.getMinutes() - FECHA_ANIV.getMinutes();
        let finalSegundos = ahora.getSeconds() - FECHA_ANIV.getSeconds();

        if (finalSegundos < 0) { finalSegundos += 60; finalMinutos--; }
        if (finalMinutos < 0) { finalMinutos += 60; finalHoras--; }
        if (finalHoras < 0) { finalHoras += 24; }

        // 3. Renderizado del diseño con tus tarjetas de colores
        timerDisplay.innerHTML = `
            <div class="dashboard-container">
                <!-- Fila de Tarjetas Superiores -->
                <div class="cards-row">
                    <div class="time-card card-blue">
                        <div class="card-header">✨ MESES</div>
                        <div class="card-value">${mesesTotales}</div>
                        <div class="card-unit">m</div>
                    </div>
                    
                    <div class="time-card card-green">
                        <div class="card-header">✨ DÍAS</div>
                        <div class="card-value">${diasTotales}</div>
                        <div class="card-unit">d</div>
                    </div>
                    
                    <div class="time-card card-yellow">
                        <div class="card-header">✨ HORAS</div>
                        <div class="card-value">${horasTotales.toLocaleString()}</div>
                        <div class="card-unit">h</div>
                    </div>
                    
                    <div class="time-card card-red">
                        <div class="card-header">✨ MINUTOS</div>
                        <div class="card-value">${minutosTotales.toLocaleString()}</div>
                        <div class="card-unit">m</div>
                        <div class="card-sub-header">✨ SEGUNDOS</div>
                        <div class="card-sub-value">${segundosTotales.toLocaleString()}</div>
                        <div class="card-sub-unit">s</div>
                    </div>
                </div>

                <!-- Barra Inferior del Tiempo Exacto -->
                <div class="exact-time-bar">
                    <span class="exact-title">[TIEMPO EXACTO DESDE EL 18/11/2025]:</span>
                    <div class="exact-text">
                        💖 ${desgloseMeses} MESES, ${diasDiferencia} DÍAS con ${finalHoras} HORAS, ${finalMinutos} MINUTOS y ${finalSegundos} SEGUNDOS
                    </div>
                </div>
            </div>
        `;
    }, 1000);
}



if (typeof makeWindowsDraggable === "function") {
    makeWindowsDraggable();
}