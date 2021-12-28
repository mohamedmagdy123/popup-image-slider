// variables declaration
let imgList = Array.from(document.getElementsByClassName("img-item"));
let popupContainer = document.querySelector(".popup-container");
let popupItem = document.querySelector(".popup-item");
let closeBTN = document.getElementById("CLOSE");
let prevBTN = document.getElementById("PREV");
let nextBTN = document.getElementById("NEXT");
let currrentIndex = 0;

// TO SHOW THE POPUP CLOSE UP IMAGE WHEN CLICK ON AN IMAGE
for (let index = 0; index < imgList.length; index++) {
  imgList[index].addEventListener("click", function (e) {
    currrentIndex = imgList.indexOf(e.target);
    popupContainer.classList.replace("d-none", "d-flex");
    let imgSrc = e.target.getAttribute("src");
    popupItem.style.backgroundImage = `url(${imgSrc})`;
  });
}

// FUNCTIONS DECLARATION
function slide(i) {
  currrentIndex += i;
  if (currrentIndex == imgList.length - 1) {
    currrentIndex = 0;
  }
  if (currrentIndex == -1) {
    currrentIndex = imgList.length - 1;
  }
  let nextImg = imgList[currrentIndex].getAttribute("src");
  popupItem.style.backgroundImage = `url(${nextImg})`;
}
// function nextSlide() {
//   currrentIndex++;
//   if (currrentIndex == imgList.length - 1) {
//     currrentIndex = 0;
//   }
//   let nextImg = imgList[currrentIndex].getAttribute("src");
//   popupItem.style.backgroundImage = `url(${nextImg})`;
// }

// function prevSlide() {
//   currrentIndex--;
//   if (currrentIndex == -1) {
//     currrentIndex = imgList.length - 1;
//   }
//   let prevImg = imgList[currrentIndex].getAttribute("src");
//   popupItem.style.backgroundImage = `url(${prevImg})`;
// }

function close() {
  popupContainer.classList.replace("d-flex", "d-none");
}

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    slide(1);
  } else if (e.key == "ArrowLeft") {
    slide(-1);
  } else if (e.key == "Escape") {
    close();
  }
});

// FUNCTIONS CALLING
prevBTN.addEventListener("click", function () {
  slide(-1);
  // prevSlide();
});
nextBTN.addEventListener("click", function () {
  // nextSlide();
  slide(1);
});
closeBTN.addEventListener("click", function () {
  close();
});
