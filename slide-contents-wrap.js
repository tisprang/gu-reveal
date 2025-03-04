// Define a function to wrap the contents of each slide inside a div, except for the first child
window.RevealSlideContentsWrap = function () {
  return {
    id: "RevealSlideContentsWrap",
    init: function (deck) {
      // Get an array of all the slides in the deck
      const slides = deck.getSlides();

      // For each slide, get its children and the first child element
      slides.forEach((slide) => {
        const children = slide.children;
        const firstChild = children[0];

        // If the first child element is an H2 header, wrap the rest of the children in a div
        if (firstChild.tagName === "H2") {
          const otherChildren = Array.from(children).slice(1);
          const wrapper = document.createElement("div");
          wrapper.classList.add("slide-contents-wrap");
          otherChildren.forEach((child) => {
            wrapper.appendChild(child);
          });
          slide.appendChild(wrapper);
        }
      });
    },
  };
};
