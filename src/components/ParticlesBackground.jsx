import React, { useEffect, useRef } from 'react'

function ParticlesBackground() {

    // canvasRef gives us a direct reference to the <canvas> DOM element
    const canvasRef = useRef(null);

    useEffect(() => {
        // Get the canvas element and its 2D drawing context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d"); // ctx is the "pen" we use to draw

        let particles = [];            // Will hold all active particle objects
        const particleCounts = 50;     // Total number of particles on screen
        const colors = ["rgba(255 , 255,255,0.7)"]; // Available particle colors (white, semi-transparent)

        // ─── PARTICLE CLASS ───────────────────────────────────────────────
        // Blueprint for a single particle — defines its look, position & behavior
        class Particles {
            constructor() {
                // Place the particle at a random position within the canvas
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;

                // Give it a random radius between 1 and 3
                this.radius = Math.random() * 2 + 1;

                // Pick a random color from the colors array
                this.color = colors[Math.floor(Math.random() * colors.length)];

                // Random slow velocity in both directions (-0.25 to +0.25 px/frame)
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
            }

            // ── draw() ──────────────────────────────────────────────────
            // Paints this particle onto the canvas as a glowing filled circle
            draw() {
                ctx.beginPath(); // Start a new drawing path
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // Draw a full circle
                ctx.shadowBlur = 10;            // Add a soft glow effect
                ctx.shadowColor = this.color;   // Glow color matches the particle
                ctx.fillStyle = this.color;     // Fill color of the circle
                ctx.fill();                     // Actually paint it
            }

            // ── update() ────────────────────────────────────────────────
            // Moves the particle each frame and wraps it around screen edges
            update() {
                this.x += this.speedX; // Move horizontally
                this.y += this.speedY; // Move vertically

                // If particles go off-screen, teleport them to the opposite side
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                this.draw(); // After moving, redraw the particle at its new position
            }
        }

        // ─── createParticles() ────────────────────────────────────────────
        // Clears the old particles array and fills it with 50 brand-new particles
        function createParticles() {
            particles = [];
            for (let i = 0; i < particleCounts; i++) {
                particles.push(new Particles()); // Create and store each particle
            }
        }

        // ─── handleResize() ───────────────────────────────────────────────
        // Keeps the canvas the same size as the browser window at all times.
        // Also recreates particles so they spread across the new dimensions.
        function handleResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles(); // Recreate particles to fit the new canvas size
        }
        handleResize(); // Run once immediately on mount to set initial size
        window.addEventListener("resize", handleResize); // Re-run on every resize

        // ─── animate() ────────────────────────────────────────────────────
        // The main render loop — runs ~60 times per second via requestAnimationFrame.
        // Each frame: wipe the canvas → move all particles → draw them → repeat.
        let animationId;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Wipe the previous frame

            particles.forEach(p =>
                p.update() // Move + redraw each particle
            );

            animationId = requestAnimationFrame(animate); // Schedule the next frame
        }
        animate(); // Kick off the animation loop

        // ─── CLEANUP ──────────────────────────────────────────────────────
        // Runs when the component is removed from the page (unmounts).
        // Stops the animation loop and removes the resize listener to prevent memory leaks.
        return () => {
            cancelAnimationFrame(animationId);              // Stop the render loop
            window.removeEventListener("resize", handleResize); // Detach resize listener
        }
    }, []) // Empty array = run this effect only once, after first render

    return (
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        ParticlesBackground
      </canvas>
    );
}

export default ParticlesBackground


// **The Frame-by-Frame Flow:**
// ```
// Mount → handleResize() → createParticles() → animate() starts
//           ↓
// Each frame: clearRect → forEach p.update() → p.draw() → next frame
//           ↓
// Unmount → cancelAnimationFrame + removeEventListener