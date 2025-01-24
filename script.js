// Function to trigger the counting animation when the section is in view
function countUpEffect() {
    const elements = document.querySelectorAll('.count');
    
    elements.forEach((element) => {
        const target = parseInt(element.getAttribute('data-count'), 10);
        const duration = 2000; // Time in ms for the count animation
        
        const updateCount = () => {
            const current = parseInt(element.innerText, 10);
            const increment = target / duration * 50;
            
            if (current < target) {
                element.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 50);
            } else {
                element.innerText = target;
            }
        };
        
        // Intersection Observer to trigger animation on scroll into view
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.disconnect(); // Stop observing after the animation starts
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
        
        observer.observe(element);
    });
}

// Call the function when the page is loaded
window.onload = countUpEffect;
