
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

function enviarTexto() {
  const text = input.value;
  if(text === "1" || text === "start"){
    window.location.href = "../game.html";
  } else if (text === "2"){
    window.location.href = "../../../index.html"
  } else if (text === "3"){
    window.close();
  } else if(text === "clean"){
    const textInvalid = invalidOption.querySelectorAll("h4");
    textInvalid.forEach(function(textInvalid) {
      textInvalid.parentNode.removeChild(textInvalid);
    });
  } else {
    const h4 = document.createElement('h4');
    h4.textContent = "Invalid Option!!!"

    invalidOption.appendChild(h4);
  }
}