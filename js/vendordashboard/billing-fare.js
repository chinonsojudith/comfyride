document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('neg-left-200px');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })

let bookingDetails = JSON.parse(localStorage.getItem('Booking-Details'))?JSON.parse(localStorage.getItem('Booking-Details')):"";
document.getElementById('vendor-name').innerHTML = bookingDetails?.vendor || bookingDetails?.charterVendor || '';

let paidBooking = JSON.parse(localStorage.getItem('Paid-Booking'))?JSON.parse(localStorage.getItem('Paid-Booking')):[];
let lastPaidBooking = paidBooking[paidBooking.length-1]

let vendorLogin = JSON.parse(localStorage.getItem('Vendor-Login'))?JSON.parse(localStorage.getItem('Vendor-Login')):"";
let vendorName = vendorLogin?.userName

let billingTable = document.getElementById("billing-table");
for(let i = paidBooking.length - 1; i>=0; i--){
    if((paidBooking[i]?.vendor == vendorName) || (paidBooking[i]?.charterVendor == vendorName)){
        billingTable.innerHTML += `
            <tr class="">
                <td class="p-3" id="billingDate">${paidBooking[i]?.day || paidBooking[i]?.charterDay}</td>
                <td class="p-3" id="billingTime">${paidBooking[i]?.time || paidBooking[i]?.charterTime}</td>
                <td class="p-3" id="billingName">${paidBooking[i]?.personName}</td>
                <td class="p-3" id="billingBank">${paidBooking[i]?.bankName || paidBooking[i]?.charterBankName || ''}</td>
                <td class="p-3" id="billingAmount">${(paidBooking[i]?.totalAmount) * 0.8 || (paidBooking[i]?.charterAmount) * 0.8}</td>
            </tr>
        `
    }
}

document.getElementById('vendor-name').innerHTML = vendorLogin?.userName;