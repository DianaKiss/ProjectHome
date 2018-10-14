'use strict';

const newRequest = new XMLHttpRequest();

newRequest.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', true);

newRequest.onload = () => {
  let response = newRequest.responseText;
  console.log(response);
}

newRequest.send();
