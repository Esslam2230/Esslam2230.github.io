// Initialiseer EmailJS met je gebruikers-ID
emailjs.init("your_user_id"); // Vervang dit met je eigen EmailJS gebruikers-ID

// Zorg ervoor dat het formulier wordt verzonden via EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Voorkomt standaard formulierverzending

    // Verstuur het formulier naar EmailJS
    emailjs.sendForm('your_service_id', 'your_template_id', this)  // 'this' verwijst naar het formulier zelf
        .then(
            function() { alert('Bericht succesvol verzonden!'); },  // Succesvolle verzending
            function() { alert('Het verzenden van het bericht is mislukt, probeer het opnieuw.'); }  // Fout bij verzending
        );
});
