// Mobile Nav

let navIcon = document.querySelector("#navIcon");
let mobileMenu = document.querySelector(".header-top__mobile-menu");
let navIconMiddle = document.querySelector(".nav-icon__middle");

navIcon.addEventListener("click", function () {
  this.classList.toggle("header-top__nav-icon--active");
  navIconMiddle.classList.toggle("nav-icon__middle--active");
  mobileMenu.classList.toggle("header-top__mobile-menu--active");

  mobileMenu.addEventListener("click", function (e) {
    navIcon.classList.remove("header-top__nav-icon--active");
    navIconMiddle.classList.remove("nav-icon__middle--active");
    mobileMenu.classList.remove("header-top__mobile-menu--active");

    mobileMenu
      .querySelector(".mobile-menu__wrapper")
      .addEventListener("click", function (e) {
        e.stopPropagation();
      });
  });

  const links = document.querySelectorAll(".mobile-menu__nav-links");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      navIcon.classList.remove("header-top__nav-icon--active");
      navIconMiddle.classList.remove("nav-icon__middle--active");
      mobileMenu.classList.remove("header-top__mobile-menu--active");
    });
  });
});