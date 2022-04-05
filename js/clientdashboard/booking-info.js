//Booking Information Page(Individual)
let paidBooking = JSON.parse(localStorage.getItem('Paid-Booking'))?JSON.parse(localStorage.getItem('Paid-Booking')):[];
let lastPaidBooking = paidBooking[paidBooking.length-1]


if(lastPaidBooking?.type == 'individual'){
    document.getElementById('info-pick-up').innerHTML = lastPaidBooking?.pickUp || ''
    document.getElementById('info-destination').innerHTML = lastPaidBooking?.destination || '<span style="color:#ff0000">No Recent Booking</span>'
    document.getElementById('info-total-amount').innerHTML = lastPaidBooking?.totalAmount || ''
    document.getElementById('info-person').innerHTML = lastPaidBooking?.person || ''
    document.getElementById('info-day').innerHTML = lastPaidBooking?.day || ''
    document.getElementById('info-time').innerHTML = lastPaidBooking?.time || '';
    document.getElementById('info-booking-type').innerHTML = lastPaidBooking?.type || '';
    document.getElementById('info-pass-id').innerHTML = lastPaidBooking?.id || '';
    document.getElementById('info-days-left').innerHTML = lastPaidBooking?.day || '';
} else {
    document.getElementById('charter-info-pick-up').innerHTML = lastPaidBooking?.charterPickUp || ''
    document.getElementById('charter-info-time').innerHTML = lastPaidBooking?.charterTime || ''
    document.getElementById('charter-info-destination').innerHTML = lastPaidBooking?.charterDestination || ''
    document.getElementById('charter-info-total-amount').innerHTML = lastPaidBooking?.charterAmount || ''
    document.getElementById('charter-info-day').innerHTML = lastPaidBooking?.charterDay || ''
    document.getElementById('charter-info-vehicle').innerHTML = lastPaidBooking?.charterVehicle || '<span style="color:#ff0000">No Recent Booking</span>'
    document.getElementById('charter-info-vendor').innerHTML = lastPaidBooking?.charterVendor || '';
    document.getElementById('charter-info-booking-type').innerHTML = lastPaidBooking?.type || '';
    document.getElementById('charter-info-pass-id').innerHTML = lastPaidBooking?.charterId || '';
    document.getElementById('charter-info-days-left').innerHTML = lastPaidBooking?.charterDay || '';
}

document.getElementById('individual-book-info-toggle')
    .addEventListener('click', () => {
        document.getElementById('individual-book-info').classList.remove('d-none')
        document.getElementById('charter-book-info').classList.add('d-none')
        document.getElementById('individual-book-info-toggle').classList.remove('btn-not-active')
        document.getElementById('charter-book-info-toggle').classList.add('btn-not-active')
    })
document.getElementById('charter-book-info-toggle')
    .addEventListener('click', () => {
        document.getElementById('charter-book-info').classList.remove('d-none')
        document.getElementById('individual-book-info').classList.add('d-none')
        document.getElementById('individual-book-info-toggle').classList.add('btn-not-active')
        document.getElementById('charter-book-info-toggle').classList.remove('btn-not-active')
    })


document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('neg-left-200px');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })

let loginDetails = JSON.parse(localStorage.getItem('Login-Details'))?JSON.parse(localStorage.getItem('Login-Details')):"";
document.getElementById('name').innerHTML = loginDetails?.personName;