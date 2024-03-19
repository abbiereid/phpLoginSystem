window.addEventListener('load', () => {
    
    const login = document.querySelector("#login");
    login.addEventListener('click', () => {
        const loginForm = document.querySelector("#login-form");
        loginForm.classList.toggle('hidden');
    });

    const signup = document.querySelector("#signup");
    signup.addEventListener('click', () => {
        const regForm = document.querySelector("#register-form");
        regForm.classList.toggle('hidden');
    });

});
