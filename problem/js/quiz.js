"use strict";

async function createQuizzes( un, pw) {
    document.querySelector( "#modularStylesheetLink").setAttribute( "href", "css/quiz.css")

    document.querySelector( "#wrapper").innerHTML = `
        <div id="account">
            <div class="name">${un}</div>
            <button>Logout</button>
        </div>

        <div id="loadingImage">
            <img src="media/logo.png" alt="">
        </div>
        <div id="squareGrid">
        </div>
    `
    
    document.querySelector( "#account button").addEventListener( "click", function(){
        location.reload();
    });

    let arrayOfFourBreeds = [];
    getFourRandomBreeds();
    function getFourRandomBreeds() {
        const randomBreed = ALL_BREEDS[ getRandomBreedFromArray( ALL_BREEDS)];
        if( arrayOfFourBreeds.some( breed => breed.name === randomBreed.name)) {
            getFourRandomBreeds();
        } else {
            arrayOfFourBreeds.push( randomBreed);
        }
        if( arrayOfFourBreeds.length < 4) {
            getFourRandomBreeds();
        }
    }
    
    console.log( arrayOfFourBreeds);
    const CorrectAnswerBreed = arrayOfFourBreeds[ getRandomBreedFromArray( arrayOfFourBreeds)];
    const CorrectAnswerBreedImage = await fetchRqstHandler( `https://dog.ceo/api/breed/${CorrectAnswerBreed.url}/images/random`, "dogAPI")
    removeScreenNotification();
    document.querySelector( "#loadingImage > img").setAttribute( "src", CorrectAnswerBreedImage.message);
    
    


    arrayOfFourBreeds.forEach( breed => {
        const breedChoiceDOM = document.createElement( "div");
        breedChoiceDOM.textContent = breed.name;
        document.querySelector( "#squareGrid").append( breedChoiceDOM);
        
        
        if( breed.name === CorrectAnswerBreed.name) {
            breedChoiceDOM.addEventListener( "click", correctAnswerInQuiz)
        }else {breedChoiceDOM.addEventListener( "click", wrongAnswerInQuiz)}
        
        
        
        
    
    })

    // logout #account > button return to loginscreen (event)
    function correctAnswerInQuiz( event) {
        screenNotificationCreater( "CORRECT!", true);
    }
    
    function wrongAnswerInQuiz( event) {
        event.target.style.borderColor = "red";
        screenNotificationCreater( "I'm afraid not... Try again", true);
    }
}


function getRandomBreedFromArray( array) {
    const randomIndex = Math.floor( Math.random( ) * array.length);
    return randomIndex;
    
}


function newQuizQuestion( event) { 
    removeScreenNotification();
    createQuizzes( document.querySelector( ".name").textContent);
};