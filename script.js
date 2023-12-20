// Get all elements with the class "fade-in"
var fadeElements = document.querySelectorAll('.fade-in');

// Add scroll event listener
window.addEventListener('scroll', function () {
    // Loop through each fade-in element
    fadeElements.forEach(function (element) {
        // Calculate the distance from the top of the element to the top of the viewport
        var distanceFromTop = element.getBoundingClientRect().top;

        // If the element is in the viewport, add the "show" class
        if (distanceFromTop - window.innerHeight < 0) {
            element.classList.add('show');
        }
    });
});

// Get the header element
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
