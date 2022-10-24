import React, { useState } from "react";

import Button from "./Button";

const Calculator = () => {

  const [value, setValue] = useState("");

  const backspace = () => {
    try {
      setValue(value.slice(0, -1));
    } catch (err) {
      setValue("");
    }
  }

  const calculate = () => {
    try {
      setValue(eval(value));
    } catch (err) {
      //Evaluate function doesn't work with numbers starting on 0
      setValue("Error");
    }
  }

  return (
    <div>
      <div className="container my-2">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center text-primary">
              CALCULATOR
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card border-primary mb-3 pt-3 shadow">
              <div className="card-body text-primary">
                <input type="text" className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow" value={value} onChange={(e) => setValue(e.target.value)}/>
                <div className="row mt-2">
                  <Button buttonValue="1" onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="2" onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="3" onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="C" onClick={() => backspace()}/>              
                </div>
                <div className="row mt-2">
                  <Button buttonValue="4" onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="5" onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="6" onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="+" onClick={(e) => setValue(value + e.target.value)}/>
                </div>
                <div className="row mt-2">
                  <Button buttonValue="7" onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="8" onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="9" onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="*" onClick={(e) => setValue(value + e.target.value)}/>
                </div>
                <div className="row mt-2">
                  <Button buttonValue="." onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="0" onClick={(e) => setValue(value + e.target.value)}/>
                  <Button buttonValue="=" onClick={() => calculate()}/>
                  <Button buttonValue="/" onClick={(e) => setValue(value + e.target.value)}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
