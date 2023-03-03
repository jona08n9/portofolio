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
    menuListenersMobile();
    menuClassesMobile();
    pageReziseEditsMobile();
    aboutArrowChangeMobile();
  } else {
    console.log("HomeAnimation: Window<500");
    menuListenersDesktop();
    menuClassesDesktop();
    pageReziseEditsDesktop();
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

function aboutArrowChangeMobile() {
  document.querySelectorAll(".span-arrow").forEach((arrow) => {
    arrow.innerHTML = `&#8595;`;
  });
  document.querySelectorAll(".span-br").forEach((br) => {
    br.classList.remove("hidden");
  });
}
function aboutArrowChangeDesktop() {
  document.querySelectorAll(".span-arrow").forEach((arrow) => {
    arrow.innerHTML = `&#8594;`;
  });
  document.querySelectorAll(".span-br").forEach((br) => {
    br.classList.add("hidden");
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
