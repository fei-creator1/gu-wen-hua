"use strict";

// Open & Close Mobile Navigation

const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const mobileNav = document.querySelector(".mobile-nav");

openNav.addEventListener("click", function(){
	mobileNav.classList.add("active");
})

closeNav.addEventListener("click", function(){
	mobileNav.classList.remove("active");
})
