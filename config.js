// ============================================
// 💝 PERSONALIZA TU SITIO WEB DE SAN VALENTÍN AQUÍ 💝
// ============================================

const CONFIG = {
    // El nombre de tu San Valentín que aparecerá en el título
    // Ejemplo: "Jade", "Sarah", "Mike"
    valentineName: "Meli",

    // El título que aparece en la pestaña del navegador
    // ¡Puedes usar emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "¿Quieres recibir flores hoy? 💝",

    // Emojis flotantes que aparecen en el fondo
    // Encuentra más emojis en: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Emojis de corazones
        bears: ['🧸', '🐻']                       // Emojis de ositos lindos
    },

    // Preguntas y respuestas
    // Personaliza cada pregunta y sus posibles respuestas
    questions: {
        first: {
            text: "¿Te gusto?",                                    // Primera interacción
            yesBtn: "Sí",                                          // Texto para el botón "Sí"
            noBtn: "No",                                           // Texto para el botón "No"
            secretAnswer: "¡No me gustas, me encantas! ❤️"              // Mensaje secreto al pasar el mouse
        },
        second: {
            text: "¿Cuánto te encanto?",                              // Para el medidor de amor
            startText: "¡Así de mucho!",                           // Texto antes del porcentaje
            nextBtn: "Siguiente ❤️"                                // Texto para el botón siguiente
        },
        third: {
            text: "lamento no poder darte flores hoy, pero tengo otra sorpresa ¿la aceptas? 🌹", // ¡La gran pregunta!
            yesBtn: "¡Sí!",                                        // Texto para el botón "Sí"
            noBtn: "No"                                            // Texto para el botón "No"
        }
    },

    // Mensajes del medidor de amor
    // Aparecen según cuánto muevan el medidor
    loveMessages: {
        extreme: "¿¿¿WOOOOW te encanto tanto?? 🥰🚀💝",  // Se muestra si pasan el 5000%
        high: "¡Hasta el infinito y más allá! 🚀💝",   // Se muestra si pasan el 1000%
        normal: "¡Y más allá! 🥰"                     // Se muestra si pasan el 100%
    },

    // Mensajes que aparecen después de decir "¡Sí!"
    celebration: {
        title: "¡Qué alegría! ¡Eres muy especial para mí! 🌸💐🎉💖💓",
        message: "¡Te mentí! Mira tus flores, además te ganaste una besuqueada y un abrazo enorme.",
        emojis: "🎁💖🤗💝💋❤️💕"  // Estos saltarán por la pantalla
    },

    // Paleta de colores para el sitio web
    // Usa https://colorhunt.co o https://coolors.co para encontrar combinaciones bonitas
    colors: {
        backgroundStart: "#ffafbd",      // Inicio del degradado (usa colores pastel para un look suave)
        backgroundEnd: "#ffc3a0",        // Fin del degradado (debe complementar backgroundStart)
        buttonBackground: "#ff6b6b",     // Color de los botones (debe resaltar sobre el fondo)
        buttonHover: "#ff8787",          // Color al pasar el mouse (un poco más claro que buttonBackground)
        textColor: "#ff4757"             // Color del texto (¡asegúrate que sea legible!)
    },

    // Configuración de animaciones
    // Ajusta esto si quieres animaciones más rápidas/lentas
    animations: {
        floatDuration: "15s",           // Tiempo que tardan los corazones en flotar (10-20s recomendado)
        floatDistance: "50px",          // Distancia que se mueven los corazones de lado (30-70px recomendado)
        bounceSpeed: "0.5s",            // Velocidad de las animaciones de rebote (0.3-0.7s recomendado)
        heartExplosionSize: 1.5         // Tamaño del efecto de explosión de corazones (1.2-2.0 recomendado)
    },

    // Música de fondo (opcional)
    // Agrega tu propia URL de música con las licencias adecuadas
    music: {
        enabled: true,                     // La música está habilitada
        autoplay: true,                    // Intenta reproducir automáticamente (algunos navegadores pueden bloquear esto)
        musicUrl: "sound/coldplay.mp3", // URL de la música
        startText: "🎵 Reproducir música", // Texto del botón para iniciar la música
        stopText: "🔇 Detener música",     // Texto del botón para detener la música
        volume: 0.5                        // Nivel de volumen (0.0 a 1.0)
    }
};

// No modifiques nada debajo de esta línea a menos que sepas lo que estás haciendo
window.VALENTINE_CONFIG = CONFIG;