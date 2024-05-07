const apiKey = "164fa331891eddf0f1adebe8e1f34ec7";
const kelvinACelsius = -273.15;
const urlBase = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
});

function fetchDatosClima(ciudad){
fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
.then(data => data.json())
.then(data => mostrarDatosClima(data));
}

function mostrarDatosClima(data){
const divDatosClima = document.getElementById('datosClima');
divDatosClima.innerHTML = '';
const ciudadNombre = data.name;
const temperatura = data.main.temp;
const descripcion = data.weather[0].description;

const ciudadTitulo = document.createElement('h2');
ciudadTitulo.textContent = ciudadNombre;

const temperaturaInfo = document.createElement('p');
temperaturaInfo.textContent = `La temperatura es ${Math.trunc((temperatura+kelvinACelsius)*100)/100} grados Celcius`;

const descripcionInfo = document.createElement('p');
descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

divDatosClima.appendChild(ciudadTitulo);
divDatosClima.appendChild(temperaturaInfo);
divDatosClima.appendChild(descripcionInfo);
}