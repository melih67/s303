import "./_scroller.js";

import "./_chapter-1.js";
import "./_chapter-2.js";
import "./_chapter-3.js";
import "./_animations.js";
import "./charts/index.js";
<<<<<<< HEAD

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

let blok2 = document.querySelector(".lej");
blok2.classList.add("lej2");
blok2.classList.remove("lej");
=======
>>>>>>> 253e9f12adf21e58628871efb677928fe8bb3df3
