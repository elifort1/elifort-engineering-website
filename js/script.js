/**
 * ELIFORT ENGINEERING LIMITED - INTELLIGENCE ENGINE V3.0
 * Concept: Technical Precision, Structural Integrity, & Advanced System Logic
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

  // 2. KAMPALA PRECISION CLOCK
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

  // 3. TECHNICAL RADAR PING (Global Click Interaction)
  // Replaces childish bursts with a professional 'sonar' pulse
  document.addEventListener("click", (e) => {
    const ping = document.createElement("div");
    ping.className = "radar-ping";
    ping.style.left = `${e.clientX}px`;
    ping.style.top = `${e.clientY}px`;
    document.body.appendChild(ping);
    setTimeout(() => ping.remove(), 800);
  });

  // 4. DATA DECRYPTION EFFECT (Hero Title)
  class TechnicalScramble {
    constructor(el) {
      this.el = el;
      this.chars = "01ABCDEF-/_+X#";
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 30);
        const end = start + Math.floor(Math.random() * 50);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.1) {
            char = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.queue[i].char = char;
          }
          output += `<span class="tech-char">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  }

  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const fx = new TechnicalScramble(heroTitle);
    fx.setText(heroTitle.innerText);
  }

  // 5. INERTIAL MAGNETIC INTERACTION (Subtle & Heavy Feel)
  const magneticElements = document.querySelectorAll(
    ".btn, .logo, .social-links a"
  );
  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.25; // Lower multiplier for 'heavier' feel
      const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = "transform 0.1s linear";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0px, 0px)";
      el.style.transition = "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
    });
  });

  // 6. STRUCTURAL LATTICE PARTICLES (Neural Network Hero)
  if (
    document.getElementById("tsparticles") &&
    typeof tsParticles !== "undefined"
  ) {
    tsParticles.load("tsparticles", {
      fpsLimit: 60,
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.15, // Ultra-subtle
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

  // 7. INTERSECTION OBSERVER (Advanced Content 'Scanning')
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const scanObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("system-ready");
        scanObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll("section, .project-card, .service-item")
    .forEach((el) => {
      scanObserver.observe(el);
    });
});
