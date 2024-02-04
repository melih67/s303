/* document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.chapter');
  const navLinks = document.querySelectorAll('.side-nav__link');

  window.addEventListener('scroll', () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.href.split('#')[1] === currentSection) {
        link.classList.add('active');
      }
    });
  });
});
 */
