// Define a function to wrap the contents of each slide inside a div, except for the first child
window.RevealSlideContentsWrap = function () {
  return {
    id: "RevealSlideContentsWrap",
    init: function (deck) {
      // Get an array of all the slides in the deck
      const slides = deck.getSlides();

      // For each slide, get its children and the first child element
      slides.forEach((slide) => {
        const children = Array.from(slide.children);
        const firstChild = children[0];

        // If the first child element is an H2 header, wrap the rest of the children in a div
        if (firstChild && firstChild.tagName === "H2") {
          const wrapper = document.createElement("div");
          wrapper.classList.add("slide-contents-wrap");

          children.slice(1).forEach((child) => {
            // Only append children that do not have the 'auths' class
            if (!child.classList.contains("auths") && !child.classList.contains("pres-context") && !child.classList.contains("pres-title")) {
              wrapper.appendChild(child);
            }
          });

          slide.appendChild(wrapper);
        }
      });
    },
  };
};
