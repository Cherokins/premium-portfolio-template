// =========================================
// PARALLAX EFFECT
// =========================================

document.addEventListener('DOMContentLoaded', () => {
  const orbs = document.querySelectorAll('.orb');

  // Only run on devices that support hover (not touch devices)
  if (window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      orbs.forEach((orb, index) => {
        // Different depths for each orb
        const speed = (index + 1) * 15;
        const moveX = (x - 0.5) * speed;
        const moveY = (y - 0.5) * speed;

        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  }
});
