/*
=====================================================
EDITA SOLO ESTE ARCHIVO
No necesitas tocar index.html, style.css ni app.js.
=====================================================
*/

const CONFIG = {
  ownerName: "Maria",
  partnerName: "John",

  // Formato: AAAA-MM-DD
  relationshipStart: "2021-09-05",

  version: "5.0",

  heroText: "El proyecto más importante que hemos construido juntos.",

  readme: {
    intro:
      "Si estás leyendo esto, significa que llegamos a una nueva versión de nuestra historia.",
    body:
      "Hace cinco años comenzó este proyecto sin que ninguno de los dos imaginara todo lo que vendría después. Entre viajes, comidas, risas, conversaciones y días difíciles, fuimos construyendo algo que hoy considero una de las partes más bonitas de mi vida.",
    quote:
      "Gracias por ser mi compañero, mi apoyo y mi persona favorita para descubrir el mundo."
  },

  memories: {
    primerRecuerdo: "Nuestras llamadas que duraban toda la madrugada y cuando subíamos a nuestros techos a ver la luna",
    momentoDivertido: "Cuando casi nos deja el bus de turismo en el Colca😂",
    comidaFavorita: "Una buena pizza con su vinito, un rico chifa y su gaseosa helada",
    viajeFavorito: "Arequipa!! Demostró de qué estamos hechos",
    fraseEspecial: "To the moon"
  },

  travels: [
    "Paracas - Ica",
    "Canta",
    "Huaral",
    "Arequipa",
    "Matucana",
    "Huancayo",
    "Chile"
  ],

  futurePlans: [
    "Viajar a Guatemala y ver sus volcanes",
    "Conocer Suiza y su respectivo Eurotrip",
    "Ver las auroras boreales",
    "Conoces Asia, ir al teatro realista!",
    "Tomarnos más fotografías",
    "Cumplir nuevas metas juntos",
    "Celebrar muchos aniversarios más"
  ],

  reasons: [
    "Porque admiro tu inteligencia.",
    "Porque me haces sentir acompañada.",
    "Porque disfruto viajar contigo.",
    "Porque contigo hasta una comida sencilla se vuelve especial.",
    "Porque me haces reír.",
    "Porque valoro todo lo que hemos aprendido juntos.",
    "Porque me inspiras a seguir creciendo.",
    "Porque contigo puedo ser yo misma.",
    "Porque guardo con cariño nuestros recuerdos.",
    "Porque después de cinco años, te volvería a elegir."
  ],

  timeline: [
    { year: "2021", title: "Initial commit", text: "Comenzó nuestra historia." },
    { year: "2022", title: "Feature added", text: "Nuevos recuerdos y aprendizajes." },
    { year: "2023", title: "Stable release", text: "Seguimos creciendo juntos." },
    { year: "2024", title: "Bug fixes", text: "Aprendimos a superar los días difíciles." },
    { year: "2025", title: "New adventures", text: "Más viajes, comidas y momentos especiales." },
    { year: "2026", title: "Version 5.0", text: "Celebramos cinco años juntos." }
  ],

  /*
  AGREGA TUS FOTOS EN LA CARPETA assets.
  Luego escribe aquí el nombre exacto del archivo.

  Ejemplo:
  { file: "foto1.jpg", caption: "Nuestro primer viaje" }
  */
  photos: [
    { file: "20210927_01.JPG", caption: "El primero de muchos🎂🥳" },
    { file: "20210927_02.jpg", caption: "TE AMOOOO👩‍❤️‍💋‍👨" },
    { file: "20211130_04.jpg", caption: "Primer bufet!!" },
    { file: "20220830_03_canta.jpg", caption: "Aventura juntos mi amorcito⛰️" },
    { file: "20220830_01_canta.jpg", caption: "🚶🏻🚶🏻‍♀️" },
    { file: "20220904_Billy_Idol.jpg", caption: "Varios conciertos" },
    { file: "20220913_coldplay.jpg", caption: "Uno de los tantos significativos" },
    { file: "20221231_03.jpg", caption: "Año nuevo 2023🧧" },
    { file: "20230205.jpg", caption: "Conociendo Callao🤪" },
    { file: "20230430_02.jpg", caption: "Vichaycocha" },
    { file: "20230430_05.jpg", caption: "😜😜" },
    { file: "20230616_02.jpg", caption: "Paracas🌞" },
    { file: "20230617_01.jpg", caption: "Cañon de los Perdidos - Ica🏜️" },
    { file: "20230705_02.jpg", caption: "Sumando mesecitos🥰" },
    { file: "20230905_03.jpg", caption: "Un aniversario más juntos mi vida❤️" },
    { file: "20231012_02.jpg", caption: "Los más camisetas😝" },
    { file: "20231017_01.jpg", caption: "Estadio🏟️" },
    { file: "20231231_05.jpg", caption: "Recibiendo todos los años a tu lado😍" },
    { file: "20240218_01.jpg", caption: "Verano 🏖️" },
    { file: "20240310_01.jpg", caption: "♾️" },
    { file: "20240406_05.jpg", caption: "Arequipa" },
    { file: "20240407_04.jpg", caption: "Superman al rescate🦸🏻‍♂️" },
    { file: "20240407_11.jpg", caption: "Tu sonrisa enamorándome mi amor😍" },
    { file: "20240407_18.jpg", caption: "Basílica Catedral de Arequipa" },
    { file: "IMG_20260320_001133.jpg", caption: "ACDC 🤘🏻🤘🏻" },
    { file: "IMG_3605.jpg", caption: "😘" },
    { file: "IMG_3601.jpg", caption: "" },
    { file: "IMG_3721.jpg", caption: "Más experiencias amorcito🚡" },
    { file: "IMG_3731.jpg", caption: "Otro besito para que no se te olvide😘" },
    { file: "chi.jpg", caption: "Je, te amooooooooo😘😘😘😘" },
    { file: "Picsart_26-03-24_09-24-12-420.jpg", caption: "Un concierto más a nuestra lista juntos mi vida" },
    { file: "Picsart_26-09-07_17-44-26-883.jpg", caption: "05/09 Tú eres mi persona mi amor, te amo to the moon💍🌙" },
  ],

  /*
  MÚSICA OPCIONAL:
  Coloca un archivo llamado musica.mp3 dentro de assets
  y deja "assets/musica.mp3".
  Si no deseas música, escribe musicFile: ""
  */
  musicFile: "0509.mp3",

  finalMessage: {
    title: "Merge completed successfully ❤️",
    line1: "Después de cinco años, sigo descubriendo nuevas razones para enamorarme de ti.<br><br>Cada día admiro más al hombre en el que te estás convirtiendo. Admiro tu corazón, tu capacidad, tu manera de salir adelante y, sobre todo, la forma en que me amas. A veces me parece irreal sentirme tan querida por alguien, hasta que te miro y recuerdo que sí, que eres real y que tengo la enorme suerte de tenerte en mi vida.<br><br>Este 5 de septiembre quedará guardado para siempre entre mis recuerdos favoritos. No solo porque cumplimos cinco años, sino por ese anillo de promesa que me regalaste, por las palabras que dijiste, y por todos los detalles que tuviste en este viaje conmigo, absolutamente todos los he notado. Y aunque quizá alguno te parezca algo pequeño, me hicieron inmensamente feliz. Fueron detalles que nacieron de ti y consiguieron dejarme sin palabras y más enamorada de ti que nunca.",
    line2: "Quiero verte cumplir tus metas y quiero cumplir las mías. Quiero que sigamos creciendo individualmente para que, cuando llegue nuestro momento, podamos dar esos pasos que todavía nos esperan juntos.<br><br>No necesito una vida perfecta. Sueño con una vida tranquila contigo, rodeados de los nuestros, construyendo poquito a poquito aquello que alguna vez imaginamos.",
    line3: "Gracias por hacerme sentir tan amada. Gracias por estos cinco años, por cada versión de nosotros y por hacerme tan feliz.<br><br>Te admiro muchísimo, y estoy inmensamente enamorada de ti.<br><br>Si estos primeros cinco años fueron solo el comienzo... quiero descubrir contigo todas las versiones que todavía nos faltan. ❤️",
    question: "Status: forever running... ∞"
  }
};
