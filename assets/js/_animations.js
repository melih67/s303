let percent = 0;
function load() {
  percent += Math.floor(Math.random() * (20 - 5)) + 10;
  if (percent >= 100) {
    percent = 100;
    clearInterval(timer);
  }
  document.body.querySelector(".loading").style.backgroundSize =
    percent + "% 100%";
}

let timer = setInterval(load, 300);
