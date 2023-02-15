"use strict";

function initializeLoginRegister( title, quote, button, link  ) {
    document.querySelector( "#wrapper").innerHTML = `
        <div>${title}</div>
        <div id="inputFields">
            <label for="username">Username:</label>
            <input type="text" name="username">
            
            <label for="password">Password:</label>
            <input type="password" name="password"> 
        </div>

        <div>${quote}</div>
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

function createUserOrLogin( event) {
    if( document.querySelector( "button").textContent !== "Login") {
        console.log( "REGISTER");
    } else {
        console.log( "LOGIN");
    }
}