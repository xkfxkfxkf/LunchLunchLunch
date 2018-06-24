let areaOfRestaurants = [
    'Pitt St Mall Upper Foodcourt', 'Pitt St Mall Lower Foodcourt', 'Hunter Connection', 
    'NAB Centre', 'MLC Centre'
];

let beginButton = document.getElementById('beginButton');
let result = document.getElementById('result');

beginButton.addEventListener('click', function() {
    result.innerText = areaOfRestaurants[Math.floor(Math.random() * areaOfRestaurants.length)];
    }
);