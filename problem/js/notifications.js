"use strict";

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