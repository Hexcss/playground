import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../state";

const Input = () => {
  const dispatch = useDispatch();
  const { search } = bindActionCreators(actionCreators, dispatch);

  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    search(input);
  };

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
