"use strict"

async function fetchRqstHandler( rqstURL, type) {
    
    if( type !== "dogAPI") {
        screenNotificationCreater( "Contacting Server...", false);
    } else { 
        screenNotificationCreater( "Getting a random image...", false);
    }

    let response = await fetch( rqstURL);

    if( rqstURL.method === 'POST') {
        if( response.status === 200) {
            screenNotificationCreater( "Registration Complete. Please proceed to login.", true);
        }
        
        if( response.status === 409) {
            screenNotificationCreater( "Sorry, that name is taken. Please try with another one.", true);
        }
    }
    
    if( response.status === 418) {
        screenNotificationCreater( "The server thinks it's not a teapot!", true);
        return "teapot";
    }
    
    if( type === "login" && response.status === 404 || response.status === 400) {
        document.querySelector( ".quote").textContent = 'Wrong Username or Password.';
        document.querySelector( ".quote").classList.add( "errorLogin");
        removeScreenNotification();
        return "error";
    }
    
    return await response.json();
}
