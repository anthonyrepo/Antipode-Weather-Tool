import locationObject from "../interfaces/locationObject";
import toFahrenheit from "../utils/toFahrenheit";
import toCelsius from "../utils/toCelsius";

import "../stylesheets/InfoBox.css"

interface Props {
    info: locationObject;
}

function InfoBox({ info }: Props) {
    const description = info.description.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    return (
        <div id="card" className="col-md-6">
            <h3>{info.name}</h3>
            <h3>{description}</h3>
            <h3>{`Temperature: ${toFahrenheit(info.temperature)}°F (${toCelsius(info.temperature)}°C)`}</h3>
            <h3>{`Feels Like: ${toFahrenheit(info.feels_like)}°F (${toCelsius(info.feels_like)}°C)`}</h3>
            <h3>{`Humidity: ${info.humidity}%`}</h3>
        </div>
    );
}

export default InfoBox;