// DOOM Elements
const input = document.getElementById("textBox");
let invalidOption = document.querySelector(".invalid-option__menu");

// Room Game
const bedroom = document.querySelector(".bedroom");
const hallway = document.querySelector(".hallway");
const bathroom = document.querySelector(".bathroom");
const livingRoom = document.querySelector(".livingRoom");
const kitchen = document.querySelector(".kitchen")
let currentDiv = bedroom;

// Sounds
const audio = document.getElementById("sound");
const soundDoor = document.getElementById("soundDoor");
const soundClock = document.getElementById("clock");
const soundWaterDrop = document.getElementById("waterDrop");
const soundSteps = document.getElementById("steps");
const soundBeats = document.getElementById("beats");
const soundWhisper = document.getElementById("whisper");

// Add Event Listeners
input.addEventListener('blur', () => {
    input.focus();
});

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      enviarTexto();
      textClean();
  }
});

// Functions
function textClean() {
  document.getElementById("textBox").value = "";
}

function enviarTexto() {
  const text = input.value.toLowerCase();
  checkCurrentDiv(text);
}

function checkCurrentDiv (text) {
  if (currentDiv === bedroom){
    bedroomLogic(text);
  } else if (currentDiv === hallway){
    hallwayLogic(text);
  } else if (currentDiv === bathroom){
    bathroomLogic(text);
  } else if (currentDiv === livingRoom){
    livingRoomLogic(text);
  } else if (currentDiv === kitchen){
    kitchenLogic(text);
  }
}

function bedroomLogic(text){
  if (text === "1"){
    alert("Você analisou o cenário")
  } else if (text === "2"){
    bedroom.classList.add("hidden");
    hallway.classList.remove("hidden");
    soundDoor.play();
    soundClock.play();
    soundClock.loop = true;
    currentDiv = hallway;
  }
}

function hallwayLogic(text){
  if (text === "1"){
    alert("Você analisou o cenário");
  } else if (text === "2"){
    hallway.classList.add("hidden");
    bathroom.classList.remove("hidden");
    soundClock.pause();
    soundDoor.play();
    soundWaterDrop.play();
    soundWaterDrop.loop = true;
    currentDiv = bathroom;
  } else if (text === "3"){
    livingRoom.classList.remove("hidden");
    hallway.classList.add("hidden");
    soundClock.pause();
    soundSteps.play();
    soundBeats.play();
    soundBeats.loop = true;
    currentDiv = livingRoom;
  } else if (text === "4"){
    alert("Você foi para a porta misteriosa")
  } else if (text === "5"){
    bedroom.classList.remove("hidden");
    hallway.classList.add("hidden");
    soundDoor.play();
    soundClock.pause();
    currentDiv = bedroom;
  }
}

function bathroomLogic(text){
  if (text === "1"){
    alert("Você analisou o cenário");
  } else if (text === "2"){
    hallway.classList.remove("hidden");
    bathroom.classList.add("hidden");
    soundDoor.play();
    soundWaterDrop.pause();
    soundClock.play();
    soundClock.loop = true;
    currentDiv = hallway;
  }
}

function livingRoomLogic(text){
  if (text === "1"){
    alert("Você analisou o cenário")
  } else if (text === "2"){
    kitchen.classList.remove("hidden");
    livingRoom.classList.add("hidden");
    soundSteps.play();
    soundBeats.pause();
    soundWhisper.play();
    soundWhisper.loop = true;
    currentDiv = kitchen;
  } else if (text === "3"){
    alert("você foi até a porta principal")
  } else if (text === "4"){
    alert("Voê foi para o escritorio")
  } else if (text === "5"){
    hallway.classList.remove("hidden");
    livingRoom.classList.add("hidden");
    soundSteps.play();
    soundBeats.pause();
    soundClock.play();
    soundClock.loop = true;
    currentDiv = hallway;
  }
}

function kitchenLogic(text){
  if (text === "1"){
    alert("Você analisou o cenário")
  } else if (text === "2"){
    kitchen.classList.add("hidden");
    livingRoom.classList.remove("hidden");
    soundSteps.play();
    soundBeats.play();
    soundWhisper.pause();
    soundBeats.loop = true;
    currentDiv = livingRoom;
  }
}