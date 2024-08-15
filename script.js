// Projects 'See More'
$(document).ready(function() {
  var projectsToShow = 1; // Number of projects to show initially
  var totalProjects = $('#projects .card').length; // Total number of projects
  var isExpanded = false; // Track the state of the extra projects

  // Hide extra projects initially
  $('#projects .card:gt(' + (projectsToShow - 1) + ')').hide();

  // Toggle visibility of extra projects and update button text
  $('#toggle-projects').click(function() {
    if (isExpanded) {
      $('#extra-projects .card').slideUp();
      isExpanded = false;
      $('#toggle-projects-text').text('See More');
      $('#toggle-projects-icon').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    } else {
      $('#extra-projects .card').slideDown();
      isExpanded = true;
      $('#toggle-projects-text').text('See Less');
      $('#toggle-projects-icon').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }
  });

  // Hide "See More" button if all projects are initially visible
  if (projectsToShow >= totalProjects) {
    $('#see-more-projects').hide();
  }
});

// Experience 'See More'
$(document).ready(function() {
  var experiencesToShow = 4; // Number of experiences to show initially
  var totalExperiences = $('#experience .card').length; // Total number of experiences
  var isExpanded = false; // Track the state of the extra experiences

  // Hide extra experiences initially
  $('#experience .card:gt(' + (experiencesToShow - 1) + ')').hide();

  // Toggle visibility of extra experiences and update button text
  $('#toggle-experience').click(function() {
    if (isExpanded) {
      $('#extra-experience .card').slideUp();
      isExpanded = false;
      $('#toggle-experience-text').text('See More');
      $('#toggle-experience-icon').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    } else {
      $('#extra-experience .card').slideDown();
      isExpanded = true;
      $('#toggle-experience-text').text('See Less');
      $('#toggle-experience-icon').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }
  });

  // Hide "See More" button if all experiences are initially visible
  if (experiencesToShow >= totalExperiences) {
    $('#see-more-experience').hide();
  }
});

// Skills Tooltip
document.addEventListener("DOMContentLoaded", function() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

// Typing Effect
document.addEventListener("DOMContentLoaded", function() {
  const text = "Hi, I'm Kealan!";
  const typingSpeed = 100;
  const startDelay = 1500;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("intro-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      document.getElementById("typing-container").style.borderRight = "none";
    }
  }

  setTimeout(typeWriter, startDelay);
});
