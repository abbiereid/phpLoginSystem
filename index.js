window.addEventListener('load', () => {
    
    const login = document.querySelector("#login");
    const signup = document.querySelector("#signup");
    const loginForm = document.querySelector("#login-form");
    const regForm = document.querySelector("#register-form");


    login.addEventListener('click', () => {
        loginForm.classList.toggle('hidden');
        regForm.classList.add('hidden');
    });

   
    signup.addEventListener('click', () => {
        regForm.classList.toggle('hidden');
        loginForm.classList.add('hidden');
    });

});
