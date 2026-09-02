
//toggle mobile menu//
document.addEventListener('DOMContentLoaded', function() {
    
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
  toggleButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });


    
});

//change navbar background on Scroll//
window.addEventListener('scroll', function() {

  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }

});
