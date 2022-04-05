let paidBooking = JSON.parse(localStorage.getItem('Paid-Booking'))?JSON.parse(localStorage.getItem('Paid-Booking')):[];
let lastPaidBooking = paidBooking[paidBooking.length-1]

let vendorLogin = JSON.parse(localStorage.getItem('Vendor-Login'))?JSON.parse(localStorage.getItem('Vendor-Login')):"";
let vendorName = vendorLogin?.userName

let individualBookings = document.getElementById("individual-bookings");
let charterBookings = document.getElementById("charter-bookings");
for(let i = paidBooking.length - 1; i>=0; i--){
    if((paidBooking[i]?.vendor == vendorName) || (paidBooking[i]?.charterVendor == vendorName)){
        if(paidBooking[i]?.type == 'individual'){
            individualBookings.innerHTML += `
                <tr class="">
                    <td class="p-3" id="individual-day">${paidBooking[i]?.day}</td>
                    <td class="p-3" id="individual-time">${paidBooking[i]?.time}</td>
                    <td class="p-3" id="individual-pick-up">${paidBooking[i]?.pickUp}</td>
                    <td class="p-3" id="individual-destination">${paidBooking[i]?.destination}</td>
                    <td class="p-3" id="individual-person">${paidBooking[i]?.person}</td>
                    <td class="p-3" id="individual-amount">${paidBooking[i]?.totalAmount}</td>
                </tr>
            `
        } else {
            charterBookings.innerHTML += `
                <tr class="">
                    <td class="p-3" id="charter-day">${paidBooking[i]?.charterDay}</td>
                    <td class="p-3" id="charter-time">${paidBooking[i]?.charterTime}</td>
                    <td class="p-3" id="charter-pick-up">${paidBooking[i]?.charterPickUp}</td>
                    <td class="p-3" id="charter-destination">${paidBooking[i]?.charterDestination}</td>
                    <td class="p-3" id="charter-vehicle">${paidBooking[i]?.charterVehicle}</td>
                    <td class="p-3" id="charter-amount">${paidBooking[i]?.charterAmount}</td>
                </tr>
            `
        }
    }
}


document.getElementById('individual')
    .addEventListener('click', () => {
        document.getElementById('individual-bookings').classList.remove('d-none')
        document.getElementById('charter-bookings').classList.add('d-none')
        document.getElementById('individual').classList.remove('btn-not-active')
        document.getElementById('charter').classList.add('btn-not-active')
    })

document.getElementById('charter')
    .addEventListener('click', () => {
        document.getElementById('individual-bookings').classList.add('d-none')
        document.getElementById('charter-bookings').classList.remove('d-none')
        document.getElementById('individual').classList.add('btn-not-active')
        document.getElementById('charter').classList.remove('btn-not-active')
    })

document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('neg-left-200px');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })

document.getElementById('vendor-name').innerHTML = vendorLogin?.userName;