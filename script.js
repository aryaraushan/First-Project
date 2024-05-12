var main = document.querySelector("#main")
var crsr = document.querySelector("#cursor")

main.addEventListener("mousemove", function(dets){


   crsr.style.left = dets.x+"px"
   crsr.style.top = dets.y+"px"



})

var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });