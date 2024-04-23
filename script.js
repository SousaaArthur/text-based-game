// Text box
const input = document.getElementById("textBox");
    
input.addEventListener('blur', () => {
    input.focus();
});

// Small letters
input.addEventListener('input', function() {
  this.value = this.value.toLowerCase();
});

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      enviarTexto();
      textClean();
  }
});

function textClean() {
  document.getElementById("textBox").value = "";
}

// Codes
let mainMenu = document.querySelector(".main__menu");
let invalidOption = document.querySelector(".invalid-option__menu");
let audio = document.getElementById("sound");
let cor;

function enviarTexto() {
  const text = input.value;
  if(text === "1" || text === "start"){
    window.location.href = "./test.html";
  } else if (text === "2" || text === "tutorial"){
    mainMenu.classList.add("hidden");
  } else if (text === "3" || text === "exit"){
    window.close();
  } else if (text === "music__pause"){
    audio.pause();
  }  else if (text === "music__play"){
    audio.play();
    audio.loop = true;
  } else if (text === "text_color_purple"){
    cor = document.documentElement.style.setProperty("--main-color", "#4c00ff");
  } else if (text === "default"){
    document.documentElement.style.setProperty("--main-color", "#00FF00");
    audio.play();
    audio.loop = true;
  } else if(text === "clean"){
    const textInvalid = invalidOption.querySelectorAll("h4");
    textInvalid.forEach(function(textInvalid) {
      textInvalid.parentNode.removeChild(textInvalid);
    });
  } else if (text === "multiplayer"){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else {
    const h4 = document.createElement('h4');
    h4.textContent = "Invalid Option!!!"

    invalidOption.appendChild(h4);
  }
}