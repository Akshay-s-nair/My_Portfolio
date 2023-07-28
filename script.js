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
  const words = document.getElementsByClassName('word');
  let currentWordIndex = 0;
  
  function animateWords() {
    words[currentWordIndex].classList.add('typing-animation');
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(animateWords, 2000);
  }
  
  animateWords();
  function toggleNavbar() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    navbarToggle.classList.toggle('open');
  }  


//   function chngcolor() {
//   var myDiv = document.getElementById("myDiv");
//   myDiv.style.backgroundColor = "rgba(190, 35, 35, 0.575)"; // Change the background color to red

// };