"use strict";

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const sliderImg = document.querySelector(".slider-img");
let index = 0;
const images = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg"];

sliderImg.src = images[index];

function handlePrevBtn() {
  if (index > 0) {
    index = index - 1;
    sliderImg.src = images[index];
  } else {
    index = images.length - 1;
    sliderImg.src = images[index];
  }
}

function handleNextBtn() {
  if (index < images.length - 1) {
    index = index + 1;
    sliderImg.src = images[index];
  } else {
    index = 0;
    sliderImg.src = images[index];
  }
}

btnNext.addEventListener("click", handleNextBtn);

btnPrev.addEventListener("click", handlePrevBtn);

document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
    handleNextBtn();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowLeft") {
    handlePrevBtn();
  }
});
