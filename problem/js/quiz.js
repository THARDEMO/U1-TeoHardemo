"use strict";

async function createQuizzes( un, pw) {
    document.querySelector( "#modularStylesheetLink").setAttribute( "href", "css/quiz.css")

    document.querySelector( "#wrapper").innerHTML = `
    <div id="account">
        <div class="name">MAJBALLZ</div>
        <button>Logout</button>
    </div>

    <div id="loadingImage">
        <img src="media/logo.png" alt="">
    </div>
    <div id="squareGrid">
        <div>doggo</div>
        <div>doge</div>
        <div>butter</div>
        <div>dawg</div>
    </div>
    `

    // fetch random dog name from API https://dog.ceo/dog-api/, get 4 random dogs from data
    // forEach array of 4 dogs create div in #squareGrid
    // logout #account > button return to loginscreen (event)
}