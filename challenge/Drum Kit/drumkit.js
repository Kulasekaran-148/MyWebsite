var elemId = 0;
document.addEventListener('click',function(event){
  if(event.target.hasAttribute('id')){
    event.target.children[2].currentTime = 0;
    event.target.children[2].play();
  }
  else{
    elemId = event.target.parentNode.getAttribute('id');
    event.target.parentNode.children[2].currentTime = 0;
    event.target.parentNode.children[2].play();
  }
});
document.addEventListener('keypress',function(event){
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    const secondChild = button.children[1];
    if(event.key === secondChild.textContent.toLowerCase()){
      button.children[2].currentTime=0;
      button.children[2].play();
    }
  });
});