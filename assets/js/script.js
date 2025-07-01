// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const sidebar = document.getElementById("sidebar")
const mobileOverlay = document.getElementById("mobile-overlay")

function toggleMobileMenu() {
  sidebar.classList.toggle("-translate-x-full")
  mobileOverlay.classList.toggle("hidden")
}

function closeMobileMenu() {
  sidebar.classList.add("-translate-x-full")
  mobileOverlay.classList.add("hidden")
}

mobileMenuBtn.addEventListener("click", toggleMobileMenu)
mobileOverlay.addEventListener("click", closeMobileMenu)

// Navigation System
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active from all items
    document.querySelectorAll(".menu-item").forEach((i) => {
      i.classList.remove("active")
    })

    // Add active to clicked item
    this.classList.add("active")

    // Hide all sections
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.add("hidden")
    })

    // Show target section
    const section = this.getAttribute("data-section")
    const targetSection = document.getElementById(section + "-section")
    if (targetSection) {
      targetSection.classList.remove("hidden")
    }

    // Close mobile menu after selection
    if (window.innerWidth < 1024) {
      closeMobileMenu()
    }
  })
})

// Close mobile menu on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    sidebar.classList.remove("-translate-x-full")
    mobileOverlay.classList.add("hidden")
  } else {
    sidebar.classList.add("-translate-x-full")
  }
})

// Form submission handler
document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Mensagem enviada! (Demo)")
})
