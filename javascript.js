// api url
const people_url =
	"https://www.swapi.tech/api/people/";
  
 // api url
const planet_url =
	"https://www.swapi.tech/api/planets/";
  
 
var next_person = 1;
var next_planet = 1;

// Defining async function
async function getpersonapi(url, next) {
	
	// Storing response
    const response = await fetch(url + next);
	// Storing data in form of JSON
	var returned_value = await response.json();
    let data = returned_value.result.properties;
	console.log(data);
	if (response) {
		hideloader();
	}
	showCharacter(data);
}

// Defining async function
async function getplanetapi(url, next) {
	
	// Storing response
    const response = await fetch(url + next);
	// Storing data in form of JSON
	var returned_value = await response.json();
    let data = returned_value.result.properties;
    console.log(data);
	if (response) {
		hideloader();
	}
	showPlanet(data);
}

// Calling that async function
getpersonapi(people_url, next_person);
getplanetapi(planet_url, next_planet);

// function to get the next person
function nextPerson() {
    next_person = next_person + 1;
    getpersonapi(people_url, next_person);
}

// function to get the next planet
function nextPlanet() {
	next_planet = next_planet + 1;
    getplanetapi(planet_url, next_planet);
}

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function showCharacter(data) {
	let tab =
		`<ulr>
		<ul>Name : ${data.name}</ul>
		<ul>Birth Year : ${data.birth_year}</ul>
		<ul>Gender : ${data.gender}</ul>
		<ul>Height : ${data.height}</ul>
        <ul>Hair Color : ${data.hair_color}</ul>	
		</ul>`;
	

	// Setting innerHTML as tab variable
	document.getElementById("characters").innerHTML = tab;
}

// Function to define innerHTML for HTML table
function showPlanet(data) {
	let tab =
		`<ul>
		<ul>Name : ${data.name} </ul>
		<ul>Population : ${data.population}</ul>
		<ul>Terrain : ${data.terrain}</ul>
		<ul>Climate : ${data.climate}</ul>
		</ul>`;
	
	// Setting innerHTML as tab variable
	document.getElementById("planets").innerHTML = tab;
}
