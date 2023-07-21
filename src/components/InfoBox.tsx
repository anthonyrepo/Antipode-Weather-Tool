import locationObject from "../interfaces/locationObject";

interface Props {
    info: locationObject;
}

function InfoBox({ info }: Props) {
    return (
        <div>
            <h1>{info.name}</h1>
        </div>
    );
}

export default InfoBox;