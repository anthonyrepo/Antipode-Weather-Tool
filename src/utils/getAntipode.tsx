import fetchData from "./fetchData.tsx"

const getAntipode = async (latitude : number, longitude : number) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}`;
    const info1 = await fetchData(url);

    const antipodeLat = latitude * -1;
    const antipodeLon = longitude < 0 ? (180 - (-1 * longitude)) : (-1 * (180 - longitude));

    url = `https://api.openweathermap.org/data/2.5/weather?lat=${antipodeLat}&lon=${antipodeLon}&appid=${import.meta.env.VITE_API_KEY}`;
    const info2 = await fetchData(url);

    return [info1, info2]
}

export default getAntipode;