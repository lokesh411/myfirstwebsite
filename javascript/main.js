let bimages=["url(../myfirstwebsite/images/image1.jpg)","url(../myfirstwebsite/images/image2.jpg)","url(../myfirstwebsite/images/image3.jpg)"];
let slidernav = document.querySelector('.slider-nav1');
function changelabel(n){
  let sample=document.getElementsByTagName("input");
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
//-----------slider-background-changer-----------------


for (let i = 0; i < bimages.length; i++) {
  console.log("background");
  let radio=document.createElement('span');
  radio.classList.add("slider-radio");
  if(i===0) {
    radio.classList.add("active");
  }

  radio.addEventListener("click",function(){          //  removeback(i);
    changeBackground(i);
    spanBackground(i);
  });
  slidernav.appendChild(radio);
}
function changeBackground(n){
  let slider=document.querySelector(".slider");
  slider.style.setProperty("background-image",bimages[n]);
}
function spanBackground(n){
  let radio=document.querySelectorAll(".slider-radio");
  for (let i = 0; i < radio.length; i++) {
    if(i==n)
    radio[i].classList.add("active");
    else {
      radio[i].classList.remove("active");
        }
  }
}
//-----Testimonials----slider--------------
let slidernav1=document.querySelector('.slider-nav');
for (let i = 0; i < 2; i++) {
  let span=document.createElement('span');
  span.classList.add("sec-testimonials-nav");
  if(i==0)
  {
    span.classList.add("active1");
  }
  span.addEventListener("click",function(){
    navBackground(i);
  });
  slidernav1.appendChild(span);
}
function navBackground(n){
  console.log("n:",n);
  let nav=document.querySelectorAll(".sec-testimonials-nav");
  for (var i = 0; i<nav.length; i++)
  {
    if(i==n){
      nav[i].classList.add("active1");
    }
    else {
      nav[i].classList.remove("active1");
    }
  }
}
