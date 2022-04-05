let paidBooking = JSON.parse(localStorage.getItem('Paid-Booking'))?JSON.parse(localStorage.getItem('Paid-Booking')):[];
let lastPaidBooking = paidBooking[paidBooking.length-1]

let vendorLogin = JSON.parse(localStorage.getItem('Vendor-Login'))?JSON.parse(localStorage.getItem('Vendor-Login')):"";

let vendorName = vendorLogin?.userName

let countTrips = 0
let addFare = 0
let countIndTrips = 0
let countCharTrips = 0
let bookArr = [];
for(let i = 0; i<paidBooking.length; i++){
    if((paidBooking[i]?.vendor == vendorName) || (paidBooking[i]?.charterVendor == vendorName)){
        countTrips++
        addFare += Number(paidBooking[i]?.totalAmount || paidBooking[i]?.charterAmount)
        if(paidBooking[i]?.type == 'individual'){
            countIndTrips++
        }
        if(paidBooking[i]?.type == 'charter'){
            countCharTrips++
        }
        bookArr.push(paidBooking[i]);

    }
}

document.getElementById('total-trips').innerHTML = countTrips
document.getElementById('total-fare').innerHTML = addFare
document.getElementById('individual-trips').innerHTML = countIndTrips
document.getElementById('charter-trips').innerHTML = countCharTrips
console.log(bookArr)
let lastBook = bookArr[bookArr.length - 1]

document.getElementById('individual-bookings').innerHTML = `
    <tr class="">
        <td class="p-3">Date</td>
        <td class="p-3">Time</td>
        <td class="p-3">From</td>
        <td class="p-3">To</td>
        <td class="p-3">No. of Persons</td>
        <td class="p-3">Amount(₦)</td>
    </tr>
    <tr class="white-bg">
        <td class="p-3" id="individual-day">${lastBook?.day}</td>
        <td class="p-3" id="individual-time">${lastBook?.time}</td>
        <td class="p-3" id="individual-pick-up">${lastBook?.pickUp}</td>
        <td class="p-3" id="individual-destination">${lastBook?.destination}</td>
        <td class="p-3" id="individual-person">${lastBook?.person}</td>
        <td class="p-3" id="individual-amount">${lastBook?.totalAmount}</td>
    </tr>
`
console.log(lastBook)
document.getElementById('charter-bookings').innerHTML = `
    <tr class="">
        <td class="p-3">Date</td>
        <td class="p-3">Time</td>
        <td class="p-3">From</td>
        <td class="p-3">To</td>
        <td class="p-3">Vehicle Model</td>
        <td class="p-3">Amount(₦)</td>
        
    </tr>
    <tr class="white-bg">
        <td class="p-3" id="charter-day">${lastBook?.charterDay}</td>
        <td class="p-3" id="charter-time">${lastBook?.charterTime}</td>
        <td class="p-3" id="charter-pick-up">${lastBook?.charterPickUp}</td>
        <td class="p-3" id="charter-destination">${lastBook?.charterDestination}</td>
        <td class="p-3" id="charter-vehicle">${lastBook?.charterVehicle}</td>
        <td class="p-3" id="charter-amount">${lastBook?.charterAmount}</td>
    </tr>
`

if(lastBook?.type == 'charter'){
    document.getElementById('individual-bookings').classList.add('d-none')
    document.getElementById('charter-bookings').classList.remove('d-none')
} else {
    document.getElementById('individual-bookings').classList.remove('d-none')
    document.getElementById('charter-bookings').classList.add('d-none')
}

document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('neg-left-200px');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })
    
document.getElementById('vendor-name').innerHTML = vendorLogin?.userName;