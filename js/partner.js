$(document).ready(function($) {
    $('body').classList.add('preloader-site');
});

setTimeout(remove, 6000);

function remove(){
    $('.preloader-wrapper').fadeOut();
    $('body').classList.remove('preloader-site');
}

document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('hide-show');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })

document.getElementById('submit')
    .addEventListener('click', (e) => {
        e.preventDefault();
        let name = document.getElementById('userName').value;
        let companyName = document.getElementById('companyName').value;
        let location = document.getElementById('userLocation').value;
        let email = document.getElementById('userEmail').value;
        let number = document.getElementById('userNumber').value;
        
        const userForm = {name, companyName, location, email, number}
        localStorage.setItem('partner', JSON.stringify(userForm));
        name = companyName = location = email = number = ''
        alert('Registration Successful, we will get back to you')
    })


document.getElementById('message')
    .addEventListener('click', (e) => {
        e.preventDefault();
        let contactName = document.getElementById('contactName').value;
        let contactEmail = document.getElementById('contactEmail').value;
        let contactMessage = document.getElementById('contactMessage').value;

        const contactForm = {contactName, contactEmail, contactMessage}
        localStorage.setItem('contact', JSON.stringify(contactForm));
        alert(`Hi ${contactName}, thank you for conatacting ComfyRide`)
    })