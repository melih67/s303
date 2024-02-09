let anneeActuelle = document.querySelector(".actuelle");
let anneeFutur = document.querySelector(".futur");

anneeActuelle.addEventListener("click", function (ev) {
  anneeActuelle.classList.add('active');
  anneeFutur.classList.remove('active')
  let graph1 = document.getElementById("s3a4");
  let graph2 = document.getElementById("s3a4-1");
  graph1.style.opacity = 0;
  graph2.style.opacity = 1;
});

anneeFutur.addEventListener("click", function (ev) {
  anneeFutur.classList.add('active');
  anneeActuelle.classList.remove('active')
  let graph1 = document.getElementById("s3a4");
  let graph2 = document.getElementById("s3a4-1");
  graph2.style.opacity = 0;
  graph1.style.opacity = 1;
});
/* let anneeActuelle = document.querySelector(".actuelle");
let anneeFutur = document.querySelector(".futur");

anneeActuelle.addEventListener("click", function (ev) {
  anneeActuelle.classList.add('active');
  anneeFutur.classList.remove('active')
  let graph1 = document.getElementById("s3a4");
  let graph2 = document.getElementById("s3a4-1");
  graph1.classList.add("none");
  graph2.classList.remove("none");
});

anneeFutur.addEventListener("click", function (ev) {
  anneeFutur.classList.add('active');
  anneeActuelle.classList.remove('active')
  let graph1 = document.getElementById("s3a4");
  let graph2 = document.getElementById("s3a4-1");
  graph2.classList.add("none");
  graph1.classList.remove("none");
}); */
