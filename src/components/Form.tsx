import getAntipode from "../utils/getAntipode.tsx"
import { useState } from "react"
import locationObject from "../interfaces/locationObject.tsx";

import "../stylesheets/Form.css";

interface Props {
    callback: (x: locationObject[]) => void;
    names: locationObject[];
}

function Form({ callback, names }: Props) {
    const [latitude, setLatitude] = useState(-41.500083)
    const [longitude, setLongitude] = useState(172.834408)

    const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        const info = await getAntipode(latitude, longitude);
        console.log(info)
        callback([...info, ...names])
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 id="subtitle">Please enter latitude and longitude coordinates</h2>
            <div className="container-md">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <input onChange={(e) => setLatitude(Number(e.target.value))} type="number" className="form-control form-control-lg" id="latSearch" min="-90" max="90" step="any" placeholder="Latitude (ex: -41.500083)" required/>
                    </div>
                    <div className="col-md-6 col-12">
                        <input onChange={(e) => setLongitude(Number(e.target.value))} type="number" className="form-control form-control-lg" id="lonSearch" min="-180" max="180" step="any" placeholder="Longitude (ex: 172.834408)" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-12 center">
                        <button type="submit" id="submit-button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form