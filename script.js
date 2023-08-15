window.addEventListener('scroll', function() {
    var navbarItems = document.querySelectorAll('.navbar-nav .nav-link');
    var sections = document.querySelectorAll('section');
  
    sections.forEach(function(section, index) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
  
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        navbarItems.forEach(function(navItem) {
          navItem.classList.remove('active');
        });
        navbarItems[index].classList.add('active');
      }
    });
  });


  // script.js




  document.addEventListener("DOMContentLoaded", () => {
    const skillsHeading = document.getElementById("skills");

    window.addEventListener("scroll", () => {
        const bounding = skillsHeading.getBoundingClientRect();
        const offset = 10;
        const isIntersecting = bounding.top - offset < window.innerHeight && bounding.bottom > 0;

        if (isIntersecting) {
            skillsHeading.classList.add("active");
        } else {
            skillsHeading.classList.remove("active");
        }
    });
});



// script.js

// after this it is causing a stuck



//   function chngcolor() {
//   var myDiv = document.getElementById("myDiv");
//   myDiv.style.backgroundColor = "rgba(190, 35, 35, 0.575)"; // Change the background color to red

// };