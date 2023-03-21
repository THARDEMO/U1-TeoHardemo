"use strict";

localStorage.getItem( "userObject") ? createQuizzes( JSON.parse( localStorage.getItem( "userObject")).user_name) : initializeLoginRegister( "LOGIN", "Let the magic start!", "Login", "New to this? Register for free");