import React, {useState} from "react";

const Input = ({ setSearch }) => {

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);

  }

  return (
    <form action="" onSubmit={handleSubmit}>
        <div className="input-group mb-4 w-75 mx-auto">
            <input
            type="text"
            className="form-control"
            placeholder="Search City"
            aria-label="Search City"
            aria-describedby="basic-addon2"
            name="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            />
            <button type="submit" className="input-group-text" id="basic-addon2">
            <i className="fas fa-search" aria-hidden="true"></i>
            </button>
        </div>
    </form>
  );
};

export default Input;
