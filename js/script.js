function typeWriter(selector, speed = 100) {
    const element = document.querySelector(selector);
    const text = element.innerText;
    element.innerHTML = ''; // Clear existing text for typing effect

    let index = 0;

    function type() {
        if (index < text.length) {
            // Add next character with a span cursor
            element.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(type, speed);
        } else {
            // Remove the cursor after typing finishes
            element.querySelector('.cursor').remove();
        }
    }

    type();
}

// Start typing effect on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    typeWriter('#mission-text', 100); // Example use for header text
    // typeWriter('#second-text', 100); // Example use for second section text
});
