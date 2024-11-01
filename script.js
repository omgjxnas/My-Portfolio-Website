window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // Aktuální pozice scrollování
    const fadeStart = 100; // Pozice, kde by měl začít mizet text
    const fadeEnd = 300; // Pozice, kde by měl být text plně skrytý

    const h1 = document.getElementById("scroll-text");

    if (scrollY <= fadeStart) {
        h1.style.opacity = 1; // Text je plně viditelný
    } else if (scrollY >= fadeEnd) {
        h1.style.opacity = 0; // Text je plně skrytý
    } else {
        // Dynamicky mění průhlednost mezi fadeStart a fadeEnd
        h1.style.opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    }

    
});