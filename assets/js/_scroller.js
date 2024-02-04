document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.getElementById('scroller');
  const navLinks = document.querySelectorAll('.side-nav__link');
  const story = document.getElementById('histoire');
  const chapters = document.querySelectorAll('.chapter');
  let lastScroll = 0;
  const options = {
    root: story,
    threshold: 0.1
  };

  const observer = new IntersectionObserver((sections) => {
    sections.forEach(section => {
      if (section.isIntersecting) {
        const id = '#' + section.target.id;
        section.target.dataset.visited ? null : section.target.classList.add('visited');
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
  story.addEventListener('wheel', () => {
    scroller.classList.add('scrolling');
    setTimeout(() => {
      if (Date.now() - lastScroll > 15000) scroller.classList.remove('scrolling');
    }, 15000);
    lastScroll = Date.now();
  });
});
