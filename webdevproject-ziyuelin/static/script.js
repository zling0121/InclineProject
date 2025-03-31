
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
    const inclineLocation = { lat: 40.4399, lng: -80.0176 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      center: inclineLocation,
      zoom: 16
    });
    
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
