var numberOfButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfButton; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var nameOfButton = this.textContent;
    playSound(nameOfButton);
    animateButton(nameOfButton);
  })
}

document.addEventListener("keypress", function(event){
  var keyPressed = event.key;
  playSound(keyPressed);
  animateButton(keyPressed);
})

function playSound(button){
  switch (button) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default: console.log(button);
  }
}

function animateButton(button){
  var btn = document.querySelector("." + button);
  btn.classList.add("pressed");

  setTimeout(function(){
    btn.classList.remove("pressed")
  }, 100);
}
