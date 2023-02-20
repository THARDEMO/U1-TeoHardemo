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
    
    let arrayOfFourBreeds = [];
    getFourRandomBreeds();
    function getFourRandomBreeds() {
        const randomBreed = ALL_BREEDS[ getRandomBreedFromArray( ALL_BREEDS)];
        if( arrayOfFourBreeds.some( breed => breed.name === randomBreed.name)) {
            getFourRandomBreeds();
        } else {
            arrayOfFourBreeds.push( randomBreed);
            // createBreedChoicesDOM( randomBreed);
        }
        if( arrayOfFourBreeds.length < 4) {
            getFourRandomBreeds();
        }
    }
    
    console.log( arrayOfFourBreeds);
    const CorrectAnswerBreed = arrayOfFourBreeds[ getRandomBreedFromArray( arrayOfFourBreeds)];
    
    arrayOfFourBreeds.forEach( breed => {
        const breedChoiceDOM = document.createElement( "div");
        breedChoiceDOM.textContent = breed.name;
        breedChoiceDOM.addEventListener( "click", controlIfAnswerCorrect)
        document.querySelector( "#squareGrid").append( breedChoiceDOM);
    })
   
   
    // const CorrectAnswerBreedImage = await fetchRqstHandler( `https://dog.ceo/api/breed/${CorrectAnswerBreed.url}/images/random`, "DogAPI")
    // console.log( CorrectAnswerBreedImage);

    // const choicesBreedsParent = document.querySelector( "#squareGrid");
    
    
    // function createBreedChoicesDOM( breedObject) {
        
    // }


    // fetch random dog name from API https://dog.ceo/dog-api/, get 4 random dogs from data
    // forEach array of 4 dogs create div in #squareGrid
    // logout #account > button return to loginscreen (event)
}

// https://dog.ceo/api/breed/${DATA key.URL }/images/random

function getRandomBreedFromArray( array) {
    const randomIndex = Math.floor( Math.random( ) * array.length);
    return randomIndex;
    
}

function controlIfAnswerCorrect( event) {
    console.log( event.target.textContent);
}