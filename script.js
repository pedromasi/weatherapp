

const container = document.querySelector('container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    
    const APIKey =
    const city = document.querySelector('.search-box input').value;
    

    fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&units=metric&ppid=${APIKey}`).then(response => response.json()).then(json => {
        if(json.cod === '404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('FadeIn');
            return;
        }
        error404.style.display = 'none';
        error404.classList.remove('FadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-box .humidity span');
        const wind = document.querySelector('.weather-box .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;
        }

    })


})
