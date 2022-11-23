// capturamos el botón de HTML y ejecutamos la función con el evento click
const next_btn = document.querySelector('#next_btn');
next_btn.addEventListener('click', randomJoke);
next_btn.addEventListener('click', blobs);

// usamos aleatoriamente una u otra API
function randomJoke() {
    Math.random() < 0.5 ? nextJoke() : nextChuck();
}

// --------------- API JOKES ---------------
// asignamos variables a la URL y a los headers de la API (para pasarlos como argumentos)
const API_JOKES = 'https://icanhazdadjoke.com/';
const headers = {
    headers: {
        Accept: 'application/json'
    }
}

// función asíncrona con fetch para esperar respuesta de la API
async function nextJoke() {
    const request = await fetch(API_JOKES, headers);  // obtenemos los datos de la API...
    const response = await request.json();  // ...en formato json
    currentJoke = response.joke;
    document.getElementById('joke').innerHTML = currentJoke;
}

// --------------- API CHUCK NORRIS ---------------
const API_CHUCK = 'https://api.chucknorris.io/jokes/random';

async function nextChuck() {
    const request = await fetch(API_CHUCK);
    const response = await request.json();
    currentJoke = response.value;
    document.getElementById('joke').innerHTML = currentJoke;
}

// -------------- REPORTS SCORES-------------
// capturamos los botones de HTML y le pasamos sus valores correspondientes a la función
const score1 = document.querySelector('#button1');
score1.addEventListener('click', () => reportScores(1));
const score2 = document.querySelector('#button2');
score2.addEventListener('click', () => reportScores(2));
const score3 = document.querySelector('#button3');
score3.addEventListener('click', () => reportScores(3));

const reportAcudits = [];

function reportScores(score) {
    let report = {
        joke: currentJoke,
        score: score,
        date: new Date().toISOString()
    }
    reportAcudits.push(report);
    console.clear();
    console.table(reportAcudits)
}

// ---------------- API WEATHER ----------------
const API_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?id=3119531&appid=82046aacc7dc9839a6247a62e9200381&lang=ca';

async function weather() {
    const request = await fetch(API_WEATHER);
    const response = await request.json();
    currentIcon = response.weather[0].icon;
    currentTemp = Number((response.main.temp) - 273.15).toFixed(1);
    currentIconWeather = `http://openweathermap.org/img/wn/${currentIcon}.png`
    document.getElementById('weatherIcon').setAttribute('src', currentIconWeather);
    document.getElementById('weatherTemp').innerHTML = `${currentTemp}ºC`;
}
weather();

// --------------- IMAGENES FONDO --------------
function blobs() {
    random = Math.floor((Math.random() * (5 - 1 + 1)) + 1)
    document.getElementById('left').style.backgroundImage = `url('./images/blob${random}-left.svg')`;
    document.getElementById('center').style.backgroundImage = `url('./images/blob${random}-center.svg')`;
    document.getElementById('right').style.backgroundImage = `url('./images/blob${random}-right.svg')`;
}