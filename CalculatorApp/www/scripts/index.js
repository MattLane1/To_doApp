/* 
Author: Matthew Lane (200214586)
DOC: 01/02/2017
Purpose: A ToDo list program, written in HTML and JS to be run on an android emulator (cordova).
File: This is the JavaScript area of the application. The buttons are connected here. 
*/


(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

   /* Connect the buttons and watch for a user press */
    /*changes*/
    var tasks = 1;

    //Connect the buttons
    document.getElementById("Add").onclick = function () { document.getElementById(("toDo"+tasks.toString())).value = document.getElementById("display").value; tasks++; };
    document.getElementById("toDo1").onclick = function () { document.getElementById("toDo5").value = "JJ" };
     

    function onDeviceReady() {  
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();