document.addEventListener("DOMContentLoaded", function () {
    // Get the document title
    const presTitle = document.title;

    if (presTitle) {
        // Create the pres-title div
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("pres-title");

        // Create the paragraph and set its text
        const titleP = document.createElement("p");
        titleP.textContent = presTitle;

        // Append paragraph to div
        titleDiv.appendChild(titleP);

        // Append the div to the last child of each slide
        document.querySelectorAll(".slides section").forEach(slide => {
            slide.appendChild(titleDiv.cloneNode(true));
        });
    }
});
