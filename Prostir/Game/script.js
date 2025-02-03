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
        "Селфі навпаки. Зроби фото всіх, окрім себе.",
        "Містична історія. Вигадай страшну/смішну історію за 30 секунд.",
        "Кумедна сценка. Зіграй сцену з фільму у власній манері.",
        "Комплімент навпаки. Скажи три компліменти у формі запитань.",
        "Гра з жестами. Поясни фразу «Я обожнюю вечірки з вами!» жестами.",
        "Відеопривітання. Запиши кумедне відео-привітання для майбутнього.",
        "Тваринний звук. Імітуй звук тварини, щоб інші вгадали.",
        "Палка обіцянка. Пообіцяй щось виконати до кінця тижня.",
        "Правда чи Bluff. Скажи три факти, з яких один – брехня.",
      "Швидка пісня. Заспівай куплет про вечірку на відому мелодію.",
      "Перевтілення. Копіюй манери когось із присутніх.",
      "“Най…” Назви три найбільш дивні речі сьогодні.",
      "Святкова хода. Пройдися кімнатою як модель чи супергерой.",
      "Стихійна реклама. Прорекламуй предмет у кімнаті.",
      "Незвичний акцент. Протягом хвилини говори з акцентом.",
      "Селфі з предметом. Зроби селфі з найбільш незвичним предметом.",
      "Малюнок із закритими очима. Намалюй щось із зав’язаними очима.",
      "Згадка дитинства. Розкажи про улюблену гру чи іграшку.",
      "Шоу талантів. Покажи трюк, танець чи «спецуміння».",
      "“Містер/Міс загадка”. Вигадай загадку про себе.",
      "Танцювальна битва. Потанцюй, хай інші оцінять.",
      "Смішне селфі. Створи максимально кумедне фото.",
      "Рими-батл. Придумай рими на слова від інших.",
      "Тост на майбутнє. Побажай щось друзям."
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
                flipCard.classList.toggle("flipped");
            });

            container.appendChild(flipCard);
        });
    }

    window.onload = () => {
        createCards(individualTasks, "individualGrid", false);
        createCards(teamTasks, "teamGrid", true);
    };
});
