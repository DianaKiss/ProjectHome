'use strict';

const newRequest = new XMLHttpRequest();
let input = document.querySelector('.search');

input.addEventListener('submit', (event) => {
  const locationSearch = event.target.elements.locationSearch.value;

  newRequest.open('GET', `https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${locationSearch}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`, true);

  newRequest.onload = () => {
    let response = newRequest.responseText;
    console.log(response);
    //   document.createElement('div').innerHTML = `<div class="tile">
    //   <div class="location">
    //     <p class="city">${locationSearch}</p>
    //     <p class="county">${locationSearch}</p>
    //   </div>
    //   <p class="temperature">${response.temp}</p>
    //   <p class="terms">${response.text}</p>
    // </div>`
    }

    newRequest.send();


event.preventDefault;


  });

