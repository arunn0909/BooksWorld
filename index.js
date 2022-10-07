/* Slider part Js Starts (as it is , i have just shifted it here in index,js file ) */
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
/* Slider Part Js ends */

const body = document.querySelector("body");
const genre = document.querySelector("#genre");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

const selectedTheme = document.cookie;

if (selectedTheme == "light")
    document.body.style.background = "white";
else 
    document.body.style.background = "black";

toggle.addEventListener("change", () => {
    
    body.classList.toggle("dark");
    genre.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

    if (document.cookie == "dark")
    {
        document.cookie =  "light";
        document.body.style.background = "white";
    }
    else
    {
        document.cookie =   "dark";
        document.body.style.background = "black";
    }
    
});
