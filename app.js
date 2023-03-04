"use strict";

document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  addPageListeners();
}

// * * * * * EVENT LISTENERS

function addPageListeners() {
  window.addEventListener("resize", homeAnimation);

  document.querySelectorAll(".navLink").forEach((link) => {
    link.addEventListener("click", closeMenu);
    console.log("Added LISTENERS to links. Kh Jonas");
  });

  document.querySelectorAll(".selection__li").forEach((about) => {
    about.addEventListener("click", firstAboutChoose);
    console.log("aboutChosen");
  });
  homeAnimation();
}

// * * * * * FUNCTIONS

function homeAnimation() {
  if (window.innerWidth < 500) {
    console.log("HomeAnimation: Window<500");
    menuListenersMobile();
    menuClassesMobile();
    pageReziseEditsMobile();
    aboutChangeMobile();
  } else {
    console.log("HomeAnimation: Window<500");
    menuListenersDesktop();
    menuClassesDesktop();
    pageReziseEditsDesktop();
    aboutChangeDesktop();
  }
}

function menuListenersMobile() {
  document.querySelector("#menuIcon").addEventListener("click", openMobileMenu);
  document.querySelector("#sidebar").removeEventListener("mouseover", openDesktopMenu);
}

function menuListenersDesktop() {
  document.querySelector("#sidebar").addEventListener("mouseover", openDesktopMenu);
  document.querySelector("#menuIcon").removeEventListener("click", openMobileMenu);
}

function menuClassesMobile() {
  document.querySelector("#home").classList.add("mobile");
}

function menuClassesDesktop() {
  document.querySelector("#home").classList.remove("mobile");
}

function pageReziseEditsMobile() {
  document.querySelector(".h1HomeBr").classList.remove("hidden");
}

function pageReziseEditsDesktop() {
  document.querySelector(".h1HomeBr").classList.add("hidden");
}

function aboutChangeMobile() {
  document.querySelectorAll(".span-arrow").forEach((arrow) => {
    arrow.classList.add("hidden");
  });
}
function aboutChangeDesktop() {
  document.querySelectorAll(".span-arrow").forEach((arrow) => {
    arrow.classList.remove("hidden");
  });
}

function closeMenu() {
  if (window.innerWidth < 500) {
    console.log("Window<500");
    document.querySelector("#menuIcon").removeEventListener("click", closeMobileMenu);
    document.querySelector("#menuIcon").classList.remove("showSideBar");
    document.querySelector("#menuIcon").classList.add("hideSideBar");
    document.querySelector("#sidebar").classList.add("hideSideBar");
    document.querySelector("#menuIcon").addEventListener("click", openMobileMenu);
  } else {
    console.log("Window>500");
    document.querySelector("#sidebar").removeEventListener("mouseout", closeDesktopMenu);
    document.querySelector("#sidebar").removeEventListener("mouseover", openDesktopMenu);
    document.querySelector("#sidebar").classList.add("hideSideBar");
    document.querySelector("#sidebar").classList.add("hideSideBar");
    document.querySelector("#sidebar").addEventListener("mouseover", waitForClose);
  }

  function waitForClose() {
    document.querySelector("#sidebar").removeEventListener("mouseover", waitForClose);
    console.log("TimeOutBruh");
    setTimeout(homeAnimation, 1000);
  }
}

function openMobileMenu() {
  document.querySelector("#menuIcon").removeEventListener("click", openMobileMenu);
  document.querySelector("#sidebar").classList.remove("hideSideBar");
  document.querySelector("#menuIcon").classList.remove("hideSideBar");
  document.querySelector("#menuIcon").classList.add("showSideBar");
  document.querySelector("#menuIcon").addEventListener("click", closeMobileMenu);
}

function closeMobileMenu() {
  console.log("eyy");
  document.querySelector("#menuIcon").removeEventListener("click", closeMobileMenu);
  document.querySelector("#menuIcon").classList.remove("showSideBar");
  document.querySelector("#menuIcon").classList.add("hideSideBar");
  document.querySelector("#sidebar").classList.add("hideSideBar");
  document.querySelector("#menuIcon").addEventListener("click", openMobileMenu);
}

function openDesktopMenu() {
  document.querySelector("#sidebar").removeEventListener("mouseover", openDesktopMenu);
  document.querySelector("#sidebar").classList.remove("hideSideBar");
  document.querySelector("#sidebar").addEventListener("mouseout", closeDesktopMenu);
}

function closeDesktopMenu() {
  document.querySelector("#sidebar").removeEventListener("mouseout", closeDesktopMenu);
  document.querySelector("#sidebar").classList.add("hideSideBar");
  document.querySelector("#sidebar").addEventListener("mouseover", openDesktopMenu);
}

function firstAboutChoose() {
  document.querySelectorAll(".selection__li").forEach((about) => {
    about.removeEventListener("click", firstAboutChoose);
    about.addEventListener("click", AboutChosen);
    console.log("removedFirstChosen");
  });

  this.classList.add("about__chosen");
}

function AboutChosen() {
  if (this.classList.contains("about__chosen")) {
    console.log("Same btn bro, try another");
  } else {
    document.querySelector(".about__chosen").classList.remove("about__chosen");
    this.classList.add("about__chosen");
    console.log("Changed .about__chosen. No sweat bro");
  }
}

// function aboutChoose(e) {
//   let current = document.querySelector.classList.contains("about__chosen");
//   current.classList.remove("about__chosen");
//   e.classList.add("about__chosen");
// }
