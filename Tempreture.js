// conver celsius t fahrenheit

function toFahrenheit (celsius){
    const Fahrenheit =(((celsius*9)/5)+32);
    return Fahrenheit;
}

const converResult = toFahrenheit(30);
console.log(converResult);