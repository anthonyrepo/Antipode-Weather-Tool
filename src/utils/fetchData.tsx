import CountryCodes from "../data/CountryCodes.json"

const fetchData = async(url: string) => {
    interface codeType {
        [key: string]: string
    }
    const countryCodes : codeType = CountryCodes;

    const response = await fetch(url, {mode: 'cors'})
    const data = await response.json();

    if(data.name === "") {
        return {
            "name": "Somewhere in the ocean!",
            "description": data.weather[0].description as string,
            "weather": data.weather[0] as string,
            "temperature": data.main.temp as number,
            "feels_like": data.main.feels_like as number,
            "humidity": data.main.humidity as number
        }
    } else {
        return {
            "name": `${data.name}, ${countryCodes[data.sys.country]}`,
            "weather": data.weather[0].main as string,
            "description": data.weather[0].description as string,
            "temperature": data.main.temp as number,
            "feels_like": data.main.feels_like as number,
            "humidity": data.main.humidity as number
        }
    }
}

export default fetchData;