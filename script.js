// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

// Tutup menu setelah memilih navigasi
document.querySelectorAll("#mainNav a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
    });
});

// Filter materi
const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        courseCards.forEach(card => {
            const category = card.dataset.category;

            if (filter === "semua" || category === filter) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});

// Tahun footer otomatis
document.getElementById("year").textContent = new Date().getFullYear();
