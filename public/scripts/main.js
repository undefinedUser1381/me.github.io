const openBtn = document.querySelector("#open-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const mobileMenu = document.querySelector("#mobile-menu");

// open and close mobile menu
openBtn.addEventListener("click",() => {
     mobileMenu.classList.add("right-0");
     mobileMenu.classList.remove("right-[-20rem]");
});

cancelBtn.addEventListener("click",() => {
    mobileMenu.classList.remove("right-0");
    mobileMenu.classList.add("right-[-20rem]");
});

// Typewriter
const titleELem = document.querySelector("#title");

let h5ElemTypeWritter = new Typewriter(titleELem,{
    loop : true
});


// Swiper
const swiper = new Swiper(".swiper",{
    direction : "horizontal",
    loop : true,
    centeredSlides:true,
    slidesPerView : 1,
    spaceBetween:100,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        bulletClass : "swiper-pagination-bullet swiper-pagination-bullet-active"
      },
});

h5ElemTypeWritter.typeString('سلام من عرفان قزی هستم')
    .pauseFor(2500)
    .deleteAll()
    .typeString('فرانت اند دولوپر هستم')
    .pauseFor(2500)
    .deleteChars(27)
    .typeString('خدمات سایتت رو بسپار به من!!')
    .pauseFor(2500)
    .start();