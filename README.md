# Smart 10 - Juego de Preguntas

Juego web tipo Smart 10: **pregunta en el centro**, **10 opciones alrededor** y **respuesta oculta** en cada opción hasta que la pulsas.

Sin lógica de equipos ni puntuación; eso lo lleváis vosotros (papel, otro dispositivo, etc.).

## Cómo jugar

1. **Empezar partida** → Entras al juego.
2. En el **centro** se muestra la pregunta (verdadero/falso, ordenar, respuesta exacta, etc.).
3. **Alrededor** aparecen las 10 opciones.
4. **Pulsar una opción** → Se muestra la respuesta de esa opción (y se puede volver a pulsar para ocultarla).
5. **Navegación**: selector "Pregunta" para ir a cualquier pregunta (1 a 10) y botones ⬅️ / ➡️ para anterior/siguiente.

## Estructura del proyecto

- **index.html** – Estructura de la app (inicio + pantalla de juego).
- **styles.css** – Estilos y diseño responsive (móvil y escritorio).
- **game.js** – Solo soporte: cargar pregunta, pintar opciones, revelar/ocultar respuesta al pulsar, cambiar de pregunta.
- **questions.js** – **Diccionario de preguntas.** Cada pregunta tiene:
  - `type`: `"true_false"` | `"order"` | `"exact"`
  - `question`: texto que va en el centro
  - `options`: array de 10 elementos `{ text: "opción", answer: "respuesta" }`

## Añadir o editar preguntas

Todo está en **questions.js**, en el array `SMART10_QUESTIONS`. Puedes copiar cualquier bloque y cambiar tipo, enunciado y las 10 opciones con sus respuestas. El juego usa por defecto las **10 primeras** preguntas del diccionario; en `game.js` la constante `TOTAL_QUESTIONS_IN_GAME` controla cuántas se cargan (puedes aumentarla si añades más preguntas y quieres elegir entre más).

## Desplegar en GitHub Pages

1. Sube el repo a GitHub.
2. Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
3. La URL será: `https://tu-usuario.github.io/nombre-repo`

Ideal para abrirlo en el móvil y jugar con amigos.
