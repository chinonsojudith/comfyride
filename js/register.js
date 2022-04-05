document.getElementById('register-form')
    .addEventListener('click', (e) => {
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value
        let location = document.getElementById('location').value
        let number = document.getElementById('number').value
        let password = document.getElementById('password').value
        let getRegisterArr = []
        getRegisterArr = JSON.parse(localStorage.getItem('Register-Details')) ? JSON.parse(localStorage.getItem('Register-Details')) : []
        if((getRegisterArr.filter(item => item?.email == email)).length >= 1){
            alert('Email already exist');
        } else {
            if(name == '' || email == '' || location == '' || number == '' || password == ''){
                alert('Kindly fill out the form');
            } else {
                
                const registerDetails = {name, email, location, number, password}
                getRegisterArr.push(registerDetails);
    
                localStorage.setItem('Register-Details', JSON.stringify(getRegisterArr));
                name = email = location = number = password = ''
                document.getElementById('register-form').href='login.html'
            }
            
        }
    })