var areaOfRestaurants = [
    'Pitt St Mall Upper Foodcourt', 'Pitt St Mall Lower Foodcourt', 'Hunter Connection', 
    'NAB Centre', 'MLC Centre'
];

var beginButton = document.getElementById('beginButton');
var result = document.getElementById('result');

var countdownCounter = 3;
//var resultCountdownInterval;

function resultCountdown() {
    result.innerText = countdownCounter + '...';
    countdownCounter--;

    if (countdownCounter == -1) {
        result.innerText = areaOfRestaurants[Math.floor(Math.random() * areaOfRestaurants.length)];
        clearInterval(resultCountdownInterval);
        countdownCounter = 3;
    }
}

beginButton.addEventListener('click', function() {
    resultCountdownInterval = setInterval(resultCountdown, 1000);
    //If I declare resultCountdownInterval here, clearInterval doesn't work. If I remove the declaration but
    //fail to declare it elsewhere, still works. Is this because Javascript just assumes I forgot to declare
    //it and declares it for me?
});