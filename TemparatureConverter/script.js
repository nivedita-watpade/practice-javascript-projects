"use strict";

const inputCelsius = document.querySelector("#celsius");
const inputFahrenheit = document.querySelector("#fahrenheit");
const btnTempFarConverter = document.querySelector(".btnTempFar");
const btnTempCelConverter = document.querySelector(".btnTempCel");
const tempResult = document.querySelector("#result");

function fahrenheitConverter() {
  //   console.log(inputCelsius);
  const farTemp = (inputCelsius.value * 9) / 5 + 32;
  tempResult.textContent = `${inputCelsius.value} °C to Fahrenheit is ${farTemp}`;
}

function celsiusConverter() {
  const celTemp = (inputFahrenheit.value - 32) * (5 / 9);
  tempResult.textContent = `${inputFahrenheit.value} °F to Celsius is ${celTemp}`;
}

btnTempFarConverter.addEventListener("click", fahrenheitConverter);
btnTempCelConverter.addEventListener("click", celsiusConverter);
