// This code only shows an alert and resets the form; it does not send emails.
// To send emails, you need to use a backend service or an API like EmailJS.

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Example using EmailJS (you must include EmailJS SDK in your HTML)
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_USER_ID')
        .then(function(response) {
            document.getElementById('formAlert').classList.remove('d-none');
            setTimeout(() => {
                document.getElementById('formAlert').classList.add('d-none');
                document.getElementById('contactForm').reset();
            }, 2000);
        }, function(error) {
            alert('Failed to send email: ' + error.text);
        });
});