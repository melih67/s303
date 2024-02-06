import "./_scroller.js";

import "./_chapter-1.js";
import "./_chapter-2.js";
import "./_chapter-3.js";
import "./charts/index.js";

var percent = 0;
function load() {
  percent += Math.floor(Math.random() * (20 - 5)) + 10;
  if (percent >= 100) {
    percent = 100;
    clearInterval(timer);
  }
  document.body.querySelector(".loading").style.backgroundSize =
    percent + "% 100%";
}

var timer = setInterval(load, 300);
