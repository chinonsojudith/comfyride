document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('neg-left-200px');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })

let paidBooking = JSON.parse(localStorage.getItem('Paid-Booking'))?JSON.parse(localStorage.getItem('Paid-Booking')):[];
let earnings = document.getElementById("earnings");
for(let i =  (paidBooking.length-1); i >= 0; i--){
    earnings.innerHTML += `
        <tr class="">
            <td class="p-3">${paidBooking[i]?.day || paidBooking[i]?.charterDay}</td>
            <td class="p-3">${paidBooking[i]?.time || paidBooking[i]?.charterTime}</td>
            <td class="p-3">${paidBooking[i]?.personName}</td>
            <td class="p-3">${paidBooking[i]?.vendor || paidBooking[i]?.charterVendor}</td>
            <td class="p-3">${paidBooking[i]?.totalAmount || paidBooking[i]?.charterAmount}</td>
            <td class="p-3">${((paidBooking[i]?.totalAmount) - ((paidBooking[i]?.totalAmount) * 0.2)) || ((paidBooking[i]?.charterAmount) - ((paidBooking[i]?.charterAmount) * 0.2))}</td>
            <td class="p-3">${((paidBooking[i]?.totalAmount) * 0.2) || ((paidBooking[i]?.charterAmount) * 0.2)}</td>
        </tr>
    `
}