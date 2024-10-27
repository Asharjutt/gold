// JavaScript for toggling the mobile menu
document.querySelector('.hamburger').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
  });

  


//crousel img section

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-img');
const totalSlides = slides.length;

// Function to change slides
function moveSlide(step) {
  // Hide current slide
  slides[currentIndex].classList.remove('active');

  // Update index with step (handle wrapping)
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;

  // Show new slide
  slides[currentIndex].classList.add('active');
}


