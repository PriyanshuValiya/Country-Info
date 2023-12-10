let searchBtn = document.querySelector("#search-btn");
let countryInp = document.querySelector("#country-inp");
let img = document.querySelector(".img");
let desh = document.querySelector(".info"); 

document.addEventListener('click', () => {
  let countryName = countryInp.value;
  let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  
 fetch(url)
 .then((res) => res.json())
 .then((data) => {
 let mahiti = [data[0].name.common, data[0].capital[0], data[0].continents[0], data[0].flags.svg, data[0].population];

 desh.innerHTML = `<img src="${data[0].flags.svg}" class="flag">
 <h2>${data[0].name.common}</h2>
 <h6>Capital : ${data[0].capital[0]}</h6>
 <h6>Continents : ${data[0].continents[0]}</h6>
 <h6>Population : ${data[0].population}</h6>`
 countryInp.value = "";
})
})

//  desh.textContent = `${data[0].name.common}`;