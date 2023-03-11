const welcomebtn = document.getElementById('welcomebtn');
const mypic = document.getElementById('profilepic');
const bgimg = document.getElementById('bgimg');

const typingParagraph = document.getElementById('typingParagraph');
const typingText = "Hi, I'm Kulasekaran - A Mechatronics Engineer from Villupuram, India. I'm currently learning Web Development from Udemy. This page is currently in developement.";
const typingDelay = 5000/typingText.length;

const typingaudio = new Audio("sounds/typesound.mp3");

let played = 0;

welcomebtn.addEventListener('click', function() {
  // first making the welcome button go up
  welcomebtn.classList.add('welcomebtn-translate-to-top');
  welcomebtn.classList.remove('welcomebtn-middle-pos');

  //after 1s displaying the profile pic
  setTimeout(function(){
    mypic.classList.remove('hide');
    mypic.classList.add('visible');
    bgimg.classList.add('dim');
  },1000);

  //after 1s typing about myself
  setTimeout(function() {
    typingParagraph.classList.remove('hide');
    typingParagraph.classList.add('visible');
    setTimeout(typeWriter, 0);
    if(played===0){
      typingaudio.play();
      played = 1;
    }
    
  },2000);

  //pausing typingsound after 10s
  setTimeout(function() {
    typingaudio.pause();
  },7000);
});

//aboutme typing function
let i=0;
function typeWriter() {
  if (i < typingText.length){
    typingParagraph.innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, typingDelay);
  }
}