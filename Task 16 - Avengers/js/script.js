var ironmanCount = 0;
var thorCount = 0;

var ironman = document.getElementById('ironman');
var thor = document.getElementById('thor');

var ironmanCountDisplay = document.getElementById('ironmanClicks');
var thorCountDisplay = document.getElementById('thorClicks');

var ironmanButton = document.getElementById('ironmanButton');
var thorButton = document.getElementById('thorButton');

var buttons = [ironmanButton, thorButton];

var ironmanDiv = document.getElementById('ironmanDiv');
var thorDiv = document.getElementById('thorDiv');

ironman.addEventListener('click', function(event) {

    ironmanCount++;
    ironmanCountDisplay.innerHTML = 
    "Ironman has been clicked " + ironmanCount + " times";

    console.log("Ironman has been clicked " + ironmanCount + " times");

});

thor.addEventListener('click', function(event) {

    thorCount++;
    thorCountDisplay.innerHTML = 
    "Thor has been clicked " + thorCount + " times";

    console.log("Thor has been clicked " + thorCount + " times");

});

buttons.forEach(function(element) {

    element.addEventListener('click', function(event) {

        if(element.attributes['id'].value == 'ironmanButton') {

            ironmanDiv.style.display = "flex";
            thorDiv.style.display = "none";

        }

        if(element.attributes['id'].value == 'thorButton') {

            ironmanDiv.style.display = "none";
            thorDiv.style.display = "flex";

        }

    })

});