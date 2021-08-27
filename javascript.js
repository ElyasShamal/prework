console.log("testing");
let button   = document.querySelector('#button');
let name   = document.querySelector('#Name');
let height   = document.querySelector('#Height');
let mass  = document.querySelector('#mass');
let hair_color   = document.querySelector('#hair_color');
let skin_color   = document.querySelector('#"skin_color');
let eye_color   = document.querySelector('#eye_color');
let gender   = document.querySelector('#gender');
			function getinfo(){
      fetch('https://swapi.dev/api/people/1/')

}

function updateinfo(data){
 name.innertext = data.name 
 height.innertext = 'height:${data.height}'
 mass.innertext = 'mass:${data.mass}'
 hair_color.innertext = 'hair_color:${data.hair_color}'
 skin_color.innertext = 'skin_color:${data.skin_color}'
 eye_color.innertext =  'eye_color :${data.eye_color}'
 gender.innertext  = 'gender:${data.gender}'
}
buton.addeventlistener('click',getinfo)