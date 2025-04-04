// script.js
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const videos = document.querySelectorAll(".video-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const category = button.getAttribute("data-category");
            
            videos.forEach(video => {
                if (category === "all" || video.getAttribute("data-category") === category) {
                    video.style.display = "block";
                    setTimeout(() => video.classList.add("fade-in"), 100);
                } else {
                    video.classList.remove("fade-in");
                    setTimeout(() => video.style.display = "none", 300);
                }
            });
        });
    });

    // Smooth scrolling for better navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});