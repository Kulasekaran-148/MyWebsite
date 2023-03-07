function roll(){
  var img1 = Math.floor(Math.random() * 6) + 1;
  var img2 = Math.floor(Math.random() * 6) + 1;
  var result = 0;
  if(img1 === img2){
    result = 0;
  }
  else if(img1>img2){
    result = 1;
  }
  else{
    result = 2;
  }
  document.getElementById("img1").setAttribute("src","images/"+img1.toString()+".png")
  document.getElementById("img2").setAttribute("src","images/"+img2.toString()+".png")
  if(result!==0){
    document.getElementById("result").textContent = "Player " + result +  " wins !!";
  }
  else{
    document.getElementById("result").textContent = "Its a Draw :) roll again";
  }
}




