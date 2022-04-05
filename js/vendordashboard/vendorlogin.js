document.getElementById('login-form')
    .addEventListener('click', (e) => {
        e.preventDefault()
        let userName = document.getElementById('userName').value
        let password = document.getElementById('password').value

        if((userName == 'jj-transport' && password == '12345678') || (userName == 'abc' && password == '12345678') || (userName == 'gigm' && password == '12345678') || (userName == 'tytl' && password == '12345678')){
            let vendorLogin = {userName, password}

            localStorage.setItem('Vendor-Login', JSON.stringify(vendorLogin));
            document.getElementById('login-form').setAttribute('href', 'dashboard.html')
            window.location.href = 'dashboard.html'
        } else {
            alert('Invalid Username or Password');
        }
    })