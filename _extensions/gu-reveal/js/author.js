document.addEventListener("DOMContentLoaded", function () {
    // Get all meta tags
    const metaTags = document.querySelectorAll('meta[name="author"]');
    
    // Extract author names and join them with ' / '
    const authors = Array.from(metaTags).map(meta => meta.content).join(' / ');
    
    if (authors) {
        // Create the authors div
        const authorsDiv = document.createElement("div");
        authorsDiv.classList.add("auths");
        
        // Create the paragraph and set its text
        const authorsP = document.createElement("p");
        authorsP.textContent = authors;
        
        // Append paragraph to div
        authorsDiv.appendChild(authorsP);
        
        // Append the div to the last child of each slide
        document.querySelectorAll(".slides section").forEach(slide => {
            slide.appendChild(authorsDiv.cloneNode(true));
        });
    }
  });
  