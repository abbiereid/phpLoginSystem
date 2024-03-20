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

    loginForm.addEventListener('submit', event => authentication(event));

});

function authentication(event) {
    event.preventDefault();

    const formData = new FormData(document.forms["login"]);

    fetch('login.php', {
        method: 'POST',
        body: formData
    }) 
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success) {
            const loggedin = document.querySelector('#loggedIn')
            loggedin.classList.toggle('hidden');
            const loggedout = document.querySelector('#loggedOut')
            loggedout.classList.toggle('hidden');

            logOut = document.querySelector('#signout');
            logOut.addEventListener('click', () => {
                loggedin.classList.toggle('hidden');
                loggedout.classList.toggle('hidden');
            });

            addData = document.querySelector('#add');
            addData.addEventListener('click', add(data.username));

            viewData = document.querySelector('#view');
            viewData.addEventListener('click', view());

        }
    })
    .catch(error => {console.log(error)} );
}

function add(username) {
    fetch('addData.php', {
        method: 'POST',
        body: username
    }) 

}

function view(username) {
    fetch('dataAccess.php', {
        method: 'POST',
        body: username
    }) 
}
