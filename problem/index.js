"use strict";

// if( localStorage.getItem( "userObject")) {
//     createQuizzes( JSON.parse( localStorage.getItem( "userObject")).user_name);
// }else {
//     initializeLoginRegister( "LOGIN", "Let the magic start!", "Login", "New to this? Register for free");
// }

localStorage.getItem( "userObject") ? createQuizzes( JSON.parse( localStorage.getItem( "userObject")).user_name) : initializeLoginRegister( "LOGIN", "Let the magic start!", "Login", "New to this? Register for free");