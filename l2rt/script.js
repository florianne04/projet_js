const EQUIPE = [
  "Maroc",
  "Algérie",
  "Égypte",
  "Tunisie",
  "Sénégal",
  "Côte d'Ivoire",
  "Burkina Faso",
  "Mali",
  "Nigeria",
  "Bénin",
  "Guinée équatoriale",
  "Cameroun",
  "RD Congo",
  "Gabon",
  "Afrique du Sud",
  "Zambie",
  "Zimbabwe",
  "Mozambique",
  "Ouganda",
  "Tanzanie",
  "Comores",
  "Angola",
  "Botswana",
  "Soudan",
];
const teamList = document.getElementById("teamList");
EQUIPE.forEach((team) => {
  const li = document.createElement("li");
  li.textContent = team;
  teamList.appendChild(li);
});

const team1 = document.getElementById("team1");
const team2 = document.getElementById("team2");
const score = document.getElementById("score");

const btnAjouter = document.getElementById("btnAddMatch");
btnAjouter.addEventListener("click", () => {
  if (team1.value === team2.value) {
    alert("Les équipes doivent être différentes.");
    return;
  }
  if (!EQUIPE.includes(team1.value) || !EQUIPE.includes(team2.value)) {
    alert("Les équipes doivent figurer dans la liste des équipes participantes.");
    return;
  }
  if (!score.value.trim()) {
    alert("Veuillez entrer un score.");
    return;
  }
  const matchList = document.getElementById("matchList");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = team1.value;
  const tdScore = document.createElement("td");
  tdScore.textContent = score.value;
  const td2 = document.createElement("td");
  td2.textContent = team2.value;
  tr.appendChild(td1);
  tr.appendChild(tdScore);
  tr.appendChild(td2);
  matchList.appendChild(tr);
  // Réinitialiser les champs
  team1.value = "";
  score.value = "";
  team2.value = "";
}); 





