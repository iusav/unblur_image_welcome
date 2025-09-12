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

// Quick fireworks on page load (non-blocking, auto-cleans)
(function() {
    function launchFireworks(durationMs) {
        try {
            var prefersReducedMotion = false;
            try {
                prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            } catch (e) {}
            if (prefersReducedMotion) return;

            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Overlay styles
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.pointerEvents = 'none';
            canvas.style.zIndex = '10000';
            canvas.style.opacity = '1';
            canvas.style.transition = 'opacity 200ms ease-out';
            document.body.appendChild(canvas);

            var dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
            function resize() {
                var w = window.innerWidth;
                var h = window.innerHeight;
                canvas.width = Math.floor(w * dpr);
                canvas.height = Math.floor(h * dpr);
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }
            resize();
            var onResize = function() { resize(); };
            window.addEventListener('resize', onResize);

            var particles = [];
            var colors = ['#ffffff', '#ff3b3b', '#ffd93b', '#3bd1ff', '#8a3bff', '#43ff66'];

            function rand(min, max) { return Math.random() * (max - min) + min; }

            function spawnBurst(x, y, count) {
                for (var i = 0; i < count; i++) {
                    var angle = Math.random() * Math.PI * 2;
                    var speed = rand(2.2, 6.2);
                    var life = rand(38, 64);
                    particles.push({
                        x: x,
                        y: y,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        life: life,
                        maxLife: life,
                        size: rand(1.5, 3.5),
                        color: colors[(Math.random() * colors.length) | 0]
                    });
                }
            }

            var w0 = window.innerWidth;
            var h0 = window.innerHeight;
            // Pre-plan a few quick bursts
            var burstPoints = [
                { x: w0 * 0.5, y: h0 * 0.35, delay: 0 },
                { x: w0 * 0.25, y: h0 * 0.5, delay: 120 },
                { x: w0 * 0.75, y: h0 * 0.5, delay: 240 }
            ];
            burstPoints.forEach(function(p) {
                setTimeout(function() { spawnBurst(p.x, p.y, 46); }, p.delay);
            });

            var start = performance.now();
            var running = true;

            function step(now) {
                if (!running) return;
                var elapsed = now - start;
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                for (var i = particles.length - 1; i >= 0; i--) {
                    var pt = particles[i];
                    // physics
                    pt.vy += 0.04; // gravity
                    pt.vx *= 0.985;
                    pt.vy *= 0.985;
                    pt.x += pt.vx;
                    pt.y += pt.vy;
                    pt.life -= 1;

                    // draw
                    var alpha = Math.max(0, pt.life / pt.maxLife);
                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = pt.color;
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
                    ctx.fill();

                    if (pt.life <= 0) {
                        particles.splice(i, 1);
                    }
                }

                if (elapsed < durationMs || particles.length > 0) {
                    requestAnimationFrame(step);
                } else {
                    // Fade and cleanup
                    canvas.style.opacity = '0';
                    running = false;
                    setTimeout(function() {
                        window.removeEventListener('resize', onResize);
                        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
                    }, 220);
                }
            }

            requestAnimationFrame(step);
        } catch (err) {
            // No-op on failures to avoid breaking the page
        }
    }

    // Kick off shortly after initial paint so it doesn't block content fade-in
    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() { launchFireworks(1200); }, 150);
    });
})();