import Form from "./components/Form";
import InfoBox from "./components/InfoBox"
import { useState } from "react"
import locationObject from "./interfaces/locationObject"

import "./stylesheets/App.css"

function App() {
  const [names, setNames] = useState<locationObject[]>([]);

  let key = 0;
  return (
    <>
      <h1 id="title">Antipode Weather Tool</h1>
      <Form callback={setNames} names={names}></Form>
      <div className="flex">
        {Boolean(names.length) && <h3 id="card-subtitle">Provided Coordinates</h3>}
        {Boolean(names.length) && <h3 id="card-subtitle">Antipode</h3>}
        {names.map((item) => <InfoBox key={key++} info={item}></InfoBox>)}
      </div>
    </>
  )
}

export default App;