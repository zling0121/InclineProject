
document.addEventListener('DOMContentLoaded', function() {
    console.log('Duquesne Incline website loaded.');

    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.style.backgroundColor = "#222";
      } else {
        header.style.backgroundColor = "#333";
      }
    });
  });

  function initMap() {
    // Coordinates for the Duquesne Incline (adjust if necessary)
    const inclineLocation = { lat: 40.4399, lng: -80.0176 };
    
    // Create a map centered at the Duquesne Incline
    const map = new google.maps.Map(document.getElementById("map"), {
      center: inclineLocation,
      zoom: 16
    });
    
    // Place a marker at the Duquesne Incline
    new google.maps.Marker({
      position: inclineLocation,
      map: map,
      title: "Duquesne Incline"
    });
  }
  
  let slideIndex = 0;
    const slides = document.querySelectorAll('#shotGlassSlideshow .slide');
    
    function showNextSlide() {
      slides[slideIndex].classList.remove('active');
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add('active');
    }
    
    setInterval(showNextSlide, 3000);