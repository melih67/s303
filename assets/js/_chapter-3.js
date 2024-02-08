let anneeActuelle = document.querySelector(".actuelle");
let anneeFutur = document.querySelector(".futur");

anneeActuelle.addEventListener("click", function () {
  let graph1 = document.getElementById("s3a4");
  let graph2 = document.getElementById("s3a4-1");
  graph1.classList.add("none");
  graph2.classList.remove("none");
});

anneeFutur.addEventListener("click", function () {
  let graph1 = document.getElementById("s3a4");
  let graph2 = document.getElementById("s3a4-1");
  graph2.classList.add("none");
  graph1.classList.remove("none");
});