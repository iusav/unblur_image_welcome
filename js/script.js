// Simple welcome page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress indicator
    const progressIndicator = document.querySelector('.progress-indicator');
    
    if (progressIndicator) {
        // Simulate loading progress
        setTimeout(() => {
            progressIndicator.style.width = '100%';
        }, 100);
        
        // Hide progress bar after animation
        setTimeout(() => {
            progressIndicator.style.opacity = '0';
        }, 700);
    }
    
    // Add fade-in animation to content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 200);
    }
    
    // Add hover effects to images
    const images = document.querySelectorAll('.responsive-image');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
