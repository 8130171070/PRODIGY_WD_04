// Initialize scroll animations
AOS.init();

// Handle form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your message has been sent successfully!');
  this.reset();
});