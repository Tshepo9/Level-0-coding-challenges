function convertToFahrenheit(temperature) {
  return temperature * 1.8 + 32;
}

function convertToCelsius(temperature) {
  return (temperature - 32) * 0.5556;
}

console.log(convertToFahrenheit(10) + " degrees Fahrenheit");
console.log(convertToCelsius(50) + " degrees Celsius");
