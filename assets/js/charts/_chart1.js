const dataVoiture = [4, 11, 26, 21, 20, 11, 4, 3];
const dataBus = [3, 14, 25, 23, 26, 19, 4, 3];
const dataScooter = [9, 18, 26, 23, 10, 5, 4, 1];
const colorVoiture = "#ff7037";
const colorBus = "#87CEEB";
const colorScooter = "#FED767";

function updateChartData() {
  const selectedTransport = document.querySelector(
    'input[name="transport"]:checked'
  ).value;

  let newData;
  let newColors;
  switch (selectedTransport) {
    case "voitures":
      newData = dataVoiture;
      newColors = colorVoiture;
      break;
    case "bus":
      newData = dataBus;
      newColors = colorBus;
      break;
    case "scooters":
      newData = dataScooter;
      newColors = colorScooter;
      break;
    default:
      newData = []; // Par défaut, aucun donnée si rien n'est sélectionné
  }

  // Mettre à jour les données du graphique
  chart.data.datasets[0].data = newData;
  chart.data.datasets[0].backgroundColor = newColors;
  chart.update(); // Rafraîchir le graphique
}

// Attacher les écouteurs d'événements aux boutons radio pour appeler updateChartData lors d'un changement
document.querySelectorAll('input[name="transport"]').forEach((button) => {
  button.addEventListener("change", updateChartData);
});

const data = {
  labels: [
    "0 à 1km",
    "1 à 2km",
    "2 à 5km",
    "5 à 10km",
    "10 à 20km",
    "20 à 35km",
    "35 à 50km",
    "plus de 50km",
  ],
  datasets: [
    {
      label: "% utilisé en fonction de la distance",
      data: dataVoiture,
      backgroundColor: colorVoiture,
      borderColor: "#ffffff",
      borderWidth: 3,
    },
  ],
};

const ctx = document.getElementById("chart1");

const chart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      // Configuration pour chartjs-plugin-datalabels
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value, context) => {
          return value + "%"; // Ajoute '%' après chaque valeur
        },
        color: "#444", // Couleur du texte des étiquettes
      },
    },
  },
  plugins: [ChartDataLabels],
});
