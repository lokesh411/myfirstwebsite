let sale = document.querySelector('#sale');
let rent = document.querySelector('#rent');
let commercial = document.querySelector('#commercial');
document.addEventListener("click",function(){
    let menu_panel=document.getElementById("menu-panel");
    menu_panel.classList.remove("show");
    let top_panel=document.getElementById("top-panel");
    top_panel.classList.remove("show");
});


sale.addEventListener("click", function () {
    let input = document.getElementsByTagName("input");
    removeColor();
    input[0].setAttribute("placeholder", "Search By City or Address:");
    sale.classList.add("active-white");
});
rent.addEventListener("click", function () {
    let input = document.getElementsByTagName("input");
    removeColor();
    input[0].setAttribute("placeholder", "Search By Address or City:");
    rent.classList.add("active-white");
});
commercial.addEventListener("click", function () {
    let input = document.getElementsByTagName("input");
    removeColor();
    input[0].setAttribute("placeholder", "Search By City or Address:");
    commercial.classList.add("active-white");
});
function removeColor() {
    let slideractive = document.querySelector(".active-white");
    console.log("slider-active", slideractive);
    slideractive.classList.remove("active-white");
    console.log("slider-active", slideractive);
}
//-------------------------fixed nav -----------------
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top")
  } else {
    navbar.classList.remove("fixed-top");
  }
}
//---------------------carousel---------------
let bimages=["images/image1.jpg","images/image2.jpg","images/image3.jpg"];
let slidernav = document.querySelector('.carousel-indicators');
let slider_img=document.querySelector("#slider-img");
var active_img;
for (let i = 0; i < bimages.length; i++) {
    console.log("background");
    let nav=document.createElement('li');
    nav.setAttribute("data-target","#carousel");
    if(i===0) {
      nav.classList.add("slider-active");
      active_img=0;
    }
    nav.addEventListener("click",function(){          //  removeback(i);
      changeBackground(i);
      navBackgroundRemove();
      nav.classList.add("slider-active");
    });
    slidernav.appendChild(nav);
}
function changeBackground(n){
    active_img=n;
    slider_img.setAttribute("src",bimages[n]);
}
function navBackgroundRemove(){
    let active_remove=document.querySelector('.slider-active');
    console.log("nav:",active_remove);
    active_remove.classList.remove("slider-active");
}
//---------prev and next---------
let prev=document.querySelector("#prev");
let next=document.querySelector("#next");
prev.addEventListener("click",function(){
    if(active_img==0)
        active_img+=bimages.length;
    active_img--;
    slider_img.setAttribute("src",bimages[active_img]);
    navBackgroundRemove();
    changeNavBg(active_img);
    stopProgress();
});
next.addEventListener("click",function(){
    active_img++;
    active_img%=bimages.length;
    slider_img.setAttribute("src",bimages[active_img]);
    navBackgroundRemove();
    changeNavBg(active_img);
    stopProgress();
});
function changeNavBg(n){
    let slider_nav=document.querySelectorAll(".carousel-indicators li");
    slider_nav[n].classList.add("slider-active");
}
//-------carousel-timing------
let play=document.querySelector("#play");
let stop=document.querySelector("#stop");
let timing_bar=document.querySelector(".interval");
let time1;
function stoptimer(){
    clearTimeout(time1);
}



function resetProgress() {
    stopProgress();
    setTimeout(function() {
        startProgress();
    }, 50);
}

function startSlider() {
    startProgress();
    time1=setInterval(sliderTimer, 5000);
}
function sliderTimer() {
    resetProgress();
    changeBG(++active_img);
}
function startProgress() {
    timing_bar.classList.add("interval-fill");
}
function stopProgress() {
    timing_bar.classList.remove("interval-fill");
}
function changeBG(index) {
    index%=bimages.length;
    slider_img.setAttribute("src", bimages[index]);
    navBackgroundRemove();
    changeNavBg(index);
}
// function stopBar(){
//     timing_bar.style.setProperty("visibility","hidden");
//     timing_bar.classList.remove("interval-fill");
// }
play.addEventListener("click",function(){
    timing_bar.style.setProperty("visibility","visible");
    startSlider();
});
stop.addEventListener("click",function(){
    stopProgress();
});


