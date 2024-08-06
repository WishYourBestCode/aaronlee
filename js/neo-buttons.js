export default function neobuttons() {
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
      let text = button.textContent;
      button.innerHTML = '';
      for (let char of text) {
        let span = document.createElement('span');
        span.textContent = char == ' ' ? '\u00A0' : char;
        button.appendChild(span);
      }
      let spans = button.querySelectorAll('span');
      button.addEventListener('mouseenter', () => {
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('hover');
          }, index);
        });

        // Change particle color on hover
        const color1 = button.getAttribute('data-color1');
        const color2 = button.getAttribute('data-color2');
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
          const color = index % 2 === 0 ? color1 : color2;
          particle.style.background = color;
          particle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
        });
      });
      button.addEventListener('mouseleave', () => {
        spans.forEach((span) => {
          span.classList.remove('hover');
        });

        // Reset particle color when not hovering
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
          if (index % 2 === 0) {
            particle.style.background = '#ff2d75';
            particle.style.boxShadow =
              '0 0 10px #ff2d75, 0 0 20px #ff2d75, 0 0 30px #ff2d75';
          } else {
            particle.style.background = '#4fc3dc';
            particle.style.boxShadow =
              '0 0 10px #4fc3dc, 0 0 20px #4fc3dc, 0 0 30px #4fc3dc';
          }
        });
      });
    });

    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const numberOfParticles = Math.floor(
        (screenWidth * screenHeight) / 20000
      ); // Adjust this value to control density

      particlesContainer.innerHTML = ''; // Clear any existing particles

      for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Randomly position particles at the top
        particle.style.top = `-${Math.random() * 20}px`; // Positioning just above the viewport
        particle.style.left = `${Math.random() * 100}%`;

        // Randomly set animation duration and delay
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
      }
    }

   
    createParticles();

    window.addEventListener('resize', () => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle) => {
        const left = parseFloat(particle.style.left);
        const top = parseFloat(particle.style.top);

        // Keep particles within the viewport during resizing
        if (left > window.innerWidth - 20) {
          particle.style.left = `${window.innerWidth - 20}px`;
        }
        if (top > window.innerHeight - 20) {
          particle.style.top = `${window.innerHeight - 20}px`;
        }
      });
    });
}
