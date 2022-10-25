import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from "./Button";
import { actions } from "../store/index";

const Calculator = () => {

  const value = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const { type, backspace, calculate } = bindActionCreators(actions, dispatch);

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
                <input type="text" className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow" value={value} onChange={(e) => type(e.target.value)}/>
                <div className="row mt-2">
                  {["1", "2", "3", "C"].map((char, index) => (
                    <Button key={index} buttonValue={char} onClick={(e) => char==="C" ? backspace() : type(e.target.value)}/>
                  ))}            
                </div>
                <div className="row mt-2">
                  {["4", "5", "6", "+"].map((char, index) => (
                    <Button key={index} buttonValue={char} onClick={(e) => type(e.target.value)}/>
                  ))}
                </div>
                <div className="row mt-2">
                  {["7", "8", "9", "*"].map((char, index) => (
                    <Button key={index} buttonValue={char} onClick={(e) => type(e.target.value)}/>
                  ))}
                </div>
                <div className="row mt-2">
                  {[".", "0", "/", "="].map((char, index) => (
                    <Button key={index} buttonValue={char} onClick={(e) => char === "=" ? calculate() : type(e.target.value)}/>
                  ))}
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
