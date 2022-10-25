import React from "react";

const Input = () => {
  return (
    <form action="">
        <div className="input-group mb-4 w-75 mx-auto">
            <input
            type="text"
            className="form-control"
            placeholder="Search City"
            aria-label="Search City"
            aria-describedby="basic-addon2"
            />
            <button type="submit" className="input-group-text" id="basic-addon2">
            <i className="fas fa-search" aria-hidden="true"></i>
            </button>
        </div>
    </form>
  );
};

export default Input;
