let bimages=["url(../myfirstwebsite/images/image1.jpg)","url(../myfirstwebsite/images/image2.jpg)","url(../myfirstwebsite/images/image3.jpg)"];
let slidernav = document.querySelector('.slider-nav1');
console.log(`slidernav: ${slidernav}`);
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
  /*
window.onscroll=function(){
  myfunction()
};


function myfunction(){
  console.log("abc");
  let navbar=document.querySelector('.top-bottom');
  let sticky=navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    // navbar.classList.add("sticky");
  } else {
    // navbar.classList.remove("sticky");
  }
}
*/
// function changebackground(n){
//   let sl = ['images/image1.jpg', 'url(images/image2.jpg)']
//   console.log("slider");
//   let slider=document.querySelector('.slider');
//   let img="image"+n+".jpg";
//   console.log("image",img);
//   let sp1=document.querySelector('#sp1');
//   let sp2=document.querySelector('#sp2');
//   let sp3=document.querySelector('#sp3');
//   if(n==1){
//     slider.style.setProperty("background-image","url(images/image1.jpg)");
//     slider.style.setProperty("transition","0.5s width");
//     sp1.style.setProperty("background-color","#ffffff");
//     sp2.style.setProperty("background","transparent");
//     sp3.style.setProperty("background","transparent");
//   }
//   else if (n==2) {
//     slider.style.setProperty("background-image","url(images/image2.jpg)");
//     slider.style.setProperty("transition","0.5s width");
//     sp1.style.setProperty("background-color","transparent");
//     sp2.style.setProperty("background","#ffffff");
//     sp3.style.setProperty("background","transparent");
//   }
//   else {
//     slider.style.setProperty("background-image","url(images/image3.jpg)");
//     slider.style.setProperty("transition","0.5s width");
//     sp1.style.setProperty("background-color","transparent");
//     sp2.style.setProperty("background","transparent");
//     sp3.style.setProperty("background","#ffffff");
//   }
// }
//-----------slider-background-changer-----------------


for (let i = 0; i < bimages.length; i++) {
  console.log("background");
  let radio=document.createElement('span');
  radio.classList.add("slider-radio");
  if(slidernav==null) {
    console.log("NULL");
  }
  else{
    slidernav.appendChild(radio);
    radio.addEventListener("click",function(){
      radio.style.setProperty("background","#ffffff");
      changeBackground(i);
    });
  }
}
function changeBackground(n){
  let slider=document.querySelector(".slider");
  slider.style.setProperty("background-image",bimages[n]);
}
