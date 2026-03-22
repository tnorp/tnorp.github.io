// Simple contact form handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // In a real implementation, you'd send this to a backend
                // For now, show a success message
                alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});