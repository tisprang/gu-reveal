document.addEventListener("DOMContentLoaded", function () {
    // Get the meta tag with name "pres-context"
    const presMeta = document.querySelector('meta[name="pres-context"]');
    
    if (presMeta && presMeta.content) {
        // Create the pres-context div
        const contextDiv = document.createElement("div");
        contextDiv.classList.add("pres-context");
        
        // Create the paragraph and set its text
        const contextP = document.createElement("p");
        contextP.textContent = presMeta.content;
        
        // Append paragraph to div
        contextDiv.appendChild(contextP);
        
        // Append the div to the last child of each slide
        document.querySelectorAll(".slides section").forEach(slide => {
            slide.appendChild(contextDiv.cloneNode(true));
        });
    }
});
