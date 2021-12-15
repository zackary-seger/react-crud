import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [total, setTotal] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Cool story bro.</code>
        </p>
        <div>
          <p>You clicked {count} times.</p>
          <button
            className="btn btn-primary me-2 mb-4"
            onClick={() => setCount(count + 1)}
          >
            Click me
          </button>
          <button className="btn btn-primary mb-4" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
        <p>Please choose two numbers to add.</p>
        <div>
          <label htmlFor="num1" className="form-label">
            Number 1
          </label>
          <input
            name="num1"
            value={num1}
            className="form-control mb-2"
            type="number"
            onChange={(evt) => {
              setNum1(evt.currentTarget.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="num2" className="form-label">
            Number 2
          </label>
          <input
            name="num2"
            value={num2}
            className="form-control mb-4"
            type="number"
            onChange={(evt) => {
              setNum2(evt.currentTarget.value);
            }}
          ></input>
        </div>
        <div>
        <button
          type="button"
          className="btn btn-primary mb-3 me-3"
          onClick={() => setTotal(parseInt(num1) + parseInt(num2))}
        >
          Calculate
        </button>
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={() => {
            setTotal('');
          }}
        >
          Reset
        </button>
        </div>
        <div>
          <span>
            <code className="lead"> {num1} + {num2} = {total} </code>
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;
