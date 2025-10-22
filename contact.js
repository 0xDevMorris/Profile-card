document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const errors = {
    name: document.getElementById("test-contact-error-name"),
    email: document.getElementById("test-contact-error-email"),
    subject: document.getElementById("test-contact-error-subject"),
    message: document.getElementById("test-contact-error-message"),
  };

  Object.values(errors).forEach((el) => (el.textContent = ""));

  let valid = true;

  if (!name) {
    errors.name.textContent = "Full name is required.";
    valid = false;
  }

  if (!email) {
    errors.email.textContent = "Email is required.";
    valid = false;
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    errors.email.textContent = "Enter a valid email (name@example.com).";
    valid = false;
  }

  if (!subject) {
    errors.subject.textContent = "Subject is required.";
    valid = false;
  }

  if (!message) {
    errors.message.textContent = "Message is required.";
    valid = false;
  } else if (message.length < 10) {
    errors.message.textContent =
      "Message must be at least 10 characters, you have entered " +
      message.length +
      " characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("test-contact-success").style.display = "block";
    document.getElementById("test-contact-success").textContent =
      "✅ Thank you! Your message has been sent.";
    document.getElementById("contactForm").reset();
  }
});
