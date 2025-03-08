// Function to move elements to the current slide section
function moveElementToCurrentSlide() {
    const menubar = document.getElementById("menubarbottom");
    const nr = document.querySelector(".slide-number");
    const logo = document.querySelector(".slide-logo");
    const currentSlide = document.querySelector(".present");

    if (currentSlide) {
        if (menubar) {
            currentSlide.appendChild(menubar);
        } else {
            console.warn("#menubarbottom was not found on the page.");
        }

        if (nr) {
            currentSlide.appendChild(nr);
        } else {
            console.warn(".slide-number was not found on the page.");
        }

        if (logo && !document.documentElement.classList.contains("print-pdf")) {
            currentSlide.appendChild(logo);
        }
    } else {
        console.warn("No slide with class 'present' found.");
    }
}

// Function to move .slide-logo as the first child of .reveal when print-pdf is active
function checkAndMoveLogoForPrint() {
    const logo = document.querySelector(".slide-logo");
    const revealContainer = document.querySelector(".reveal");

    if (document.documentElement.classList.contains("print-pdf")) {
        if (logo && revealContainer && revealContainer.firstChild !== logo) {
            revealContainer.insertBefore(logo, revealContainer.firstChild);
        }
    } else {
        moveElementToCurrentSlide(); // Move it back to the current slide
    }
}

// Event listener for when Reveal.js is ready (initial load)
Reveal.addEventListener("ready", function () {
    moveElementToCurrentSlide();
    checkAndMoveLogoForPrint();
});

// Event listener for when the slide changes
Reveal.addEventListener("slidechanged", function () {
    moveElementToCurrentSlide();
    checkAndMoveLogoForPrint();
});

// MutationObserver to detect class changes on the <html> element
const observer = new MutationObserver(() => {
    checkAndMoveLogoForPrint();
});

// Start observing changes to the class attribute of <html>
observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
