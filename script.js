


document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('navbarNav');
    const content = document.querySelector('.content');
  
   // When clicking on header → add blur
  header.addEventListener('click', function(event) {
    content.classList.add('blur');
    event.stopPropagation(); // Stop click event from reaching body
  });

  // When clicking anywhere else (body) → remove blur
  document.body.addEventListener('click', function() {
    content.classList.remove('blur');
  });
});