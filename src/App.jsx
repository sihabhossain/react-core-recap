import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <District name="Noakhali" speacial="gala gali"></District>
      <District name="Dhaka" speacial="khawa dawa"></District>
      <District name="Chittagong" speacial="mejjan"></District>
      <District name="Sylhet" speacial="furi"></District>
    </div>
  );
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  };
  return (
    <div className="district">
      <h2>Name:{props.name}</h2>
      <p>Speacility:{props.speacial}</p>
      <h4>Power:{power}</h4>
      <button onClick={boostPower}>Boost the power</button>
    </div>
  );
}

export default App;
