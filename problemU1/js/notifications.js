"use strict";

function screenNotificationCreater( notice, buttonDecider) {
    removeScreenNotification();
    let buttonContent = notice === "CORRECT!" ? "ONE MORE" : "CLOSE";

    const notification = document.createElement( 'div');
    notification.setAttribute( 'id', 'notification');
    document.body.prepend( notification);

    if( buttonDecider) {
        notification.innerHTML = `
            <div>
                ${notice}<br>
                <button>${buttonContent}</button>
            </div>
        `;
        if( buttonContent === "CLOSE") {
            document.querySelector( "#notification button").addEventListener( "click", removeScreenNotification);
        }else { 
            document.querySelector( "#notification button").addEventListener( "click", newQuizQuestion);
        }

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