import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //states of application

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [massage, setMassage] = useState("");

  //logics of application

  let calcBmi = (e) => {
    e.preventDefault();
    if (height === 0 || weight === 0) {
      alert("Please enter valid height and weight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMassage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMassage("You have a healthy weight");
      } else {
        setMassage("You are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div
      style={{ width: "50%" }}
      className="container  mx-auto text-center shadow p-2 m-5 bg-body-tertiary rounded"
    >
      <div className="row justify-content-center">
        <form className="col-6" onSubmit={calcBmi}>
          <h2 className="text-primary">BMI Calculator</h2>
          <div className="m-1">
            <label className="form-label">Enter your weight (lbs)</label>
            <br />
            <input
              className="form-control"
              type="text"
              value={weight}
              placeholder="Enter your weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="m-1">
            <label className="form-label">Enter your height (in)</label>
            <br />
            <input
              className="form-control"
              type="text"
              value={height}
              placeholder="Enter your height"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <button
              className="m-1 btn btn-outline-secondary"
              onClick={reload}
              type="submit"
            >
              Reload
            </button>
          </div>
          <div>
            <h4>
              <b>Your BMI is: {bmi}</b>
            </h4>
            <h5>{massage}</h5>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
