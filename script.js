/* ======================== SHOW MENU ====================  */
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.custom_navbar');
let main = document.querySelector('.main');

menu.addEventListener('click', () => {
    navbar.classList.toggle('open');
    main.classList.toggle('toggle-btn');
});



document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled')
    }
})

// window.onload = function () {
//     slideOne();
//     slideTwo();
// };

// let sliderOne = document.getElementById("slider-1");
// let sliderTwo = document.getElementById("slider-2");
// let displayValOne = document.getElementById("range1");
// let displayValTwo = document.getElementById("range2");
// let minGap = 0;
// let sliderTrack = document.querySelector(".slider_track");
// let sliderMaxValue = document.getElementById("slider-1").max;

// function slideOne() {
//     if (parseInt(sliderOne.value) >= parseInt(sliderTwo.value)) {
//         sliderOne.value = parseInt(sliderTwo.value) - minGap;
//     }
//     displayValOne.textContent = sliderOne.value;
//     fillColor();
// }

// function slideTwo() {
//     if (parseInt(sliderTwo.value) <= parseInt(sliderOne.value)) {
//         sliderTwo.value = parseInt(sliderOne.value) + minGap;
//     }
//     displayValTwo.textContent = sliderTwo.value;
//     fillColor();
// }

// function fillColor() {
//     let percent1 = (sliderOne.value / sliderMaxValue) * 100;
//     let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
//     sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
// }



// var rng = document.querySelector(".form-control-range");

// read("mousedown");
// read("mousemove");
// read("keydown"); // include this to also allow keyboard control

// function read(evtType) {
//   rng.addEventListener(evtType, function() {
//     window.requestAnimationFrame(function () {
//       document.querySelector(".range_value").innerHTML = rng.value + ' сум';
//       rng.setAttribute("aria-valuenow", rng.value); // include for accessibility
//     });
//   });
// }
