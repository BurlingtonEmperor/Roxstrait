// // const fruitingRow = document.getElementById("row1-farm");
// // const greensRow = document.getElementById("row2-farm");
// // const carrotsRow = document.getElementById("row3-farm");

// // for (let i = 0; i < 14; i++) {
// //   fruitingRow.innerHTML += "<img src='./roxstrait/fruit.png' width='7%'/>";
// // }

// // for (let i = 0; i < 14; i++) {
// //   greensRow.innerHTML += "<img src='./roxstrait/spinach.png' width='7%' />";
// // }

// // for (let i = 0; i < 14; i++) {
// //   carrotsRow.innerHTML += "<img src='./roxstrait/carrot.png' width='7%' />";
// // }

// const simStart = document.getElementById("sim-start");
// const plantSelector = document.getElementById("plant-selector");
// const lifeSelector = document.getElementById("life-selector");

// const waterLevel = document.getElementById("water-level");
// const fertLevel = document.getElementById("fert-level");
// const harvestLevel = document.getElementById("harvest-level");

// let intervalToClearLater = 0;
// let timeTillWater = 4320; // minutes
// let timeTillFert = 21600; // minutes
// let timeTillHarvest = 72000; // minutes

// function plantCycle () {
//   timeTillWater -= 1;
//   timeTillFert -= 1;
//   timeTillHarvest -= 1;

//   if (timeTillWater < 1) {
//     timeTillWater = 4320;
//   }

//   if (timeTillFert < 1) {
//     timeTillFert = 21600;
//   }

//   if (timeTillHarvest < 1) {
//     timeTillHarvest = 72000;
//   }

//   waterLevel.innerHTML = "Time until next watering is <a style='color:red'>" + timeTillWater + "</a> minutes";
//   fertLevel.innerHTML = "Time until next fertilization is <a style='color:red'>" + timeTillFert + "</a> minutes";
//   harvestLevel.innerHTML = "Time until you can harvest is <a style='color:red'>" + timeTillHarvest + "</a> minutes";
// }

// simStart.onclick = function () {
//   timeTillWater = 4320; // minutes
//   timeTillFert = 21600; // minutes
//   timeTillHarvest = 72000;
//   document.body.style.backgroundColor = "#b898f5";
//   plantCycle();
//   intervalToClearLater = setInterval(function () {
//     plantCycle();
//   }, 30000);
// }

let optimalWaterAmount = [];
let optimalFertAmount = [];
let optimalHarvestAmount = [];

for (let i = 0; i < 3; i++) {
  optimalWaterAmount[i] = Math.random() * 20;
  optimalFertAmount[i] = Math.random() * 20;
  optimalHarvestAmount[i] = Math.random() * 20;
}

let targWater = 0;
let targFert = 0;
let targHarv = 0;

function findDistance (num1, num2) {
  return Math.abs(num1 - num2);
}

function reinforceAI (arrayNum) {
  
}