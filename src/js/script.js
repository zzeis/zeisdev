// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const sidebar = document.getElementById("sidebar");
const mobileOverlay = document.getElementById("mobile-overlay");

// Função para alternar entre o conteúdo original e o resumo
// Atualize a função toggleCardContent
function toggleCardContent(e) {
  // Verifica se o clique veio de um elemento que não deve disparar o evento
  if (e.target.closest("a, button, .symbol-circle")) {
    return;
  }

  const tarotCard = document.querySelector(".tarot-card");
  const originalContent = document.querySelector(".original-content");
  const resumeContent = document.querySelector(".resume-content");

  // Alterna a rotação do cartão
  tarotCard.classList.toggle("tarot-card-rotated");

  // Alterna a visibilidade dos conteúdos
  if (tarotCard.classList.contains("tarot-card-rotated")) {
    originalContent.classList.add("hidden");
    resumeContent.classList.remove("hidden");
  } else {
    originalContent.classList.remove("hidden");
    resumeContent.classList.add("hidden");
  }
}

// Adiciona o evento de clique ao cartão
document
  .querySelector(".tarot-card")
  ?.addEventListener("click", toggleCardContent);

// Adiciona transição suave ao cartão
document.querySelector(".tarot-card").style.transition = "transform 0.6s ease";

function toggleMobileMenu() {
  sidebar.classList.toggle("-translate-x-full");
  mobileOverlay.classList.toggle("hidden");
}

function closeMobileMenu() {
  sidebar.classList.add("-translate-x-full");
  mobileOverlay.classList.add("hidden");
}

mobileMenuBtn.addEventListener("click", toggleMobileMenu);
mobileOverlay.addEventListener("click", closeMobileMenu);

// Navigation System
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active from all items
    document.querySelectorAll(".menu-item").forEach((i) => {
      i.classList.remove("active");
    });

    // Add active to clicked item
    this.classList.add("active");

    // Hide all sections
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.add("hidden");
    });

    // Show target section
    const section = this.getAttribute("data-section");
    const targetSection = document.getElementById(section + "-section");
    if (targetSection) {
      targetSection.classList.remove("hidden");
    }

    // Close mobile menu after selection
    if (window.innerWidth < 1024) {
      closeMobileMenu();
    }
  });
});

// Close mobile menu on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    sidebar.classList.remove("-translate-x-full");
    mobileOverlay.classList.add("hidden");
  } else {
    sidebar.classList.add("-translate-x-full");
  }
});

// Form submission handler
document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada! (Demo)");
});

// Card hover effects
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const cardBg = this.querySelector(".card-background");
    cardBg.style.transform =
      "perspective(1000px) rotateY(3deg) rotateX(-1deg) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    const cardBg = this.querySelector(".card-background");
    cardBg.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
  });
});

// Main card hover effect
document
  .querySelector(".tarot-card")
  ?.addEventListener("mouseenter", function () {
    const cardBg = this.querySelector(".card-background");
    cardBg.style.transform = "perspective(1000px) rotateY(3deg) rotateX(-1deg)";
  });

document
  .querySelector(".tarot-card")
  ?.addEventListener("mouseleave", function () {
    const cardBg = this.querySelector(".card-background");
    cardBg.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  });

// Modal functionality
const curriculoModal = document.getElementById("curriculo-modal");

function openModal() {
  curriculoModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Animate skill bars
  setTimeout(() => {
    document.querySelectorAll(".fill").forEach((fill) => {
      const width = fill.style.width;
      fill.style.width = "0%";
      setTimeout(() => {
        fill.style.width = width;
      }, 100);
    });
  }, 300);
}

// Close modal with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !curriculoModal.classList.contains("hidden")) {
    closeModal();
  }
});
