var elemId = 0;
document.addEventListener('click',function(event){
  if(event.target.id.slice(-3)==='btn'){
    event.target.children[2].currentTime = 0;
    event.target.children[2].play();
  }
  else if(event.target.parentNode.id.slice(-3)=='btn'){
    event.target.parentNode.children[2].currentTime = 0;
    event.target.parentNode.children[2].play();
  }
});
const buttons = document.querySelectorAll('button');
document.addEventListener('keypress',function(event){
  buttons.forEach(button => {
    const secondChild = button.children[1];
    if(event.key === secondChild.textContent.toLowerCase()){
      button.children[2].currentTime=0;
      button.children[2].play();
      button.classList.add('clicked');
      setTimeout(function(){
        button.classList.remove('clicked');
      },100);
    }
  });
});
