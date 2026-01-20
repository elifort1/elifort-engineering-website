/**
 * ELIFORT ENGINEERING LIMITED - INTELLIGENCE ENGINE V3.1
 * Concept: Clinical Precision, Structural Integrity, & Performance Analytics
 * Changes: Removed Scramble, Added Reading Bar Logic, Added Mobile Menu
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // 1. PERFORMANCE MONITOR (System Health Indicator)
  const startTime = performance.now();
  window.addEventListener("load", () => {
    const loadTime = ((performance.now() - startTime) / 1000).toFixed(2);
    console.log(
      `%c EliFort System Status: Operational | Load Time: ${loadTime}s`,
      "color: #b85b40; font-weight: bold;"
    );
  });

  // 2. SCROLL PROGRESS LOGIC (Activates the Reading Bar)
  window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    // This updates the CSS variable --scroll-width used in your style.css
    document.documentElement.style.setProperty('--scroll-width', scrolled + '%');
  });

  // 3. KAMPALA PRECISION CLOCK
  const updateClock = () => {
    const clockElements = document.querySelectorAll(".status-clock");
    if (clockElements.length > 0) {
      const ugandaTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Kampala",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      clockElements.forEach((el) => (el.textContent = `${ugandaTime} EAT`));
    }
  };
  setInterval(updateClock, 1000);
  updateClock();

  // 4. MOBILE MENU TOGGLE (Essential for Phone Visibility)
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("toggle");
      
      // Prevent scrolling when menu is open
      if(navLinks.classList.contains("active")) {
          document.body.style.overflow = "hidden";
      } else {
          document.body.style.overflow = "initial";
      }
    });
  }

  // 5. TECHNICAL RADAR PING (Global Click Interaction)
  document.addEventListener("click", (e) => {
    const ping = document.createElement("div");
    ping.className = "radar-ping";
    ping.style.left = `${e.clientX}px`;
    ping.style.top = `${e.clientY}px`;
    document.body.appendChild(ping);
    setTimeout(() => ping.remove(), 800);
  });

  // 6. INERTIAL MAGNETIC INTERACTION (Subtle & Heavy Feel)
  const magneticElements = document.querySelectorAll(".btn, .logo, .social-links a");
  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = "transform 0.1s linear";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0px, 0px)";
      el.style.transition = "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
    });
  });

  // 7. PROJECT FILTERING LOGIC
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        projectCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          if (filterValue === "all" || filterValue === cardCategory) {
            card.style.display = "flex";
            setTimeout(() => { card.style.opacity = "1"; }, 10);
          } else {
            card.style.opacity = "0";
            setTimeout(() => { card.style.display = "none"; }, 300);
          }
        });
      });
    });
  }

  // 8. STRUCTURAL LATTICE PARTICLES (Neural Network Hero)
  if (document.getElementById("tsparticles") && typeof tsParticles !== "undefined") {
    tsParticles.load("tsparticles", {
      fpsLimit: 60,
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: { enable: true, speed: 0.8, direction: "none", outModes: "out" },
        number: { value: 50, density: { enable: true, area: 800 } },
        opacity: { value: 0.2 },
        shape: { type: "circle" },
        size: { value: 1 },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 200, links: { opacity: 0.5 } } },
      },
      detectRetina: true,
    });
  }
});
