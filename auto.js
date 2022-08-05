const tesla = {
    name: "Tesla",
    year: 2020,
    speed: 80,
    consumption: 20,
    drivers: ['Siri', 'Aragorn'],
    photo: "./car-img/tesla-x.jpg"
}

const audi = {
    name: "Audi",
    year: 2021,
    speed: 60,
    consumption: 12,
    drivers: ['Rihanna', 'Malfoy', 'Thor'],
    photo: "./car-img/audi.jpg"
}

// driverToAssignInput
let driverToAssignInput = document.querySelector('#inputOwnDriver');
let driverToSearchInput = document.querySelector('#inputFindDriver');
let distanceInput = document.querySelector('#inputDistance');

driverToAssignInput.addEventListener('change', () => assignDriverToACar(tesla, driverToAssignInput.value));
distanceInput.addEventListener('change', () => countHours(tesla));
distanceInput.addEventListener('change', () => countLiters(tesla));
driverToSearchInput.addEventListener('change', () => searchDriver(tesla));

let driverToAssignDisplay = document.querySelector('#answerOwnDriver');
let driverToSearchDisplay = document.querySelector('#answerFindDriver');
let hoursDisplay = document.querySelector('#hours');
let litersDisplay = document.querySelector('#liters');


displayCarInfo(tesla);
//displayCarInfo(audi);



function displayCarInfo(car) {
    document.querySelector('#autoInfo').innerHTML = `
<div class="carCard" id="test">
    <table >
        <tbody>
            <tr>
                <td>Brand</td>
                <td>${car.name}</td>
            </tr>
            <tr>
                <td>Year</td>
                <td>${car.year}</td>
            </tr>
            <tr>    
                <td>Speed, km/h</td>
                <td>${car.speed} </td>
            </tr>
            <tr>
                <td>Consumption, liters/100km</td>
                <td>${car.consumption} </td>
            </tr>
            <tr>
                <td>Drivers</td>
                <td>${car.drivers}</td>
            </tr>
        </tbody>
    </table>
        <div class="image-container">
            <img src=${car.photo} alt="${car.name}">
        </div>
</div>`};


function assignDriverToACar(car, driver) {

    car.drivers.push(driver);
    displayCarInfo(car);
    driverToAssignDisplay.innerHTML = `Your driver ${driver}  is added`;

}

function countLiters(car) {
    let resultLiters = Math.round(car.consumption * parseFloat(distanceInput.value) / 100);
    litersDisplay.innerHTML = resultLiters;
}

function countHours(car) {
    let rideMinutes = Math.round(parseFloat(distanceInput.value) / car.speed * 60);
    let rideHours = 0;
    if (rideMinutes >= 60) {
        rideHours = Math.floor(rideMinutes / 60)
        rideMinutes = Math.round(rideMinutes % 60);
    }

    let restHours = Math.round(rideHours / 4);
    let resultHours = rideHours + restHours;
    hoursDisplay.innerHTML = `${resultHours} hours and ${rideMinutes} minutes including ${restHours} hours additionaly for rest`;

}

function searchDriver(car){
    if (car.drivers.includes(driverToSearchInput.value) === true){
        driverToSearchDisplay.innerHTML = `${driverToSearchInput.value} is found in ${car.name}`;
    }
    else{
        driverToSearchDisplay.innerHTML = `Sorry, we didn't find this driver`;
    }
}





