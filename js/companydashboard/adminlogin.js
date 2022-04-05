document.getElementById('login-form')
    .addEventListener('click', (e) => {
        e.preventDefault()
        let userName = document.getElementById('userName').value
        let password = document.getElementById('password').value

        if((userName == 'admin' && password == '12345678')){
            let adminLogin = {userName, password}

            localStorage.setItem('Admin-Login', JSON.stringify(adminLogin));
            document.getElementById('login-form').setAttribute('href', 'dashboard.html')
            window.location.href = 'dashboard.html'
        } else {
            alert('Invalid Username or Password');
        }
    })