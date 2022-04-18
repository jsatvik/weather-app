
let button = document.querySelector('.button')
let inputvalue = document.querySelector('.text')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');



button.addEventListener('click', function () {

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=b641a78146673bacc47ea68ad0eea37e`)
        .then(response => response.json())
        .then(
            displayData)
        .catch(err => alert('INCORRECT CITY NAME'));

})

// Function to diplay weather on html document
const displayData = (weather) => {
    temp.innerText = `${weather.main.temp}°C`
    desc.innerText = `${weather.weather[0].main}`

}