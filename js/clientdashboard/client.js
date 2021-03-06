// Booking
let bookingDetails = JSON.parse(localStorage.getItem('Booking-Details')) ? JSON.parse(localStorage.getItem('Booking-Details')): "";
document.getElementById('pick-up').value = bookingDetails?.pickUp || ''
document.getElementById('destination').value = bookingDetails?.destination || ''
document.getElementById('unit-amount').value = (bookingDetails?.unitAmountValue) || ''
document.getElementById('total-amount').value = (bookingDetails?.totalAmountValue) || ''
document.getElementById('person').value = bookingDetails?.person || ''
document.getElementById('day').value = bookingDetails?.day || ''
document.getElementById('time').value = bookingDetails?.time || ''
document.getElementById('vendor').value = bookingDetails?.vendor || '';

document.getElementById('charter-pick-up').value = bookingDetails?.charterPickUp || ''
document.getElementById('charter-destination').value = bookingDetails?.charterDestination || ''
document.getElementById('charter-amount').value = (bookingDetails?.charterTotalAmountValue) || ''
document.getElementById('charter-vehicle').value = bookingDetails?.charterVehicle || ''
document.getElementById('charter-day').value = bookingDetails?.charterDay || ''
document.getElementById('charter-time').value = bookingDetails?.charterTime || ''
document.getElementById('charter-vendor').value = bookingDetails?.charterVendor || '';

//Booking Page (Individual)
document.getElementById('person')
    .addEventListener('keyup', () => {
        let pickUp = document.getElementById('pick-up').value
        let destination = document.getElementById('destination').value
        let unitAmount = document.getElementById('unit-amount')
        let totalAmount = document.getElementById('total-amount');
        let person = document.getElementById('person').value;
        let vendor = document.getElementById('vendor').value;
        let day = document.getElementById('day').value.toString();
        let time = document.getElementById('time').value;
        let unitAmountValue, totalAmountValue;

        if(pickUp == 'Abeokuta' && destination == 'Shagamu' || (destination == 'Abeokuta' &&  pickUp == 'Shagamu')){
            unitAmountValue = 800;
            totalAmountValue = unitAmountValue * person;
            unitAmount.value = unitAmountValue;
            totalAmount.value = totalAmountValue;
        }
        if(pickUp == 'Abeokuta' && destination == 'Ota' || (destination == 'Abeokuta' &&  pickUp == 'Ota')){
            unitAmountValue = 700;
            totalAmountValue = unitAmountValue * person;
            unitAmount.value = unitAmountValue;
            totalAmount.value = totalAmountValue;
        }
        if(pickUp == 'Ota' && destination == 'Shagamu' || (destination == 'Ota' &&  pickUp == 'Shagamu')){
            unitAmountValue = 600;
            totalAmountValue = unitAmountValue * person;
            unitAmount.value = unitAmountValue;
            totalAmount.value = totalAmountValue;
        }
        
        const bookingDetails = {pickUp, destination, unitAmountValue, totalAmountValue, person, day, vendor, time, type: 'individual'};
        localStorage.setItem('Booking-Details', JSON.stringify(bookingDetails));
    })

//Booking Page (Charter)
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
        
        const bookingDetails = {charterPickUp, charterDestination, charterTotalAmountValue, charterVehicle, charterVendor, charterDay, charterTime, type: 'charter'};
        localStorage.setItem('Booking-Details', JSON.stringify(bookingDetails));
    })


document.getElementById('pay-now')
    .addEventListener('click', (e) => {
        e.preventDefault()
        document.getElementById('payment-form').classList.remove('d-none')
    })

document.getElementById('charter-pay-now')
    .addEventListener('click', (e) => {
        e.preventDefault()
        document.getElementById('payment-form').classList.remove('d-none')
    })

document.getElementById('cancel-payment')
    .addEventListener('click', () => {
        document.getElementById('payment-form').classList.add('d-none')
    })


let loginDetails = JSON.parse(localStorage.getItem('Login-Details'))? JSON.parse(localStorage.getItem('Login-Details')): "";
document.getElementById('pay')
    .addEventListener('click', (e) => {
        e.preventDefault()
        let getBookArr = []
        
        let bookingDetails = JSON.parse(localStorage.getItem('Booking-Details'))?JSON.parse(localStorage.getItem('Booking-Details')):""

        getBookArr = JSON.parse(localStorage.getItem('Paid-Booking')) ? JSON.parse(localStorage.getItem('Paid-Booking')) : []
        if(bookingDetails?.type == 'individual'){
            let pickUp = document.getElementById('pick-up').value
            let destination = document.getElementById('destination').value
            let totalAmount = document.getElementById('total-amount').value
            let person = document.getElementById('person').value
            let vendor = document.getElementById('vendor').value
            let day = document.getElementById('day').value.toString()
            let time = document.getElementById('time').value
            let bankName = document.getElementById('bankName').value
            let id = Math.floor(Math.random() * 985399)
            let personName = loginDetails?.personName
            let personEmail = loginDetails?.personEmail
            let personNumber = loginDetails?.personNumber
            let personLocation = loginDetails?.personLocation

            
            const paidBook = {pickUp, destination, totalAmount, person, vendor, day, time, bankName, type: 'individual', id, personName, personEmail, personNumber, personLocation}
            getBookArr.push(paidBook);
            localStorage.setItem('Paid-Booking', JSON.stringify(getBookArr));

            alert('Payment Successful')
            document.getElementById('payment-form').classList.add('d-none')
        } else {
            let charterPickUp = document.getElementById('charter-pick-up').value
            let charterDestination = document.getElementById('charter-destination').value
            let charterAmount = document.getElementById('charter-amount').value;
            let charterVehicle = document.getElementById('charter-vehicle').value;
            let charterDay = document.getElementById('charter-day').value.toString();
            let charterTime = document.getElementById('charter-time').value;
            let charterVendor = document.getElementById('charter-vendor').value;
            let charterBankName = document.getElementById('bankName').value
            let charterId = Math.floor(Math.random() * 985399)
            let personName = loginDetails?.personName
            let personEmail = loginDetails?.personEmail
            let personNumber = loginDetails?.personNumber
            let personLocation = loginDetails?.personLocation

            const paidBook = {charterPickUp, charterDestination, charterAmount, charterVehicle, charterDay, charterTime, charterVendor, charterBankName, type: 'charter', charterId, personName, personEmail, personNumber, personLocation}
            getBookArr.push(paidBook);
            localStorage.setItem('Paid-Booking', JSON.stringify(getBookArr));

            alert('Payment Successful')
            document.getElementById('payment-form').classList.add('d-none')
        }
    })



document.getElementById('individual-toggle')
    .addEventListener('click', () => {
        document.getElementById('individual-book').classList.remove('d-none')
        document.getElementById('charter-book').classList.add('d-none')
        document.getElementById('individual-toggle').classList.remove('btn-not-active')
        document.getElementById('charter-toggle').classList.add('btn-not-active')
    })
document.getElementById('charter-toggle')
    .addEventListener('click', () => {
        document.getElementById('charter-book').classList.remove('d-none')
        document.getElementById('individual-book').classList.add('d-none')
        document.getElementById('individual-toggle').classList.add('btn-not-active')
        document.getElementById('charter-toggle').classList.remove('btn-not-active')
    })

document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('neg-left-200px');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })

document.getElementById('name').innerHTML = loginDetails?.personName;