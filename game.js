/**
 * Smart 10 - Solo soporte: mostrar preguntas, opciones y revelar respuesta al pulsar.
 * Sin equipos ni puntuación; eso lo lleváis vosotros.
 */

let questions = [];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    // Usar todas las preguntas del diccionario (incluidas las de fútbol)
    questions = [...SMART10_QUESTIONS];

    document.getElementById("start-game-btn").addEventListener("click", startGame);
    document.getElementById("prev-question-btn").addEventListener("click", () => goToQuestion(currentIndex - 1));
    document.getElementById("next-question-btn").addEventListener("click", () => goToQuestion(currentIndex + 1));
    document.getElementById("question-select").addEventListener("change", (e) => {
        const idx = parseInt(e.target.value, 10);
        if (!isNaN(idx)) goToQuestion(idx);
    });
});

function startGame() {
    document.getElementById("start-screen").classList.remove("active");
    document.getElementById("game-screen").classList.add("active");

    const select = document.getElementById("question-select");
    select.innerHTML = "";
    questions.forEach((_, i) => {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = `Pregunta ${i + 1}`;
        select.appendChild(opt);
    });

    currentIndex = 0;
    select.value = "0";
    renderQuestion();
}

function goToQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    currentIndex = index;
    document.getElementById("question-select").value = String(currentIndex);
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentIndex];
    if (!q) return;

    const centerEl = document.getElementById("question-center");
    centerEl.innerHTML = `<p class="question-text">${q.question}</p>`;

    const container = document.getElementById("options-container");
    container.innerHTML = "";

    q.options.forEach((opt) => {
        const card = document.createElement("div");
        card.className = "option-card";
        card.innerHTML = `
            <span class="option-text">${opt.text}</span>
            <span class="option-answer">${opt.answer}</span>
        `;
        card.addEventListener("click", () => {
            card.classList.toggle("revealed");
        });
        container.appendChild(card);
    });
}
