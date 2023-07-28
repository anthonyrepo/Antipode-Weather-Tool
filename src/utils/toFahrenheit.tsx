const toFahrenheit = (temperature: number) => {
    return Math.round((temperature - 273.15) * (9 / 5) + 32);
}

export default toFahrenheit;