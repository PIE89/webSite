let btnScroll = document.querySelector(".back-top");

btnScroll.style.opacity = 0;

document.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    btnScroll.style.opacity = 1;
  } else {
    btnScroll.style.opacity = 0;
  }
});
