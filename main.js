// --------------- API JOKES ---------------
// capturamos el botón de HTML y ejecutamos la función con el evento click
const next_btn = document.querySelector('#next_btn');
next_btn.addEventListener('click', nextJoke);

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
    currentWeather = response.weather[0].description;
    document.getElementById('weather').innerHTML = `Avui a La Llagosta: ${currentWeather}`;
}
weather();