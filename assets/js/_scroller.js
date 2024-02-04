document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.side-nav')
  const navLinks = document.querySelectorAll('.side-nav__link');
  const story = document.getElementById('histoire');
  const chapters = document.querySelectorAll('.chapter');
  const options = {
    root: story,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((sections) => {
    sections.forEach(section => {
      if (section.isIntersecting) {
        const id = '#' + section.target.id;
        history.replaceState(null, '', window.location.href.split('#')[0] + id);
        for (const link of navLinks) {
          link.ariaCurrent = link.getAttribute('href') === id ? 'step' : null;
        }
      }
    });
  }, options);

  for (const section of chapters) {
    observer.observe(section);
  }
});
