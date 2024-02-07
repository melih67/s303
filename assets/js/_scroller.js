document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.getElementById("scroller");
  const navLinks = document.querySelectorAll(".side-nav__link");
  const story = document.getElementById("histoire");
  const chapters = document.querySelectorAll(".chapter");
  const blockedSection = document.getElementById('blocked-section');
  const steppedAnimation = document.getElementById('stepped-animation');
  let lastScroll = 0;
  const options = {
    root: story,
    threshold: 0.1,
  };

  let changeStep = function(ev){
    const newStep = parseInt(steppedAnimation.dataset.step) + 1;
    steppedAnimation.dataset.step = newStep;
    blockedSection.classList.add('step' + newStep);
    if (newStep == 3) {
      story.style.overflowY = "scroll";
      blockedSection.removeEventListener('wheel', changeStep);

    }
  }

  const chaptersObserver = new IntersectionObserver((sections) => {
    sections.forEach((section) => {
      if (section.isIntersecting) {
        const id = "#" + section.target.id;
        if (!section.target.dataset.visited) {
          section.target.dataset.visited = "yes";
          section.target.classList.add("visited");
        }
          history.replaceState(null, "", window.location.href.split("#")[0] + id);
          for (const link of navLinks) {
            link.ariaCurrent = link.getAttribute("href") === id ? "step" : null;
          }
        }
    });
  }, options);

  const blockedObserver = new IntersectionObserver((article) => {
    article = article[0];
    if (article.isIntersecting && !article.target.dataset.visited) {
      article.target.dataset.visited = "yes";
      story.style.overflowY = "hidden";
      article.target.scrollIntoView();
      article.target.addEventListener('wheel', changeStep);
    }
  }, options);

  blockedObserver.observe(blockedSection);
  for (const section of chapters) {
    chaptersObserver.observe(section);
  }
  story.addEventListener("scroll", () => {
    scroller.classList.add("scrolling");
    lastScroll = Date.now();
  });
  setInterval(() => {
    if (Date.now() - lastScroll > 25000) scroller.classList.remove("scrolling");
  }, 5000);
});
