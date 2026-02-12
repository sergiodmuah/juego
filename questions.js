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
    },

    // ========== FÚTBOL (preguntas 21 en adelante) ==========
    {
        type: "true_false",
        question: "¿Este jugador ha ganado un Balón de Oro?",
        options: [
            { text: "Messi", answer: "Verdadero" },
            { text: "Cristiano Ronaldo", answer: "Verdadero" },
            { text: "Harry Kane", answer: "Falso" },
            { text: "Modric", answer: "Verdadero" },
            { text: "Benzema", answer: "Verdadero" },
            { text: "Haaland", answer: "Falso" },
            { text: "Kaká", answer: "Verdadero" },
            { text: "Neymar", answer: "Falso" },
            { text: "Ronaldinho", answer: "Verdadero" },
            { text: "Salah", answer: "Falso" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este club ha ganado la Champions League?",
        options: [
            { text: "Real Madrid", answer: "Verdadero" },
            { text: "Barcelona", answer: "Verdadero" },
            { text: "Atlético de Madrid", answer: "Falso" },
            { text: "Manchester City", answer: "Verdadero" },
            { text: "PSG", answer: "Falso" },
            { text: "Bayern Múnich", answer: "Verdadero" },
            { text: "Juventus", answer: "Verdadero" },
            { text: "Tottenham", answer: "Falso" },
            { text: "Chelsea", answer: "Verdadero" },
            { text: "Arsenal", answer: "Falso" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este jugador ha jugado en el FC Barcelona?",
        options: [
            { text: "Messi", answer: "Verdadero" },
            { text: "Cristiano Ronaldo", answer: "Falso" },
            { text: "Neymar", answer: "Verdadero" },
            { text: "Suárez", answer: "Verdadero" },
            { text: "Haaland", answer: "Falso" },
            { text: "Iniesta", answer: "Verdadero" },
            { text: "Mbappé", answer: "Falso" },
            { text: "Piqué", answer: "Verdadero" },
            { text: "Benzema", answer: "Falso" },
            { text: "Pedri", answer: "Verdadero" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este país ha ganado un Mundial de fútbol?",
        options: [
            { text: "Brasil", answer: "Verdadero" },
            { text: "España", answer: "Verdadero" },
            { text: "Holanda", answer: "Falso" },
            { text: "Argentina", answer: "Verdadero" },
            { text: "Bélgica", answer: "Falso" },
            { text: "Italia", answer: "Verdadero" },
            { text: "Inglaterra", answer: "Verdadero" },
            { text: "Portugal", answer: "Falso" },
            { text: "Francia", answer: "Verdadero" },
            { text: "Croacia", answer: "Falso" }
        ]
    },
    {
        type: "exact",
        question: "¿En qué año ganó España el Mundial?",
        options: [
            { text: "Mundial 2010 Sudáfrica", answer: "2010" },
            { text: "Eurocopa 2008", answer: "2008" },
            { text: "Eurocopa 2012", answer: "2012" },
            { text: "Mundial 2014 Brasil", answer: "Alemania 2014" },
            { text: "Mundial 2018 Rusia", answer: "Francia 2018" },
            { text: "Mundial 2022 Qatar", answer: "Argentina 2022" },
            { text: "Eurocopa 2020", answer: "Italia 2021" },
            { text: "Mundial 2006", answer: "Italia 2006" },
            { text: "Eurocopa 2016", answer: "Portugal 2016" },
            { text: "Mundial 2002", answer: "Brasil 2002" }
        ]
    },
    {
        type: "exact",
        question: "¿Con qué selección jugaba este jugador en Mundiales?",
        options: [
            { text: "Messi", answer: "Argentina" },
            { text: "Cristiano Ronaldo", answer: "Portugal" },
            { text: "Neymar", answer: "Brasil" },
            { text: "Mbappé", answer: "Francia" },
            { text: "Kane", answer: "Inglaterra" },
            { text: "Modric", answer: "Croacia" },
            { text: "Courtois", answer: "Bélgica" },
            { text: "Neuer", answer: "Alemania" },
            { text: "Salah", answer: "Egipto" },
            { text: "Son Heung-min", answer: "Corea del Sur" }
        ]
    },
    {
        type: "order",
        question: "Ordena estos equipos por número de Champions/Copas de Europa (1 = menos, 10 = más).",
        options: [
            { text: "Atlético de Madrid", answer: "1º (0)" },
            { text: "Arsenal", answer: "2º (0)" },
            { text: "Manchester City", answer: "3º (1)" },
            { text: "Chelsea", answer: "4º (2)" },
            { text: "Juventus", answer: "5º (2)" },
            { text: "Inter", answer: "6º (3)" },
            { text: "Barcelona", answer: "7º (5)" },
            { text: "Bayern", answer: "8º (6)" },
            { text: "Milan", answer: "9º (7)" },
            { text: "Real Madrid", answer: "10º (15)" }
        ]
    },
    {
        type: "exact",
        question: "¿En qué equipo jugaba este futbolista en la temporada 2023/24?",
        options: [
            { text: "Messi", answer: "Inter Miami" },
            { text: "Cristiano Ronaldo", answer: "Al-Nassr" },
            { text: "Mbappé", answer: "Real Madrid" },
            { text: "Haaland", answer: "Manchester City" },
            { text: "Bellingham", answer: "Real Madrid" },
            { text: "Vinicius Jr", answer: "Real Madrid" },
            { text: "Kane", answer: "Bayern Múnich" },
            { text: "Salah", answer: "Liverpool" },
            { text: "Lewandowski", answer: "Barcelona" },
            { text: "Neymar", answer: "Al-Hilal" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este jugador ha ganado un Mundial?",
        options: [
            { text: "Messi", answer: "Verdadero" },
            { text: "Cristiano Ronaldo", answer: "Falso" },
            { text: "Mbappé", answer: "Verdadero" },
            { text: "Modric", answer: "Falso" },
            { text: "Iniesta", answer: "Verdadero" },
            { text: "Haaland", answer: "Falso" },
            { text: "Neuer", answer: "Verdadero" },
            { text: "Neymar", answer: "Falso" },
            { text: "Griezmann", answer: "Verdadero" },
            { text: "Kane", answer: "Falso" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este entrenador ha dirigido al Real Madrid?",
        options: [
            { text: "Ancelotti", answer: "Verdadero" },
            { text: "Guardiola", answer: "Falso" },
            { text: "Mourinho", answer: "Verdadero" },
            { text: "Klopp", answer: "Falso" },
            { text: "Zidane", answer: "Verdadero" },
            { text: "Simeone", answer: "Falso" },
            { text: "Benítez", answer: "Verdadero" },
            { text: "Arteta", answer: "Falso" },
            { text: "Pellegrini", answer: "Verdadero" },
            { text: "Xavi", answer: "Falso" }
        ]
    },
    {
        type: "exact",
        question: "¿Cuántas Champions tiene este club?",
        options: [
            { text: "Real Madrid", answer: "15" },
            { text: "Milan", answer: "7" },
            { text: "Bayern", answer: "6" },
            { text: "Barcelona", answer: "5" },
            { text: "Liverpool", answer: "6" },
            { text: "Inter", answer: "3" },
            { text: "Manchester United", answer: "3" },
            { text: "Juventus", answer: "2" },
            { text: "Chelsea", answer: "2" },
            { text: "Atlético de Madrid", answer: "0" }
        ]
    },
    {
        type: "order",
        question: "Ordena por año de nacimiento (1 = más joven, 10 = más mayor).",
        options: [
            { text: "Lamine Yamal", answer: "1º (2007)" },
            { text: "Gavi", answer: "2º (2004)" },
            { text: "Bellingham", answer: "3º (2003)" },
            { text: "Haaland", answer: "4º (2000)" },
            { text: "Mbappé", answer: "5º (1998)" },
            { text: "Rodri", answer: "6º (1996)" },
            { text: "Modric", answer: "7º (1985)" },
            { text: "Messi", answer: "8º (1987)" },
            { text: "Cristiano Ronaldo", answer: "9º (1985)" },
            { text: "Thiago Silva", answer: "10º (1984)" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este jugador ha jugado en la Premier League?",
        options: [
            { text: "Haaland", answer: "Verdadero" },
            { text: "Salah", answer: "Verdadero" },
            { text: "Messi", answer: "Falso" },
            { text: "Kane", answer: "Verdadero" },
            { text: "De Bruyne", answer: "Verdadero" },
            { text: "Benzema", answer: "Falso" },
            { text: "Vinicius Jr", answer: "Falso" },
            { text: "Son", answer: "Verdadero" },
            { text: "Lewandowski", answer: "Falso" },
            { text: "Bruno Fernandes", answer: "Verdadero" }
        ]
    },
    {
        type: "exact",
        question: "¿En qué liga juega este equipo?",
        options: [
            { text: "Real Madrid", answer: "LaLiga" },
            { text: "Liverpool", answer: "Premier League" },
            { text: "Inter", answer: "Serie A" },
            { text: "Bayern", answer: "Bundesliga" },
            { text: "PSG", answer: "Ligue 1" },
            { text: "Benfica", answer: "Primeira Liga" },
            { text: "Ajax", answer: "Eredivisie" },
            { text: "Celtic", answer: "Scottish Premiership" },
            { text: "Boca Juniors", answer: "Liga Argentina" },
            { text: "Flamengo", answer: "Brasileirão" }
        ]
    },
    {
        type: "order",
        question: "Ordena estas finales de Mundial por año (1 = más antigua, 10 = más reciente).",
        options: [
            { text: "Italia 1990", answer: "1º" },
            { text: "USA 1994", answer: "2º" },
            { text: "Francia 1998", answer: "3º" },
            { text: "Corea-Japón 2002", answer: "4º" },
            { text: "Alemania 2006", answer: "5º" },
            { text: "Sudáfrica 2010", answer: "6º" },
            { text: "Brasil 2014", answer: "7º" },
            { text: "Rusia 2018", answer: "8º" },
            { text: "Qatar 2022", answer: "9º" },
            { text: "USA-México-Canadá 2026", answer: "10º (próximo)" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este jugador ha sido Pichichi de LaLiga?",
        options: [
            { text: "Messi", answer: "Verdadero" },
            { text: "Benzema", answer: "Verdadero" },
            { text: "Lewandowski", answer: "Verdadero" },
            { text: "Griezmann", answer: "Falso" },
            { text: "Suárez", answer: "Verdadero" },
            { text: "Cristiano Ronaldo", answer: "Verdadero" },
            { text: "Vinicius Jr", answer: "Falso" },
            { text: "Villa", answer: "Verdadero" },
            { text: "Haaland", answer: "Falso" },
            { text: "Eto'o", answer: "Verdadero" }
        ]
    },
    {
        type: "exact",
        question: "¿Quién ganó la Eurocopa en este año?",
        options: [
            { text: "Eurocopa 2008", answer: "España" },
            { text: "Eurocopa 2012", answer: "España" },
            { text: "Eurocopa 2016", answer: "Portugal" },
            { text: "Eurocopa 2020 (2021)", answer: "Italia" },
            { text: "Eurocopa 2004", answer: "Grecia" },
            { text: "Eurocopa 2000", answer: "Francia" },
            { text: "Eurocopa 1996", answer: "Alemania" },
            { text: "Eurocopa 1992", answer: "Dinamarca" },
            { text: "Eurocopa 1988", answer: "Holanda" },
            { text: "Eurocopa 1984", answer: "Francia" }
        ]
    },

    // --- MÁS FÚTBOL ---
    {
        type: "true_false",
        question: "¿Este jugador ha jugado en el Real Madrid?",
        options: [
            { text: "Cristiano Ronaldo", answer: "Verdadero" },
            { text: "Mbappé", answer: "Verdadero" },
            { text: "Benzema", answer: "Verdadero" },
            { text: "Messi", answer: "Falso" },
            { text: "Beckham", answer: "Verdadero" },
            { text: "Ronaldo Nazário", answer: "Verdadero" },
            { text: "Zidane", answer: "Verdadero" },
            { text: "Neymar", answer: "Falso" },
            { text: "Figo", answer: "Verdadero" },
            { text: "Haaland", answer: "Falso" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este equipo juega en LaLiga?",
        options: [
            { text: "Real Madrid", answer: "Verdadero" },
            { text: "Barcelona", answer: "Verdadero" },
            { text: "Atlético de Madrid", answer: "Verdadero" },
            { text: "Sevilla", answer: "Verdadero" },
            { text: "Valencia", answer: "Verdadero" },
            { text: "Real Betis", answer: "Verdadero" },
            { text: "Athletic Club", answer: "Verdadero" },
            { text: "Espanyol", answer: "Verdadero" },
            { text: "Getafe", answer: "Verdadero" },
            { text: "Benfica", answer: "Falso" }
        ]
    },
    {
        type: "exact",
        question: "¿Cuántos Mundiales ha ganado este país?",
        options: [
            { text: "Brasil", answer: "5" },
            { text: "Alemania", answer: "4" },
            { text: "Italia", answer: "4" },
            { text: "Argentina", answer: "3" },
            { text: "Francia", answer: "2" },
            { text: "Uruguay", answer: "2" },
            { text: "España", answer: "1" },
            { text: "Inglaterra", answer: "1" },
            { text: "Holanda", answer: "0" },
            { text: "Portugal", answer: "0" }
        ]
    },
    {
        type: "order",
        question: "Ordena estos jugadores por goles en Mundiales (1 = menos de la lista, 10 = más).",
        options: [
            { text: "Iniesta", answer: "1º" },
            { text: "Modric", answer: "2º" },
            { text: "Zidane", answer: "3º" },
            { text: "Kane", answer: "4º" },
            { text: "Klose", answer: "5º (16 goles)" },
            { text: "Ronaldo Nazário", answer: "6º (15)" },
            { text: "Müller (Thomas)", answer: "7º" },
            { text: "Messi", answer: "8º" },
            { text: "Mbappé", answer: "9º" },
            { text: "Cristiano Ronaldo", answer: "10º" }
        ]
    },
    {
        type: "exact",
        question: "¿En qué equipo debutó este jugador como profesional?",
        options: [
            { text: "Messi", answer: "Barcelona" },
            { text: "Cristiano Ronaldo", answer: "Sporting Lisboa" },
            { text: "Neymar", answer: "Santos" },
            { text: "Mbappé", answer: "Mónaco" },
            { text: "Haaland", answer: "Bryne / Molde" },
            { text: "Benzema", answer: "Lyon" },
            { text: "Salah", answer: "Al Mokawloon" },
            { text: "Kane", answer: "Tottenham" },
            { text: "Vinicius Jr", answer: "Flamengo" },
            { text: "Pedri", answer: "Las Palmas" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este jugador es o fue portero?",
        options: [
            { text: "Neuer", answer: "Verdadero" },
            { text: "Courtois", answer: "Verdadero" },
            { text: "Ter Stegen", answer: "Verdadero" },
            { text: "Oblak", answer: "Verdadero" },
            { text: "Alisson", answer: "Verdadero" },
            { text: "Casillas", answer: "Verdadero" },
            { text: "Buffon", answer: "Verdadero" },
            { text: "Sergio Ramos", answer: "Falso" },
            { text: "Ederson", answer: "Verdadero" },
            { text: "De Gea", answer: "Verdadero" }
        ]
    },
    {
        type: "exact",
        question: "¿Quién ganó la Champions esta temporada?",
        options: [
            { text: "2023/24", answer: "Real Madrid" },
            { text: "2022/23", answer: "Manchester City" },
            { text: "2021/22", answer: "Real Madrid" },
            { text: "2020/21", answer: "Chelsea" },
            { text: "2019/20", answer: "Bayern" },
            { text: "2018/19", answer: "Liverpool" },
            { text: "2017/18", answer: "Real Madrid" },
            { text: "2016/17", answer: "Real Madrid" },
            { text: "2015/16", answer: "Real Madrid" },
            { text: "2014/15", answer: "Barcelona" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este jugador ha ganado la Copa América?",
        options: [
            { text: "Messi", answer: "Verdadero" },
            { text: "Neymar", answer: "Falso" },
            { text: "Suárez", answer: "Verdadero" },
            { text: "Cavani", answer: "Verdadero" },
            { text: "James Rodríguez", answer: "Verdadero" },
            { text: "Cristiano Ronaldo", answer: "Falso" },
            { text: "Di María", answer: "Verdadero" },
            { text: "Vinicius Jr", answer: "Verdadero" },
            { text: "Alisson", answer: "Verdadero" },
            { text: "Mbappé", answer: "Falso" }
        ]
    },
    {
        type: "order",
        question: "Ordena estos equipos por títulos de LaLiga (1 = menos, 10 = más).",
        options: [
            { text: "Getafe", answer: "1º (0)" },
            { text: "Villarreal", answer: "2º (0)" },
            { text: "Sevilla", answer: "3º (1)" },
            { text: "Valencia", answer: "4º (6)" },
            { text: "Athletic Club", answer: "5º (8)" },
            { text: "Atlético de Madrid", answer: "6º (11)" },
            { text: "Real Sociedad", answer: "7º (2)" },
            { text: "Barcelona", answer: "8º (27)" },
            { text: "Real Madrid", answer: "9º (36)" },
            { text: "(Desglose)", answer: "10º" }
        ]
    },
    {
        type: "exact",
        question: "¿Qué dorsal llevaba este jugador en su equipo más conocido?",
        options: [
            { text: "Messi (Barça)", answer: "10" },
            { text: "Cristiano Ronaldo (Real Madrid)", answer: "7" },
            { text: "Neymar (Barça)", answer: "11" },
            { text: "Benzema (Real Madrid)", answer: "9" },
            { text: "Salah (Liverpool)", answer: "11" },
            { text: "Haaland (City)", answer: "9" },
            { text: "Modric (Real Madrid)", answer: "10" },
            { text: "De Bruyne (City)", answer: "17" },
            { text: "Kane (Bayern)", answer: "9" },
            { text: "Mbappé (PSG)", answer: "7" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este estadio es sede de un equipo de Primera?",
        options: [
            { text: "Santiago Bernabéu", answer: "Verdadero" },
            { text: "Camp Nou", answer: "Verdadero" },
            { text: "Wanda Metropolitano", answer: "Verdadero" },
            { text: "San Mamés", answer: "Verdadero" },
            { text: "Mestalla", answer: "Verdadero" },
            { text: "Benito Villamarín", answer: "Verdadero" },
            { text: "Ramón Sánchez-Pizjuán", answer: "Verdadero" },
            { text: "Wembley", answer: "Falso (selección)" },
            { text: "Olímpico Roma", answer: "Verdadero (Lazio/Roma)" },
            { text: "Allianz Arena", answer: "Verdadero" }
        ]
    },
    {
        type: "exact",
        question: "¿En qué año ganó este club su primera Champions?",
        options: [
            { text: "Real Madrid", answer: "1956" },
            { text: "Barcelona", answer: "1992" },
            { text: "Bayern", answer: "1974" },
            { text: "Milan", answer: "1963" },
            { text: "Liverpool", answer: "1977" },
            { text: "Manchester United", answer: "1968" },
            { text: "Inter", answer: "1964" },
            { text: "Juventus", answer: "1985" },
            { text: "Chelsea", answer: "2012" },
            { text: "Manchester City", answer: "2023" }
        ]
    },
    {
        type: "true_false",
        question: "¿Este jugador ha marcado en una final de Champions?",
        options: [
            { text: "Benzema", answer: "Verdadero" },
            { text: "Vinicius Jr", answer: "Verdadero" },
            { text: "Salah", answer: "Falso" },
            { text: "Mane", answer: "Verdadero" },
            { text: "Griezmann", answer: "Falso" },
            { text: "Rodri (City)", answer: "Verdadero" },
            { text: "Haaland", answer: "Falso" },
            { text: "Dembélé", answer: "Falso" },
            { text: "Bale", answer: "Verdadero" },
            { text: "Ramos", answer: "Verdadero" }
        ]
    },
    {
        type: "order",
        question: "Ordena por número de Balones de Oro (1 = ninguno, 10 = más).",
        options: [
            { text: "Haaland", answer: "1º (0)" },
            { text: "Neymar", answer: "2º (0)" },
            { text: "Modric", answer: "3º (1)" },
            { text: "Benzema", answer: "4º (1)" },
            { text: "Kaká", answer: "5º (1)" },
            { text: "Ronaldinho", answer: "6º (1)" },
            { text: "Cristiano Ronaldo", answer: "7º (5)" },
            { text: "Messi", answer: "8º (8)" },
            { text: "Platini", answer: "9º (3)" },
            { text: "Cruyff", answer: "10º (3)" }
        ]
    }
];
