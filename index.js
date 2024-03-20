window.addEventListener('load', () => {
    let formData;
    
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

    formData = new FormData(document.forms["login"]);

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

            console.log(data.username);
            addData = document.querySelector('#add');
            addData.addEventListener('click', add(data.username));

            viewData = document.querySelector('#view');
            viewData.addEventListener('click', view(data.username));

        }
    })
    .catch(error => {console.log(error)} );
}

function add(username) {
    console.log('add');
}

function view(username) {
    const formData = new FormData();
    formData.append('username', username);

    fetch('dataAccess.php', {
        method: 'POST',
        body: formData
    }) 
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const name = document.createElement('h2');
            name.textContent = element.name;
            
            const link = document.createElement('a');
            link.href = element.link;
            link.textContent = element.link;
            
            document.body.appendChild(name);
            document.body.appendChild(link);
        });
    })
    .catch(error => {console.log(error)});
}

