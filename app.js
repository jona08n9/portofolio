"use strict";

document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  addPageListeners();
}

// * * * * * EVENT LISTENERS

function addPageListeners() {
  window.addEventListener("resize", homeAnimation);
  let links = document.querySelectorAll(".navLink");
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
    console.log("Added LISTENERS to links. Kh Jonas");
  });
  homeAnimation();
}

// * * * * * FUNCTIONS

function homeAnimation() {
  if (window.innerWidth < 500) {
    console.log("HomeAnimation: Window<500");
    document.querySelector("#menuIcon").addEventListener("click", openMobileMenu);
    document.querySelector("#sidebar").removeEventListener("mouseover", openDesktopMenu);
    document.querySelector("#home").classList.add("mobile");
    document.querySelector(".h1HomeBr").classList.remove("hidden");
  } else {
    console.log("HomeAnimation: Window<500");
    document.querySelector("#sidebar").addEventListener("mouseover", openDesktopMenu);
    document.querySelector("#menuIcon").removeEventListener("click", openMobileMenu);
    document.querySelector("#home").classList.remove("mobile");
    document.querySelector(".h1HomeBr").classList.add("hidden");
  }
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
    setTimeout(homeAnimation, 1300);
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
