function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}



document.addEventListener("DOMContentLoaded", function () {
    let percentage = 0;
    const loadingText = document.querySelector(".loading-percentage");
    const loadingScreen = document.querySelector(".loading-screen");

    let interval = setInterval(() => {
        percentage += 2;
        loadingText.textContent = percentage + "%";

        if (percentage >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.opacity = "0";
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 250);
            }, 250);
        }
    }, 30);
});
