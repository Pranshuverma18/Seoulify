// <!-- Banner and Testimonial carousel -->
  let sliderIndex = 1;
  showSlider(sliderIndex);

  // Next/previous controls
  function plusSlider(n) {
    showSlider(sliderIndex += n);
  }
    
  // Thumbnail image controls
  function currentSlider(n) {
    showSlider(sliderIndex = n);
  }

  function showSlider(n) {
    let i;
    let slide = document.getElementsByClassName("customer__content");
    let dot = document.getElementsByClassName("dot");
    if (n > slide.length) {sliderIndex = 1}
    if (n < 1) {sliderIndex = slide.length}
    for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" active", "");
    }
    slide[sliderIndex-1].style.display = "grid";
    dot[sliderIndex-1].className += " active";
    console.log(n);
  }

  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
    
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    console.log(n);
  }
// <!-- Banner and Testimonial carousel close -->