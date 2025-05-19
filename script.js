// Scroll to contact section
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    document.getElementById('formMessage').textContent = "Thank you! Your message has been sent.";
    this.reset();
  } else {
    document.getElementById('formMessage').textContent = "Please fill out all fields.";
  }
});
