
function convertToFahrenheit(temperature){
    return (temperature*1.8)+32;
}

function convertToCelsius(temperature){
    
    return (temperature-32)*0.5556;
}

console.log(convertToFahrenheit(-30)+ " degrees Fahrenheit");
console.log(convertToCelsius(-4)+ " degrees Celsius");