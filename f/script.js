const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  allowTouchMove: false,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 10000,
});

// increase the number in the about section

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".span-number");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const isPercent = counter.textContent.includes("%"); // Check if it should have %

    let count = 0;
    const speed = 10; // smaller = faster

    const updateCount = () => {
      if (count < target) {
        count++;
        counter.textContent = isPercent ? `${count}%` : count;
        setTimeout(updateCount, speed);
      } else {
        counter.textContent = isPercent ? `${target}%` : target; // Ensure exact final number
      }
    };

    updateCount();
  });
});

// image change in the service section

const icons = document.querySelectorAll(".service-text");
const serviceImg = document.querySelector(".service-img");

const images = [
  "img/hero-section1.jpg",
  "img/about-img-1.jpg",
  "img/about-img-2.jpg",
  "img/about-img-3.jpg",
  "img/about-img-6.jpg",
];

icons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    const paragraph = icon.querySelector(".p-service");
    const isOpen = paragraph.classList.contains("show");

    // Close all paragraphs
    document.querySelectorAll(".p-service").forEach((p) => {
      p.classList.remove("show");
    });

    if (!isOpen) {
      paragraph.classList.add("show");

      // Smooth image change only when opening
      serviceImg.classList.add("fade-out");
      setTimeout(() => {
        serviceImg.src = images[index]; // change image
        serviceImg.classList.remove("fade-out");
      }, 300);
    }
  });
});

//// rotate the icon in the service section
document.querySelectorAll(".heading-ser").forEach((header) => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("show");
  });
});

/// scroling fade in the our work section
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".our-work");
  let currentIndex = 0;

  // Initially show only the first one
  sections.forEach((sec, i) => {
    if (i === 0) sec.classList.add("active");
    else sec.classList.remove("active");
  });

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((sec, i) => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        // Show this one, hide others
        sections.forEach((s) => s.classList.remove("active"));
        sec.classList.add("active");
      }
    });
  });
});

////////
const swiper1 = new Swiper(".swiper-row1", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  speed: 10000,
  allowTouchMove: false,
});

const swiper2 = new Swiper(".swiper-row2", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  speed: 10000,
  allowTouchMove: false,
});

const swiper3 = new Swiper(".swiper-mobile", {
  slidesPerView: 1,

  allowTouchMove: true,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: false,
  disableOnInteraction: false,
  loop: false,
});

////////////////////
const header = document.querySelector(".hero-header");
const btn = document.querySelector(".menu-btn-mobile");

btn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

////////////////////
