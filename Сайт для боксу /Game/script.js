document.addEventListener("DOMContentLoaded", () => {
    const rulesBtn = document.getElementById("rulesBtn");
    const rulesPanel = document.getElementById("rulesPanel");
    
    if (rulesBtn && rulesPanel) {
        rulesBtn.addEventListener("click", (e) => {
            e.preventDefault();
            rulesPanel.style.display = rulesPanel.style.display === "block" ? "none" : "block";
        });
    }

    const individualTasks = [
        "Тост у римі. Скажи тост на честь вечірки, але кожна фраза має римуватися.",
        "Розкажи про найгіршу подорож. Щось смішне, що пішло не так.",
        "Фантастична мова. Придумай «інопланетну» мову та скажи промову.",
        "Портрет сусіда. Намалюй за 30 секунд сусіда праворуч.",
        "Селфі навпаки. Зроби фото всіх, окрім себе."
    ];

    const teamTasks = [
        "Колективний танець. Придумайте й виконайте синхронний танець.",
        "Груповий тост. Складіть тост, додаючи слова по черзі.",
        "Факт чи вигадка. Вгадуйте, чи правдиві факти один одного.",
        "Загадковий предмет. Придумайте креативне використання предмета.",
        "Групове фото. Всі разом роблять спільне фото у кумедній позі."
    ];

    function createCards(tasks, containerId, isTeam) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = "";
        tasks.forEach((taskText, i) => {
            const flipCard = document.createElement("div");
            flipCard.className = "flip-card";

            const flipCardInner = document.createElement("div");
            flipCardInner.className = "flip-card-inner";

            const flipCardFront = document.createElement("div");
            flipCardFront.className = "flip-card-front";

            const cardNumber = document.createElement("div");
            cardNumber.className = "card-number";
            cardNumber.innerText = isTeam ? `Командне №${i + 1}` : `Завдання №${i + 1}`;

            flipCardFront.appendChild(cardNumber);

            const flipCardBack = document.createElement("div");
            flipCardBack.className = isTeam ? "flip-card-back team" : "flip-card-back individual";

            const taskTextDiv = document.createElement("div");
            taskTextDiv.className = "task-text";
            taskTextDiv.innerText = taskText;

            flipCardBack.appendChild(taskTextDiv);

            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);

            flipCard.addEventListener("click", () => {
                const isFullscreen = flipCard.classList.contains("fullscreen-card");

                if (isFullscreen) {
                    flipCard.classList.remove("fullscreen-card");
                    document.querySelector(".cards-grid").classList.remove("fullscreen-active");
                } else {
                    document.querySelectorAll(".fullscreen-card").forEach(openCard => {
                        openCard.classList.remove("fullscreen-card");
                    });

                    flipCard.classList.add("fullscreen-card");
                    document.querySelector(".cards-grid").classList.add("fullscreen-active");
                    flipCard.classList.add("flipped"); // Додаємо перевертання, щоб одразу був текст
                }
            });

            container.appendChild(flipCard);
        });
    }

    window.onload = () => {
        createCards(individualTasks, "individualGrid", false);
        createCards(teamTasks, "teamGrid", true);
    };
});

