"use strict"

async function getResourceFromServer( APIurl) {
    return await( await fetch( APIurl)).json();
}