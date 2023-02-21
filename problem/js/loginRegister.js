"use strict";

function initializeLoginRegister( title, quote, button, link  ) {
    // document.querySelector( "#modularStylesheetLink").setAttribute( "href", "css/loginRegister.css")

    document.querySelector( "#wrapper").innerHTML = `
        <div>${title}</div>
        <div id="inputFields">
            <label for="username">Username:</label>
            <input type="text" name="username">
            
            <label for="password">Password:</label>
            <input type="password" name="password"> 
        </div>

        <div class="quote">${quote}</div>
        <button>${button}</button>
        <div><a href="#">${link}</a></div> 
    `;

    document.querySelector("a").addEventListener( "click", changeLoginScreen);
    document.querySelector("button").addEventListener( "click", createUserOrLogin);
}

function changeLoginScreen( event) {
    if( document.querySelector( "#wrapper > div").textContent !== "REGISTER") {
        initializeLoginRegister( "REGISTER", "Ready when you are...", "Register", "Already have an account? Go to login");
        document.body.style.backgroundColor = "#262e27"
    } else {
        initializeLoginRegister( "LOGIN", "Let the magic start!", "Login", "New to this? Register for free");
        document.body.style.backgroundColor = "#2F2F2F"
    }
}

async function createUserOrLogin( event) {
    const usernameInputValue = document.querySelector( "input[name='username']").value;
    const passwordInputValue = document.querySelector( "input[name='password']").value;

    if( document.querySelector( "button").textContent !== "Login") {
        const postCredentials = {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({action: "register", user_name: usernameInputValue, password: passwordInputValue}),
        }
        const registerRequest = new Request( 'https://teaching.maumt.se/apis/access/', postCredentials)
        await fetchRqstHandler( registerRequest, "register");


    } else {
        const loginResult = await fetchRqstHandler( `https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${usernameInputValue}&password=${passwordInputValue}`, "login");
   
        loginResult === "error" ? removeScreenNotification() : loginResult;
        loginResult === "error" || loginResult === "teapot" ? null : createQuizzes( loginResult.data.user_name, loginResult.data.password);
        
    }
}