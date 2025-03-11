// Get references to the hamburger icon and the nav links
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class when the hamburger icon is clicked
hamburgerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
let currentIndex = 0;

const cardsWrapper = document.querySelector('.project-cards-wrapper');
const cards = document.querySelectorAll('.project-card');
const totalCards = cards.length;

function moveCarousel(direction) {
  if (direction === 'right') {
    currentIndex = (currentIndex + 1) % totalCards;
  } else {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  }

  updateCardPosition();
}

// project 

function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');

  projects.forEach(project => {
      const categories = project.getAttribute('data-category').split(' '); // Split space-separated categories

      if (category === 'all' || categories.includes(category)) {
          project.style.display = 'block';
      } else {
          project.style.display = 'none';
      }
  });

  // Update button active state
  document.querySelectorAll('.filter-buttons button').forEach(button => {
      button.classList.remove('active');
  });

  document.querySelector(`.filter-buttons button[onclick="filterProjects('${category}')"]`)?.classList.add('active');
}

  
        // conatct section 
        document.getElementById("email-button").addEventListener("click", function(event) {
          event.preventDefault();
          
          // Ask for email client opening permission
          if (confirm("Do you want to open your email client to send an email?")) {
            // Redirect to open the email client
            window.location.href = "mailto:myemail@example.com";
          }
        });

        
        // home // Add this script to your page or in a separate JS file
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animated");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((el) => observer.observe(el));
});
