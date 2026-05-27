let slideIndex = 1;
showSlides(slideIndex);

// Auto slide
setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 4000);

// Next/Previous buttons
function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Dot controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

// Main function
function showSlides(n) {
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}