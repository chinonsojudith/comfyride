let paidBooking = JSON.parse(localStorage.getItem('Paid-Booking'));
let lastPaidBooking = paidBooking[paidBooking.length-1]

document.getElementById('individual-pick-up').innerHTML = lastPaidBooking?.pickUp || ''
document.getElementById('individual-destination').innerHTML = lastPaidBooking?.destination || '<span style="color:#ff0000">No Recent Booking</span>'
document.getElementById('individual-amount').innerHTML = lastPaidBooking?.totalAmount || ''
document.getElementById('individual-person').innerHTML = lastPaidBooking?.person || ''
document.getElementById('individual-day').innerHTML = lastPaidBooking?.day || ''
document.getElementById('individual-vendor').innerHTML = lastPaidBooking?.vendor || ''
document.getElementById('individual-time').innerHTML = lastPaidBooking?.time || '';

document.getElementById('charter-pick-up').innerHTML = lastPaidBooking?.charterPickUp || ''
document.getElementById('charter-time').innerHTML = lastPaidBooking?.charterTime || ''
document.getElementById('charter-destination').innerHTML = lastPaidBooking?.charterDestination || ''
document.getElementById('charter-amount').innerHTML = lastPaidBooking?.charterAmount || ''
document.getElementById('charter-day').innerHTML = lastPaidBooking?.charterDay || ''
document.getElementById('charter-vendor').innerHTML = lastPaidBooking?.charterVendor || ''
document.getElementById('charter-vehicle').innerHTML = lastPaidBooking?.charterVehicle || '<span style="color:#ff0000">No Recent Booking</span>'

document.getElementById("earning-date").innerHTML = lastPaidBooking?.day || lastPaidBooking?.charterDay
document.getElementById("earning-time").innerHTML = lastPaidBooking?.time || lastPaidBooking?.charterTime
document.getElementById("earning-name").innerHTML = lastPaidBooking?.personName
document.getElementById("earning-vendor").innerHTML = lastPaidBooking?.vendor || lastPaidBooking?.charterVendor
document.getElementById("earning-amount").innerHTML = lastPaidBooking?.totalAmount || lastPaidBooking?.charterAmount
document.getElementById("vendor-earning").innerHTML = (lastPaidBooking?.totalAmount - (lastPaidBooking?.totalAmount * 0.2)) || (lastPaidBooking?.charterAmount - (lastPaidBooking?.charterAmount * 0.2))
document.getElementById("our-earning").innerHTML = (lastPaidBooking?.totalAmount * 0.2) || (lastPaidBooking?.charterAmount * 0.2)

let registerDetails = JSON.parse(localStorage.getItem('Register-Details'));

document.getElementById("total-vendor").innerHTML = 4;
document.getElementById("total-user").innerHTML = registerDetails.length;
let allIncomeArr = []
for(let i = 0; i<paidBooking.length; i++){
    allIncomeArr.push(paidBooking[i]?.totalAmount || paidBooking[i]?.charterAmount)
}

let totalIncome = allIncomeArr.reduce((a, b) => Number(a) + Number(b))
document.getElementById("total-income").innerHTML = totalIncome * 0.2

document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('neg-left-200px');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })