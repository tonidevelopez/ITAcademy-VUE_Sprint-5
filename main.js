// capturamos el botón de HTML y ejecutamos la función con el evento click
const joke_btn = document.querySelector('#joke_btn');
joke_btn.addEventListener('click', nextJoke);

// asignamos variables a la URL y a los headers de la API (para pasarlos como argumentos)
const API_URL = 'https://icanhazdadjoke.com/';
const headers = {
    headers: {
        Accept: 'application/json'
    }
}

// función asíncrona con fetch para esperar respuesta de la API
async function nextJoke() {
    const request = await fetch(API_URL, headers);  // obtenemos los datos de la API...
    const response = await request.json();  // ...en formato json
    console.log(response.joke);
}