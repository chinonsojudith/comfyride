//profile Page
let loginDetails = JSON.parse(localStorage.getItem('Login-Details'));
document.getElementById('fullName').value = loginDetails?.personName
document.getElementById('email').value = loginDetails?.personEmail
document.getElementById('phone').value = loginDetails?.personNumber
document.getElementById('location').value = loginDetails?.personLocation

document.getElementById('updatePass')
    .addEventListener('click', () => {
        if(document.getElementById('newPass').value != document.getElementById('confirmPass').value){
            alert('Password Mismatch, please re-enter your Password');
            document.getElementById('newPass').value = document.getElementById('confirmPass').value = ''
        } else {
            const details = {
                personName: document.getElementById('fullName').value,
                personEmail: document.getElementById('email').value,
                personNumber: document.getElementById('phone').value,
                personLocation: document.getElementById('location').value,
                personPassword: document.getElementById('newPass').value
            }
            localStorage.setItem('Login-Details', JSON.stringify(details));
            document.getElementById('newPass').value = document.getElementById('confirmPass').value = ''
        }
    })

document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('neg-left-200px');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })

document.getElementById('name').innerHTML = loginDetails?.personName