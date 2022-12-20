let siteNav = document.querySelector(".site-nav");
let navToggle = document.querySelector(".site-nav__toggle");

siteNav.classList.remove("site-nav--nojs");

navToggle.addEventsListener("click", function () {
  if (siteNav.classList.contains("main-nav--closed")) {
    siteNav.classList.remove("site-nav--closed");
    siteNav.classList.add("site-nav--opened");
  } else {
    siteNav.classList.add("site-nav--closed");
    siteNav.classList.remove("site-nav--opened");
  }
});
