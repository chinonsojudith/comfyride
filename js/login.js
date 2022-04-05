document.getElementById('login-form')
    .addEventListener('click', (e) => {
        e.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let getRegisterArr = []
        getRegisterArr = JSON.parse(localStorage.getItem('Register-Details')) ? JSON.parse(localStorage.getItem('Register-Details')) : []
        if((getRegisterArr.filter(item => item?.email == email && item?.password == password)).length == 0){
            alert('Invalid Username or Password');
            email = password = '';
        } else {
            let loginPerson = getRegisterArr.filter(item => item?.email == email && item?.password == password)
            let personEmail = loginPerson[0].email
            let personLocation = loginPerson[0].location
            let personName = loginPerson[0].name
            let personNumber = loginPerson[0].number
            let personPassword = loginPerson[0].password
            let loginDetails = {personEmail, personLocation, personName, personNumber, personPassword}

            localStorage.setItem('Login-Details', JSON.stringify(loginDetails));
            document.getElementById('login-form').setAttribute('href', 'client.html')
            window.location.href = 'client.html'
        }
    })