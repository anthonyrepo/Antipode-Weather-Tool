import getAntipode from "../utils/getAntipode.tsx"
import { useState } from "react"

function Form() {
    const [latitude, setLatitude] = useState(-41.500083)
    const [longitude, setLongitude] = useState(172.834408)

    return (
        <form onSubmit={(e) => {getAntipode(latitude, longitude); e.preventDefault()}}>
            <input onChange={(e) => setLatitude(Number(e.target.value))} type="number" className="form-control" id="latSearch" min="-90" max="90" step="any" placeholder="Latitude" value="-41.500083" required/>
            <input onChange={(e) => setLongitude(Number(e.target.value))} type="number" className="form-control" id="lonSearch" min="-180" max="180" step="any" placeholder="Longitude" value="172.834408" required/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form