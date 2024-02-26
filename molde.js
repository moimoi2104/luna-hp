const videos = document.querySelectorAll('.video__player');
const videoSources = [

    "https://leaksextape.net/wp-content/uploads/2024/02/9-8.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b77c273895bce501587b50_video34-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b7522dc28cd4c1947839df_video31-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b77c2d10757d3825f3a3a3_video29-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8aa2f45d48daafac867b9_0130-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b780e06cf1df64300f88e0_video_2023-09-17_23-33-04-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8ad49c82d22d48e768a92_video4-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8ad50d4eb8530d9f89206_fpXNoP33_720p-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65bb5a6e4ad11c5daace6e6f_video26-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65c466ba79e30f10b2195375_e069032a-06a8-4c9f-8ace-6a4e2ec1a103_full-video_1080p_normal-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65c46678eb060b2652d58a40_e1369d63-4d07-4002-8e20-dba716380d5d_full-video_1080p_normal-transcode.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65c466824ced7dff06d0c946_f139b469-c442-4e19-89e7-92536c661d2e_full-video_1080p_normal.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cdad865c3e81f59346f9d7_jubil.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cdad742f8a25117bd64cc4_miser.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cda803f938ec6b239f2f9e_2-720p_1.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cda5d108add4c3077c80ed_14890030-720p.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cda27559aa0e006aa2c30a_a96982ec-e8b1-4840-ae74-3066022e5a62_full-video_1080p_normal.mp4",
    "https://leaksextape.net/wp-content/uploads/2024/02/28-7.mp4",
    "https://leaksextape.net/wp-content/uploads/2024/02/42-4.mp4",
    "https://leaksextape.net/wp-content/uploads/2023/11/Veronica-Perasso-1.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cda4ab7cb311efd73341e4_9a9565a7-1836-4513-b752-f8223c62884a_full-video_1080p_normal.mp4"


    // Agrega aquí más URLs de videos según sea necesario
];

const nombresAleatorios = [
    "🇵🇹 Lorena Caterina 🇵🇹 ",
    "🇫🇮 Ana Maria 🇫🇮",
    "🇨🇦 Carolina Garcia 🇨🇦",
    "🇦🇺 NAKARY MILLER 🇦🇺",
    "🇺🇸 GRACIELA CATERINA 🇺🇸",
    "🇻🇪 Valentina Ribeiro 🇻🇪",
    "🇻🇪 G R A C I E L A 💘 🇻🇪",
    "🇵🇪 Mariana López 🇵🇪",
    "🇷🇴 Andrei Popescu 🇷🇴",
    "🇧🇪 Emma Dubois 🇧🇪",
    "🇬🇷 Ioanna Papadopoulos 🇬🇷",
    "🇨🇱 Matías Silva 🇨🇱",
    "🇭🇺 Levente Kovács 🇭🇺",
    "🇸🇦 Fatima Al-Mansoori 🇸🇦",
    "🇲🇽 Alejandro Hernández 🇲🇽",
    "🇵🇦 Camila González 🇵🇦",
    "🇨🇮 Aminata Diop 🇨🇮",
    "🇨🇴 Isabela Ríos 🇨🇴",
    "🇮🇹 Sofia Santoro 🇮🇹",
    "🇳🇴 Emilie Andersen 🇳🇴",
    "🇦🇹 Lara Hofmann 🇦🇹",
    "🇳🇿 Harper Wilson 🇳🇿",
    "🇨🇿 Klára Nováková 🇨🇿",
    "🇮🇪 Aoife Murphy 🇮🇪",
    "🇨🇭 Alessia Rossi 🇨🇭",
    "🇮🇳 Aarav Patel 🇮🇳",
    "🇦🇪 Layla Khan 🇦🇪",
    "🇸🇪 Malin Lindström 🇸🇪",
    "🇿🇦 Thabo Molefe 🇿🇦",
    "🇳🇱 Daan van der Berg 🇳🇱",
    "🇧🇷 Maria da Silva 🇧🇷",
    "🇫🇷 Léa Dubois 🇫🇷",
    "🇰🇷 Min-jun Kim 🇰🇷",
    "🇯🇵 Yui Tanaka 🇯🇵",
    "🇩🇪 Lena Müller 🇩🇪",
    "🇬🇧 Oliver Hughes 🇬🇧",
    "🇪🇸 Marta García 🇪🇸",
    // Agrega más nombres según sea necesario
];

const textosAleatorios = [
    "Watch Me Masturbate Live ❤️",
    "📞🔥 Phone Calls, 💥 Custom Videos, 😋 Live Broadcasts, Your Name on My 🍒TITS!",
    "Made in Czech 🇨🇿🍺 Big smile and big...heart🍒 Cum join me in my adventures as I show off just for you baby ❤️",
    "❣ Exclusive VIP Content 🔞|Seduction and Sensuality Unleashed 🦊| Monthly Nude Delights📸",
    "😻 Model, ❤️ student 🔥I make exclusive videos, 📞calls! Sexsting LIVE -broadcasts!!🍑🍒 #fuck",
    "Model, 20 y.o 🇪🇸 Wanna chat with me? Check all my links 😍",
    "Hi I’m Molly! ❤️ Just a sweet girl who loves to be naughty 🤫😈💋CHECK ALL MY LINKS via IG! ✨",
    "🔥 Hot and ready for you! 😈 Let's play together and make your fantasies come true 💦",
    "🍑 Curvy and fun! 💋 Join me for exclusive content and live shows 📸",
    "🌟 Your favorite cam girl! 🎥 Live shows, custom videos, and more 🔞",
    "💖 Sensual and seductive! 😘 Exclusive content just for you 💌",
    "🔥 Naughty but nice! 💋 Cum play with me and let's have some fun 🍒",
    "🌺 Sweet and sexy! 💫 Join me for a private show and let's get wild together 🚀",
    "👅 Ready to please! 💦 Let's explore your wildest desires together 🔥",
    "🔞 Explicit content and live shows! 💋 Cum chat with me and let's have some fun 😘",
    "🌈 Fun and flirty! 💖 Exclusive content and private shows just for you 🌟",
    "💥 Wild and willing! 🔞 Let's get naughty together and have an unforgettable time 😈",
    // Agrega más textos según sea necesario
];

// Función para cambiar aleatoriamente el video
function changeRandomVideo() {
    videos.forEach(video => {
        const randomSourceIndex = Math.floor(Math.random() * videoSources.length);
        const newSource = videoSources[randomSourceIndex];

        video.src = newSource;
        video.load();
        video.play();
    });
}

// Función para cambiar aleatoriamente el nombre
function changeRandomName() {
    const nameElement = document.getElementById('randomName');
    const randomIndex = Math.floor(Math.random() * nombresAleatorios.length);
    const newName = nombresAleatorios[randomIndex];

    nameElement.textContent = newName;
}

// Función para cambiar aleatoriamente el texto
function changeRandomText() {
    const textElement = document.getElementById('randomText');
    const randomIndex = Math.floor(Math.random() * textosAleatorios.length);
    const newText = textosAleatorios[randomIndex];

    textElement.textContent = newText;
}

// Ejecutar las funciones al cargar la página
window.onload = function () {
    changeRandomVideo();
    changeRandomName();
    changeRandomText();
};

function recargarPagina() {
    // Recargar la página
    location.reload();
}


