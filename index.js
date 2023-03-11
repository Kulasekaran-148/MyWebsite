const welcomebtn = document.getElementById('welcomebtn');
const mypic = document.getElementById('profilepic');
const bgimg = document.getElementById('bgimg');
const myname = document.getElementById('myname');
const mybio = document.getElementById('mybio');
const knowmorebtn = document.getElementById('knowmore');

welcomebtn.addEventListener('click', function() {
  // first making the welcome button go up
  welcomebtn.classList.add('welcomebtn-translate-to-top');
  welcomebtn.classList.remove('welcomebtn-middle-pos');

  setTimeout(function(){
    mypic.classList.remove('hide');
    bgimg.classList.add('dim');
    setTimeout(function(){
      myname.classList.remove('hide');
      setTimeout(function(){
        mybio.classList.remove('hide');
        setTimeout(function(){
          knowmorebtn.classList.remove('hide');
        },1000);
      },1000);
    },1000);
  },1000);
});
