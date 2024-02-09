document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.getElementById("scroller");
  const navLinks = document.querySelectorAll(".side-nav__link");
  const story = document.getElementById("histoire");
  const chapters = document.querySelectorAll(".chapter");
  const blockedSection = document.getElementById("blocked-section");
  const steppedAnimation = document.getElementById("stepped-animation");
  let lastScroll = 0;
  let blocked = false;
  const options = {
    root: story,
    threshold: 0.1,
  };

  function changeStep() {
    if (blocked) return;
    blocked = true;
    const newStep = parseInt(steppedAnimation.dataset.step) + 1;
    steppedAnimation.dataset.step = newStep;
    blockedSection.classList.add("step" + newStep);
    setTimeout(() => {
      blocked = false;
    }, 600);
    if (newStep == 3) {
      setTimeout(() => {
        story.style.overflowY = "scroll";
        window.removeEventListener("wheel", changeStep);
        window.removeEventListener("touchmove", changeStep);
      }, 600);
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
      window.addEventListener("wheel", changeStep);
      window.addEventListener("touchmove", changeStep);
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

  /* Custom Scrollbar */
  const scrollbarContainer = document.getElementById('scrollbar-container');
  const scrollbarTrack = document.getElementById('scrollbar-track');
  const scrollbarThumb = document.getElementById('scrollbar-thumb');
  let halfThumb = scrollbarThumb.offsetHeight / 2
  let scrollbarElementsDiff = scrollbarContainer.clientHeight - scrollbarThumb.clientHeight;
  let maxScroll = story.scrollHeight - story.clientHeight;
  let startY, startScroll;

  function handleScrollbarDrag(ev) {
    ev.preventDefault();
    startY = ev.clientY;
    startScroll = story.scrollTop;

    function scrollBar(ev) {
        story.scrollTop = startScroll + ((ev.clientY - startY) / scrollbarContainer.clientHeight) * maxScroll;
    }
    function stopScrolling() {
      window.removeEventListener('mousemove', scrollBar);
      window.removeEventListener('mouseup', stopScrolling);
    }
    window.addEventListener('mousemove', scrollBar);
    window.addEventListener('mouseup', stopScrolling);
  }

  scrollbarThumb.addEventListener('mousedown', handleScrollbarDrag);
  scrollbarTrack.addEventListener('mousedown', (ev) => {
    story.scrollTop = (ev.clientY - halfThumb) / scrollbarElementsDiff * maxScroll;
  });
  story.addEventListener('scroll', () => {
    scrollbarThumb.style.top = story.scrollTop / maxScroll * scrollbarElementsDiff + 'px';
  });
});
