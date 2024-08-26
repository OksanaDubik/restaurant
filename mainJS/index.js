//слайдер
if(document.documentElement.clientWidth <= 425){
    new Swiper(".mySwiper", {

        slidesPerView: 1,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",

        },

    });
}

else if(document.documentElement.clientWidth <= 675){
     new Swiper(".mySwiper", {

        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",

        },

    });
}
else {
    new Swiper(".mySwiper", {

        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",

        },

    });
}


//срелка вверх
let upArrow = document.querySelector(".up__arrow")
window.addEventListener('scroll', function(e) {
  if(window.scrollY >= 800){
      upArrow.style.display = "block";
  }
  else {
      upArrow.style.display = "none";
  }
});


//анимация картинок попадающих в область видимости.
let images = document.querySelectorAll(".descriptionDishes__image")
console.log(images)
const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
       entry.target.classList.toggle("show", entry.isIntersecting)
if(entry.isIntersecting){
    observer.unobserve(entry.target)
}
   })
}, {
    threshold: 0.1,
    rootMargin: "50px"
});
images.forEach(image =>{
    observer.observe(image)


})



