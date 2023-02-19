"use strict"

async function fetchRqstHandler( rqstURL) {
    screenNotificationCreater( "Contacting Server...", false);

    let response = await fetch( rqstURL);
    console.log( response);
    
    if( rqstURL.method === 'POST') {
        if( response.status === 200) {
            console.log( 200);
            screenNotificationCreater( "Registration Complete. Please proceed to login.", true)
        }
        
        if( response.status === 409) {
            console.log( 409);
            screenNotificationCreater( "Sorry, that name is taken. Please try with another one.", true)
        }
        
        if( response.status === 418) {
            console.log( 'teapot');
            screenNotificationCreater( "The server thinks it's not a teapot!", true)
        }
    }
    
    let resource = await response.json();
    // removeScreenNotification();
    console.log( resource);
}

function screenNotificationCreater( notice, buttonDecider) {
    removeScreenNotification();
    
    const notification = document.createElement( 'div');
    notification.setAttribute( 'id', 'notification');
    document.body.prepend( notification);

    if( buttonDecider) {
        notification.innerHTML = `
            <div>
                ${notice}<br>
                <button>CLOSE</button>
            </div>
        `;

        document.querySelector( "#notification button").addEventListener( "click", removeScreenNotification);
    }else {
        notification.innerHTML = `
            <div>${notice}</div>
        `;
    }
}

function removeScreenNotification() {
    if( document.querySelector( "#notification")) {
        document.querySelector( "#notification").remove();
    }
}