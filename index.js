let players = JSON.parse(localStorage.getItem("players")) || [];
window.onload = () => {
  list();
};

const add = () => {
  let playerName = document.getElementById("name").value;
  let playerNumber = document.getElementById("num").value;
  let playerGoals = document.getElementById("goals").value;

  let player = {
    id: Date.now(),
    playerName: playerName,
    playerNumber: playerNumber,
    playerGoals: playerGoals,
  };
  players.push(player);
  localStorage.setItem("players", JSON.stringify(players));
  removeData();
  list();
};

/////////////////////////////////
const removeData = () => {
  document.getElementById("name").value = "";
  document.getElementById("num").value = "";
  document.getElementById("goals").value = "";
};

//////////////////////////////////
const list = () => {
  let playerCard = document.getElementById("player");
  playerCard.innerHTML = "";
  let sumGoals = document.getElementById("sumOfGoals");
  sumGoals.innerHTML = "";

  let sum = 0;

  players.forEach((element) => {
    let playerInfo = document.createElement("div");
    playerInfo.classList = "card bg-info form-control ms-3";
    playerInfo.style = "width: 20rem";
    playerInfo.innerHTML = `
    <h4 class="mt-3">Player's Name:</h4>
    <h4 id="ad-${element.id}" onchange="update(${element.id})">${element.playerName}</h4>
    <h6>Form number: ${element.playerNumber}</h6>
    <b>Goals: <span id="${element.id}">${element.playerGoals}</span></b>
    <br />
    <button
      class="btn btn-warning ps-4 pe-4 mb-3 mt-3" onclick="addGoal(${element.id})">
      <b>GOAL⚽️</b>
    </button>
      
`;
    playerCard.appendChild(playerInfo);
    sum += Number(element.playerGoals);
  });
  sumGoals.innerHTML = sum;
};

//////////////////////////////////////////////////
const update = (id) => {
  let nameOfPlayer = document.getElementById(`ad-${id}`).value;

  let queue = players.findIndex((data) => data.id == id);
  players[queue].nameOfPlayer = nameOfPlayer;
  localStorage.setItem("players", JSON.stringify(players));
  list();
};
const addGoal = (id) => {
  let queue = players.findIndex((data) => data.id == id);
  players[queue].playerGoals++;
  localStorage.setItem("players", JSON.stringify(players));
  list();
};
