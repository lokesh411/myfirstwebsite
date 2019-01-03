
function changelabel(n){
  var sample=document.getElementsByTagName("input");
  if(n==1)
  {
    sample[0].setAttribute("placeholder","Search By City or Address:");
  }
  else if (n==2) {
sample[0].setAttribute("placeholder","Search By Address or City:");
    }
    else{
sample[0].setAttribute("placeholder","Search By City or Address:");
    }
  }
window.onscroll=function(){
  myfunction()
};


function myfunction(){
  console.log("abc");
  var navbar=document.querySelector('.top-bottom');
  var sticky=navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    // navbar.classList.add("sticky");
  } else {
    // navbar.classList.remove("sticky");
  }
}
function changebackground(n){
  let sl = ['images/image1.jpg', 'url(images/image2.jpg)']
  console.log("slider");
  var slider=document.querySelector('.slider');
  var img="image"+n+".jpg";
  console.log("image",img);
  var sp1=document.querySelector('#sp1');
  var sp2=document.querySelector('#sp2');
  var sp3=document.querySelector('#sp3');
  if(n==1){
    slider.style.setProperty("background-image","url(images/image1.jpg)");
    slider.style.setProperty("transition","0.5s width");
    sp1.style.setProperty("background-color","#ffffff");
    sp2.style.setProperty("background","transparent");
    sp3.style.setProperty("background","transparent");
  }
  else if (n==2) {
    slider.style.setProperty("background-image","url(images/image2.jpg)");
    slider.style.setProperty("transition","0.5s width");
    sp1.style.setProperty("background-color","transparent");
    sp2.style.setProperty("background","#ffffff");
    sp3.style.setProperty("background","transparent");
  }
  else {
    slider.style.setProperty("background-image","url(images/image3.jpg)");
    slider.style.setProperty("transition","0.5s width");
    sp1.style.setProperty("background-color","transparent");
    sp2.style.setProperty("background","transparent");
    sp3.style.setProperty("background","#ffffff");
  }
}
