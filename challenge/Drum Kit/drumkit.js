var snare = new Audio('sounds/snare.mp3')
var hihat = new Audio('sounds/hi-hat.mp3')
var hitom = new Audio('sounds/hi-tom.mp3')
var ride = new Audio('sounds/ride.mp3')
var crash = new Audio('sounds/crash.mp3')
var medtom = new Audio('sounds/med-tom.mp3')
var floortom = new Audio('sounds/floor-tom.mp3')
var bassdrum = new Audio('sounds/bassdrum.mp3')

const snarebtn = document.getElementById("snare");
const hitombtn = document.getElementById("hi-tom");
const medtombtn = document.getElementById("med-tom");
const floortombtn = document.getElementById("floor-tom");
const bassdrumbtn = document.getElementById("bass-drum");
const hihatbtn = document.getElementById("hi-hat");
const crashcymbalbtn = document.getElementById("crash-cymbal");
const ridecymbalbtn = document.getElementById("ride-cymbal");

snarebtn.addEventListener("click",function () {
  snare.currentTime=0;
  snare.play();
});
document.addEventListener("keydown", function(event) {
  if(event.key==="a"){
    snarebtn.click();
    snarebtn.classList.add("clicked");
    setTimeout(function(){
      snarebtn.classList.remove("clicked")
    },100);
  }
});

hitombtn.addEventListener("click",function () {
  hitom.currentTime=0;
  hitom.play();
});
document.addEventListener("keydown", function(event) {
  if(event.key==="s"){
    hitombtn.click();
    hitombtn.classList.add("clicked");
    setTimeout(function(){
      hitombtn.classList.remove("clicked")
    },100);
  }
});

medtombtn.addEventListener("click",function () {
  medtom.currentTime=0;
  medtom.play();
});
document.addEventListener("keydown", function(event) {
  if(event.key==="d"){
    medtombtn.click();
    medtombtn.classList.add("clicked");
    setTimeout(function(){
      medtombtn.classList.remove("clicked")
    },100);
  }
});

floortombtn.addEventListener("click",function () {
  floortom.currentTime=0;
  floortom.play();
});
document.addEventListener("keydown", function(event) {
  if(event.key==="f"){
    floortombtn.click();
    floortombtn.classList.add("clicked");
    setTimeout(function(){
      floortombtn.classList.remove("clicked")
    },100);
  }
});

bassdrumbtn.addEventListener("click",function () {
  bassdrum.currentTime=0;
  bassdrum.play();
});
document.addEventListener("keydown", function(event) {
  if(event.key==="j"){
    bassdrumbtn.click();
    bassdrumbtn.classList.add("clicked");
    setTimeout(function(){
      bassdrumbtn.classList.remove("clicked")
    },100);
  }
});

hihatbtn.addEventListener("click",function () {
  hihat.currentTime=0;
  hihat.play();
});
document.addEventListener("keydown", function(event) {
  if(event.key==="k"){
    hihatbtn.click();
    hihatbtn.classList.add("clicked");
    setTimeout(function(){
      hihatbtn.classList.remove("clicked")
    },100);
  }
});

crashcymbalbtn.addEventListener("click",function () {
  crash.currentTime=0;
  crash.play();
});
document.addEventListener("keydown", function(event) {
  if(event.key==="l"){
    crashcymbalbtn.click();
    crashcymbalbtn.classList.add("clicked");
    setTimeout(function(){
      crashcymbalbtn.classList.remove("clicked")
    },100);
  }
});

ridecymbalbtn.addEventListener("click",function () {
  ride.currentTime=0;
  ride.play();
});
document.addEventListener("keydown", function(event) {
  if(event.key===";"){
    ridecymbalbtn.click();
    ridecymbalbtn.classList.add("clicked");
    setTimeout(function(){
      ridecymbalbtn.classList.remove("clicked")
    },100);
  }
});