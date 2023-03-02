"use strict";

document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  addPageListeners();
}

// * * * * * EVENT LISTENERS

function addPageListeners() {
  document.querySelector("#menuIcon").addEventListener("click", openMobileMenu);
}

// * * * * * FUNCTIONS

function openMobileMenu() {
  document.querySelector("#menuIcon").removeEventListener("click", openMobileMenu);
  document.querySelector("#sidebar").classList.remove("hideSideBar");
  document.querySelector("#menuIcon").classList.remove("hideSideBar");
  document.querySelector("#menuIcon").classList.add("showSideBar");
  document.querySelector("#menuIcon").addEventListener("click", closeMobileMenu);
}

function closeMobileMenu() {
  document.querySelector("#menuIcon").removeEventListener("click", closeMobileMenu);
  document.querySelector("#menuIcon").classList.remove("showSideBar");
  document.querySelector("#menuIcon").classList.add("hideSideBar");
  document.querySelector("#sidebar").classList.add("hideSideBar");
  document.querySelector("#menuIcon").addEventListener("click", openMobileMenu);
}
