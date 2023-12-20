var header = document.getElementById("main-header");

// Get the offset position of the header
var sticky = header.offsetTop;

// Add the scroll event listener
window.onscroll = function() {
    // Check if the user has scrolled past the header
    if (window.pageYOffset > sticky) {
        header.classList.add("shrink-header");
    } else {
        header.classList.remove("shrink-header");
    }
};
