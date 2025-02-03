document.addEventListener("DOMContentLoaded", () => {
    const cocktailCards = document.querySelectorAll(".cocktail-card");

    cocktailCards.forEach(card => {
        card.addEventListener("click", () => {
            const info = card.querySelector(".cocktail-info");
            const isVisible = info.style.display === "block";
            
            // Закриваємо всі інші картки
            cocktailCards.forEach(c => {
                c.querySelector(".cocktail-info").style.display = "none";
            });

            // Відкриваємо тільки вибрану картку
            if (!isVisible) {
                info.style.display = "block";
            }
        });
    });
});
