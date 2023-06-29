function Form() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        getAntipode();
        e.preventDefault();
    }

    const getAntipode = () => {
        console.log("hi")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" className="form-control" id="latSearch" min="-90" max="90" step="any" placeholder="Latitude" value="-41.500083" required/>
            <input type="number" className="form-control" id="lonSearch" min="-180" max="180" step="any" placeholder="Longitude" value="172.834408" required/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form