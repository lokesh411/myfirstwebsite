let bimages=["url(../myfirstwebsite/images/image2.jpg)","url(../myfirstwebsite/images/image1.jpg)","url(../myfirstwebsite/images/image3.jpg)"];
let slidernav = document.querySelector('.slider-nav-bg');
//-------placeholder-change-------------
  let sale=document.querySelector('#sale');
  let rent=document.querySelector('#rent');
  let commercial=document.querySelector('#commercial');
  sale.addEventListener("click",function(){
    let input=document.getElementsByTagName("input");
    removeColor();
    input[0].setAttribute("placeholder","Search By City or Address:");
    sale.classList.add("slider-list-active");
  });
  rent.addEventListener("click",function(){
    let input=document.getElementsByTagName("input");
    removeColor();
    input[0].setAttribute("placeholder","Search By Address or City:");
    rent.classList.add("slider-list-active");
  });
  commercial.addEventListener("click",function(){
    let input=document.getElementsByTagName("input");
    removeColor();
    input[0].setAttribute("placeholder","Search By City or Address:");
    commercial.classList.add("slider-list-active");
  });
  function removeColor(){
    let slideractive=document.querySelector(".slider-list-active");
    console.log("slider-active",slideractive);
    slideractive.classList.remove("slider-list-active");
    console.log("slider-active",slideractive);
  }
//-----------slider-background-changer-----------------


for (let i = 0; i < bimages.length; i++) {
  console.log("background");
  let nav=document.createElement('span');
  nav.classList.add("slider-radio");
  if(i===0) {
    nav.classList.add("active");
  }
  nav.addEventListener("click",function(){          //  removeback(i);
    changeBackground(i);
    navBackgroundRemove();
    nav.classList.add('active');
  });
  slidernav.appendChild(nav);
}
function changeBackground(n){
  let slider=document.querySelector(".slider");
  slider.style.setProperty("background-image",bimages[n]);
}
function navBackgroundRemove(){
  let nav=document.querySelector(".active");
  console.log("nav:",nav);
  nav.classList.remove("active");
    }
//-----Testimonials----slider--------------
let slidernav1=document.querySelector('.slider-nav');
for (let i = 0; i < 2; i++) {
  let span=document.createElement('span');
  span.classList.add("testimonials-nav");
  if(i==0)
  {
    span.classList.add("active-orange");
  }
  span.addEventListener("click",function(){
    navBackground();
    span.classList.add("active-orange");
  });
  slidernav1.appendChild(span);
}
function navBackground(n){
  console.log("n:",n);
  let nav=document.querySelector(".active-orange");
  nav.classList.remove("active-orange");
}
