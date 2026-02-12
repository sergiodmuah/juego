/**
 * Diccionario de preguntas Smart 10
 * Cada pregunta tiene: type (true_false | order | exact), question (texto centro), options (array de 10 { text, answer })
 */
const SMART10_QUESTIONS = [
    // --- VERDADERO O FALSO ---
    {
        type: "true_false",
        question: "¿Este animal es un mamífero?",
        options: [
            { text: "Pato", answer: "Falso" },
            { text: "Cerdo", answer: "Verdadero" },
            { text: "Mamut", answer: "Verdadero" },
            { text: "Elefante", answer: "Verdadero" },
            { text: "Ballena", answer: "Verdadero" },
            { text: "Tiburón", answer: "Falso" },
            { text: "Murciélago", answer: "Verdadero" },
            { text: "Ornitorrinco", answer: "Verdadero" },
            { text: "Pingüino", answer: "Falso" },
            { text: "Delfín", answer: "Verdadero" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este país es miembro de la Unión Europea?",
        options: [
            { text: "España", answer: "Verdadero" },
            { text: "Suiza", answer: "Falso" },
            { text: "Noruega", answer: "Falso" },
            { text: "Polonia", answer: "Verdadero" },
            { text: "Reino Unido", answer: "Falso" },
            { text: "Italia", answer: "Verdadero" },
            { text: "Ucrania", answer: "Falso" },
            { text: "Portugal", answer: "Verdadero" },
            { text: "Turquía", answer: "Falso" },
            { text: "Alemania", answer: "Verdadero" }
        ]
    },
    {
        type: "true_false",
        question: "¿Esta ciudad es capital de su país?",
        options: [
            { text: "Madrid", answer: "Verdadero" },
            { text: "Barcelona", answer: "Falso" },
            { text: "Sydney", answer: "Falso" },
            { text: "Bruselas", answer: "Verdadero" },
            { text: "Toronto", answer: "Falso" },
            { text: "Roma", answer: "Verdadero" },
            { text: "Milán", answer: "Falso" },
            { text: "Lisboa", answer: "Verdadero" },
            { text: "Berna", answer: "Verdadero" },
            { text: "Zurich", answer: "Falso" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este elemento es un metal?",
        options: [
            { text: "Oro", answer: "Verdadero" },
            { text: "Mercurio", answer: "Verdadero" },
            { text: "Oxígeno", answer: "Falso" },
            { text: "Hierro", answer: "Verdadero" },
            { text: "Carbono", answer: "Falso" },
            { text: "Plata", answer: "Verdadero" },
            { text: "Nitrógeno", answer: "Falso" },
            { text: "Cobre", answer: "Verdadero" },
            { text: "Helio", answer: "Falso" },
            { text: "Aluminio", answer: "Verdadero" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este deporte se juega en equipo?",
        options: [
            { text: "Fútbol", answer: "Verdadero" },
            { text: "Tenis", answer: "Falso" },
            { text: "Baloncesto", answer: "Verdadero" },
            { text: "Atletismo 100m", answer: "Falso" },
            { text: "Rugby", answer: "Verdadero" },
            { text: "Boxeo", answer: "Falso" },
            { text: "Voleibol", answer: "Verdadero" },
            { text: "Golf", answer: "Falso" },
            { text: "Hockey hielo", answer: "Verdadero" },
            { text: "Tenis mesa", answer: "Falso" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este animal vuela?",
        options: [
            { text: "Águila", answer: "Verdadero" },
            { text: "Avestruz", answer: "Falso" },
            { text: "Murciélago", answer: "Verdadero" },
            { text: "Pingüino", answer: "Falso" },
            { text: "Colibrí", answer: "Verdadero" },
            { text: "Kiwi", answer: "Falso" },
            { text: "Cóndor", answer: "Verdadero" },
            { text: "Gallina", answer: "Falso" },
            { text: "Abeja", answer: "Verdadero" },
            { text: "Emú", answer: "Falso" }
        ]
    },
    // --- ORDENAR (1 a 10: más joven a más mayor, o primero a décimo) ---
    {
        type: "order",
        question: "Ordena del más joven al más mayor (1 = más joven, 10 = más mayor). Edad aproximada de estos deportistas/famosos.",
        options: [
            { text: "Julián Álvarez", answer: "1º" },
            { text: "Lamine Yamal", answer: "2º" },
            { text: "Mbappé", answer: "3º" },
            { text: "Haaland", answer: "4º" },
            { text: "Pedri", answer: "5º" },
            { text: "Nadal", answer: "6º" },
            { text: "Fernando Alonso", answer: "7º" },
            { text: "LeBron James", answer: "8º" },
            { text: "Cristiano Ronaldo", answer: "9º" },
            { text: "Messi", answer: "10º" }
        ]
    },
    {
        type: "order",
        question: "Ordena estos ríos por longitud (1 = más corto de la lista, 10 = más largo).",
        options: [
            { text: "Támesis", answer: "1º" },
            { text: "Sena", answer: "2º" },
            { text: "Rin", answer: "3º" },
            { text: "Danubio", answer: "4º" },
            { text: "Misisipi", answer: "5º" },
            { text: "Yangtsé", answer: "6º" },
            { text: "Amazonas", answer: "7º" },
            { text: "Nilo", answer: "8º" },
            { text: "Misisipi-Missouri", answer: "9º" },
            { text: "Nilo (con afluentes)", answer: "10º" }
        ]
    },
    {
        type: "order",
        question: "Ordena estos países por población (1 = menos habitantes, 10 = más habitantes).",
        options: [
            { text: "Luxemburgo", answer: "1º" },
            { text: "Irlanda", answer: "2º" },
            { text: "Portugal", answer: "3º" },
            { text: "España", answer: "4º" },
            { text: "Francia", answer: "5º" },
            { text: "Reino Unido", answer: "6º" },
            { text: "Japón", answer: "7º" },
            { text: "Estados Unidos", answer: "8º" },
            { text: "Indonesia", answer: "9º" },
            { text: "China", answer: "10º" }
        ]
    },
    {
        type: "order",
        question: "Ordena estos planetas por distancia al Sol (1 = más cercano, 10 = más lejano).",
        options: [
            { text: "Mercurio", answer: "1º" },
            { text: "Venus", answer: "2º" },
            { text: "Tierra", answer: "3º" },
            { text: "Marte", answer: "4º" },
            { text: "Júpiter", answer: "5º" },
            { text: "Saturno", answer: "6º" },
            { text: "Urano", answer: "7º" },
            { text: "Neptuno", answer: "8º" },
            { text: "(Plutón)", answer: "9º" },
            { text: "Cinturón Kuiper", answer: "10º" }
        ]
    },
    // --- RESPUESTA EXACTA (año, número, nombre...) ---
    {
        type: "exact",
        question: "Año de nacimiento de estos autores o personajes históricos.",
        options: [
            { text: "Cervantes", answer: "1547" },
            { text: "Shakespeare", answer: "1564" },
            { text: "Galileo Galilei", answer: "1564" },
            { text: "Newton", answer: "1643" },
            { text: "Mozart", answer: "1756" },
            { text: "Napoleón", answer: "1769" },
            { text: "Charles Darwin", answer: "1809" },
            { text: "Einstein", answer: "1879" },
            { text: "Pablo Picasso", answer: "1881" },
            { text: "Frida Kahlo", answer: "1907" }
        ]
    },
    {
        type: "exact",
        question: "¿En qué año ocurrió este acontecimiento?",
        options: [
            { text: "Llegada del hombre a la Luna", answer: "1969" },
            { text: "Caída del Muro de Berlín", answer: "1989" },
            { text: "Descubrimiento de América", answer: "1492" },
            { text: "Revolución Francesa", answer: "1789" },
            { text: "Primera Guerra Mundial (inicio)", answer: "1914" },
            { text: "Segunda Guerra Mundial (inicio)", answer: "1939" },
            { text: "Independencia de EE.UU.", answer: "1776" },
            { text: "Invención de la imprenta (Gutenberg)", answer: "1440" },
            { text: "Fin de la URSS", answer: "1991" },
            { text: "Primer iPhone", answer: "2007" }
        ]
    },
    {
        type: "exact",
        question: "¿Cuál es la capital de este país?",
        options: [
            { text: "España", answer: "Madrid" },
            { text: "Francia", answer: "París" },
            { text: "Japón", answer: "Tokio" },
            { text: "Australia", answer: "Canberra" },
            { text: "Brasil", answer: "Brasilia" },
            { text: "Canadá", answer: "Ottawa" },
            { text: "India", answer: "Nueva Delhi" },
            { text: "Egipto", answer: "El Cairo" },
            { text: "Argentina", answer: "Buenos Aires" },
            { text: "Suiza", answer: "Berna" }
        ]
    },
    {
        type: "exact",
        question: "¿En qué país se encuentra esta ciudad?",
        options: [
            { text: "Barcelona", answer: "España" },
            { text: "Toronto", answer: "Canadá" },
            { text: "Sydney", answer: "Australia" },
            { text: "Río de Janeiro", answer: "Brasil" },
            { text: "Edimburgo", answer: "Reino Unido" },
            { text: "Buenos Aires", answer: "Argentina" },
            { text: "Oslo", answer: "Noruega" },
            { text: "Atenas", answer: "Grecia" },
            { text: "Praga", answer: "República Checa" },
            { text: "Budapest", answer: "Hungría" }
        ]
    },
    {
        type: "exact",
        question: "¿Cuántos habitantes tiene aproximadamente este país? (orden de magnitud: millones).",
        options: [
            { text: "España", answer: "~48 millones" },
            { text: "México", answer: "~130 millones" },
            { text: "Japón", answer: "~125 millones" },
            { text: "Alemania", answer: "~84 millones" },
            { text: "Francia", answer: "~68 millones" },
            { text: "Reino Unido", answer: "~67 millones" },
            { text: "Italia", answer: "~59 millones" },
            { text: "Argentina", answer: "~46 millones" },
            { text: "Colombia", answer: "~52 millones" },
            { text: "Portugal", answer: "~10 millones" }
        ]
    },
    {
        type: "true_false",
        question: "¿Esta obra es de Shakespeare?",
        options: [
            { text: "Romeo y Julieta", answer: "Verdadero" },
            { text: "Don Quijote", answer: "Falso" },
            { text: "Hamlet", answer: "Verdadero" },
            { text: "La Celestina", answer: "Falso" },
            { text: "Macbeth", answer: "Verdadero" },
            { text: "Fuenteovejuna", answer: "Falso" },
            { text: "Otelo", answer: "Verdadero" },
            { text: "El Lazarillo", answer: "Falso" },
            { text: "El rey Lear", answer: "Verdadero" },
            { text: "La vida es sueño", answer: "Falso" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este alimento es de origen vegetal?",
        options: [
            { text: "Zanahoria", answer: "Verdadero" },
            { text: "Huevo", answer: "Falso" },
            { text: "Tofu", answer: "Verdadero" },
            { text: "Queso", answer: "Falso" },
            { text: "Brócoli", answer: "Verdadero" },
            { text: "Leche", answer: "Falso" },
            { text: "Lentejas", answer: "Verdadero" },
            { text: "Miel", answer: "Falso" },
            { text: "Aguacate", answer: "Verdadero" },
            { text: "Mantequilla", answer: "Falso" }
        ]
    },
    {
        type: "order",
        question: "Ordena estas películas por año de estreno (1 = más antigua, 10 = más reciente).",
        options: [
            { text: "Lo que el viento se llevó", answer: "1º (1939)" },
            { text: "Psicosis", answer: "2º (1960)" },
            { text: "El Padrino", answer: "3º (1972)" },
            { text: "Star Wars", answer: "4º (1977)" },
            { text: "E.T.", answer: "5º (1982)" },
            { text: "Titanic", answer: "6º (1997)" },
            { text: "El Señor de los Anillos", answer: "7º (2001)" },
            { text: "Avatar", answer: "8º (2009)" },
            { text: "Interstellar", answer: "9º (2014)" },
            { text: "Dune", answer: "10º (2021)" }
        ]
    },
    {
        type: "exact",
        question: "¿En qué década se estrenó esta serie?",
        options: [
            { text: "Friends", answer: "Años 90" },
            { text: "Breaking Bad", answer: "2000s" },
            { text: "Stranger Things", answer: "2010s" },
            { text: "La casa de papel", answer: "2010s" },
            { text: "Juego de Tronos", answer: "2010s" },
            { text: "Los Simpson", answer: "Años 80/90" },
            { text: "The Office (US)", answer: "2000s" },
            { text: "Squid Game", answer: "2020s" },
            { text: "The Crown", answer: "2010s" },
            { text: "Élite", answer: "2010s" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este instrumento es de cuerda?",
        options: [
            { text: "Guitarra", answer: "Verdadero" },
            { text: "Flauta", answer: "Falso" },
            { text: "Violín", answer: "Verdadero" },
            { text: "Batería", answer: "Falso" },
            { text: "Piano", answer: "Verdadero" },
            { text: "Trompeta", answer: "Falso" },
            { text: "Arpa", answer: "Verdadero" },
            { text: "Saxofón", answer: "Falso" },
            { text: "Ukelele", answer: "Verdadero" },
            { text: "Timbales", answer: "Falso" }
        ]
    },
    {
        type: "order",
        question: "Ordena estos eventos históricos por fecha (1 = más antiguo, 10 = más reciente).",
        options: [
            { text: "Construcción pirámides Egipto", answer: "1º" },
            { text: "Imperio Romano", answer: "2º" },
            { text: "Caída Roma", answer: "3º" },
            { text: "Descubrimiento América", answer: "4º" },
            { text: "Revolución Francesa", answer: "5º" },
            { text: "I Guerra Mundial", answer: "6º" },
            { text: "II Guerra Mundial", answer: "7º" },
            { text: "Llegada a la Luna", answer: "8º" },
            { text: "Caída Muro Berlín", answer: "9º" },
            { text: "COVID-19 pandemia", answer: "10º" }
        ]
    }
];
