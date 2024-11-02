function typeWriter(selectors, speed = 100) {
    let current = 0; // Track the current element in the sequence

    function typeNext() {
        // Check if there are more elements to process
        if (current < selectors.length) {
            const element = document.querySelector(selectors[current]);
            if (!element) {
                console.error(`Element with selector "${selectors[current]}" not found.`);
                current++;
                typeNext(); // Move to the next element if this one is missing
                return;
            }

            // Remove the 'hidden' class just before typing starts
            element.classList.remove('hidden');

            const text = element.innerText;
            element.innerHTML = ''; // Clear existing text for typing effect
            let index = 0;

            function type() {
                if (index < text.length) {
                    element.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
                    index++;
                    setTimeout(type, speed);
                } else {
                    // Remove the cursor and proceed to the next element
                    element.querySelector('.cursor').remove();
                    setTimeout(() => {
                        element.innerHTML = ''; // Clear the current element's content
                        current++; // Move to the next element in the sequence
                        typeNext(); // Call typeNext to start typing the next element
                    }, 1000); // Delay before clearing and moving to the next
                }
            }

            type(); // Start typing for the current element
        }
    }

    typeNext(); // Start the sequence
}

// Usage: Start typing with `#role-text`, then move to `#mission-text`
document.addEventListener("DOMContentLoaded", function() {
    typeWriter(['#role-text', '#mission-text'], 100);
});
