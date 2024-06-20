$(function () {
    console.log("jquery V3.7.1 Ready");
    AOS.init();
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        
    });
})