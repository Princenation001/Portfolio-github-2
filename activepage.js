// MAKING NAV LINKS ACTIVE WHEN ON THE PAGE

const navLinkEls = document.querySelectorAll(".nav-link");
const windowPathname = window.location.pathname;

navLinkEls.forEach((Link) => {
  if (Link.href.includes(`${windowPathname}`)) {
    Link.classList.add("active");
  }
});

//////////////////////////////////////////////////////////
// Set current year
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// // yearEl.textContent = currentYear;

// //////////////////////////////////////////////////////////
// // Set mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll("nav-link:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // close mobile navigation
    if (link.classList.contains("nav-link"))
      headerEl.classList.remove("nav-open");
  });
});

///////////////////////////////////
//Sticky navigation

const sectionHeroEl = document.querySelector(".sticky-nav-point");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
