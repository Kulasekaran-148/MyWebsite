var snare = new Audio('sounds/snare.mp3')
var hihat = new Audio('sounds/hi-hat.mp3')
var hitom = new Audio('sounds/hi-tom.mp3')
var ride = new Audio('sounds/ride.mp3')
var crash = new Audio('sounds/crash.mp3')
var medtom = new Audio('sounds/med-tom.mp3')
var floortom = new Audio('sounds/floor-tom.mp3')
var bassdrum = new Audio('sounds/bassdrum.mp3')

document.getElementById("snare").addEventListener("click",function () {
  snare.currentTime=0;
  snare.play();
});
document.addEventListener("keydown", function(event) {
  if(event.keyCode===65){
    snare.currentTime = 0;
    snare.play();
  }
});

document.getElementById("hi-tom").addEventListener("click",function () {
  hitom.currentTime=0;
  hitom.play();
});
document.addEventListener("keydown", function(event) {
  if(event.keyCode===83){
    hitom.currentTime = 0;
    hitom.play();
  }
});

document.getElementById("med-tom").addEventListener("click",function () {
  medtom.currentTime=0;
  medtom.play();
});
document.addEventListener("keydown", function(event) {
  if(event.keyCode===68){
    medtom.currentTime = 0;
    medtom.play();
  }
});

document.getElementById("floor-tom").addEventListener("click",function () {
  floortom.currentTime=0;
  floortom.play();
});
document.addEventListener("keydown", function(event) {
  if(event.keyCode===70){
    floortom.currentTime = 0;
    floortom.play();
  }
});

document.getElementById("bass-drum").addEventListener("click",function () {
  bassdrum.currentTime=0;
  bassdrum.play();
});
document.addEventListener("keydown", function(event) {
  if(event.keyCode===74){
    bassdrum.currentTime = 0;
    bassdrum.play();
  }
});

document.getElementById("hi-hat").addEventListener("click",function () {
  hihat.currentTime=0;
  hihat.play();
});
document.addEventListener("keydown", function(event) {
  if(event.keyCode===75){
    hihat.currentTime = 0;
    hihat.play();
  }
});

document.getElementById("crash-cymbal").addEventListener("click",function () {
  crash.currentTime=0;
  crash.play();
});
document.addEventListener("keydown", function(event) {
  if(event.keyCode===76){
    crash.currentTime = 0;
    crash.play();
  }
});

document.getElementById("ride-cymbal").addEventListener("click",function () {
  ride.currentTime=0;
  ride.play();
});
document.addEventListener("keydown", function(event) {
  if(event.keyCode===186){
    ride.currentTime = 0;
    ride.play();
  }
});