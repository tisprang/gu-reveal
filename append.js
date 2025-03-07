Reveal.addEventListener("ready", function () {
    // Select the elements
    const menubar = document.getElementById("menubarbottom");
    const slides = document.querySelector(".slides");
    
    if (slides && menubar) {
        slides.appendChild(menubar);
    } else {
        console.warn("Either .slides or #menubarbottom was not found on the page.");
    }
});

Reveal.addEventListener("ready", function () {
    // Select the elements
    const nr = document.querySelector(".slide-number");
    const slides = document.querySelector(".slides");

    if (slides && nr) {
        slides.appendChild(nr);
    } else {
        console.warn("Either .slides or nr was not found on the page.");
    }
});

Reveal.addEventListener("ready", function () {
    // Select the elements
    const logo = document.querySelector(".slide-logo");
    const slides = document.querySelector(".slides");

    if (slides && logo) {
        slides.appendChild(logo);
    } else {
        console.warn("Either .slides or logo was not found on the page.");
    }
});
