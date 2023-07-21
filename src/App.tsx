import Form from "./components/Form";
import InfoBox from "./components/InfoBox"
import { useState } from "react"
import locationObject from "./interfaces/locationObject"

function App() {
  const [names, setNames] = useState<locationObject[]>([]);

  let key = 0;
  return (
    <>
      <Form callback={setNames} names={names}></Form>
      {names.map((item) => <InfoBox key={key++} info={item}></InfoBox>)}
    </>
  )
}

export default App;