//place a book (Individual)
document.getElementById('person')
    .addEventListener('keyup', () => {
        let pickUp = document.getElementById('pick-up').value
        let destination = document.getElementById('destination').value
        let unitAmount = document.getElementById('unit-amount')
        let totalAmount = document.getElementById('amount');
        let person = document.getElementById('person').value;
        let day = document.getElementById('day').value.toString();
        let time = document.getElementById('time').value;
        let vendor = document.getElementById('vendor').value;
        let unitAmountValue, totalAmountValue;

        if((pickUp == 'Abeokuta' && destination == 'Shagamu') || (destination == 'Abeokuta' &&  pickUp == 'Shagamu')){
            unitAmountValue = 800;
            totalAmountValue = unitAmountValue * person;
            unitAmount.value = unitAmountValue;
            totalAmount.value = totalAmountValue;
        }
        if((pickUp == 'Abeokuta' && destination == 'Ota') || (destination == 'Abeokuta' &&  pickUp == 'Ota')){
            unitAmountValue = 700;
            totalAmountValue = unitAmountValue * person;
            unitAmount.value = unitAmountValue;
            totalAmount.value = totalAmountValue;
        }
        if((pickUp == 'Ota' && destination == 'Shagamu') || (destination == 'Ota' &&  pickUp == 'Shagamu')){
            unitAmountValue = 600;
            totalAmountValue = unitAmountValue * person;
            unitAmount.value = unitAmountValue;
            totalAmount.value = totalAmountValue;
        }
        const bookingDetails = {pickUp, destination, unitAmountValue, totalAmountValue, person, day, time, vendor, type: 'individual'};
        localStorage.setItem('Booking-Details', JSON.stringify(bookingDetails));
    })

//place a book (Charter)
document.getElementById('charter-vendor')
    .addEventListener('click', () => {
        let charterPickUp = document.getElementById('charter-pick-up').value
        let charterDestination = document.getElementById('charter-destination').value
        let charterTotalAmount = document.getElementById('charter-amount');
        let charterVehicle = document.getElementById('charter-vehicle').value;
        let charterDay = document.getElementById('charter-day').value.toString();
        let charterTime = document.getElementById('charter-time').value;
        let charterVendor = document.getElementById('charter-vendor').value;
        let charterTotalAmountValue
        if(charterVehicle == 'Coaster'){
            charterTotalAmountValue = 150000
            charterTotalAmount.value = charterTotalAmountValue;
            
        }
        if(charterVehicle == 'Sienna'){
            charterTotalAmountValue = 100000
            charterTotalAmount.value = charterTotalAmountValue;
        }
        if(charterVehicle == 'Camry'){
            charterTotalAmountValue = 70000
            charterTotalAmount.value = charterTotalAmountValue;
        }
        if(charterVehicle == 'Hummer'){
            charterTotalAmountValue = 120000
            charterTotalAmount.value = charterTotalAmountValue;
        }
        
        const bookingDetails = {charterPickUp, charterDestination, charterTotalAmountValue, charterVehicle,charterVendor, charterDay, charterTime, type: 'charter'};
        localStorage.setItem('Booking-Details', JSON.stringify(bookingDetails));
    })
document.getElementById('individual-toggle')
    .addEventListener('click', () => {
        document.getElementById('individual-book').classList.remove('d-none')
        document.getElementById('charter-book').classList.add('d-none')
        document.getElementById('individual-toggle').classList.add('toggle-active')
        document.getElementById('charter-toggle').classList.remove('toggle-active')
    })
document.getElementById('charter-toggle')
    .addEventListener('click', () => {
        document.getElementById('charter-book').classList.remove('d-none')
        document.getElementById('individual-book').classList.add('d-none')
        document.getElementById('charter-toggle').classList.add('toggle-active')
        document.getElementById('individual-toggle').classList.remove('toggle-active')
    })

$(document).ready(function($) {
    $('body').classList.add('preloader-site');
});
setTimeout(remove, 6000)
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

let i = 0;
const bgImgArr = [
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(../img/bg-1.jpg)',
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(../img/bg-2.jpg)',
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(../img/bg-3.jpg)',
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(../img/bg-4.jpg)'
];
function changeBgImg(){
    let container = document.getElementById('header');
    container.style.background = bgImgArr[i];
    container.style.backgroundSize = 'cover';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundAttachment = 'fixed';
    if(i < bgImgArr.length - 1){
        i++;
    } else {
        i = 0
    }
}
setInterval(changeBgImg, 3000);

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