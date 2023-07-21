import getAntipode from "../utils/getAntipode.tsx"
import { useState } from "react"
import locationObject from "../interfaces/locationObject.tsx";

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
            <input onChange={(e) => setLatitude(Number(e.target.value))} type="number" className="form-control" id="latSearch" min="-90" max="90" step="any" placeholder="Latitude (ex: -41.500083)" required/>
            <input onChange={(e) => setLongitude(Number(e.target.value))} type="number" className="form-control" id="lonSearch" min="-180" max="180" step="any" placeholder="Longitude (ex: 172.834408)" required/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form