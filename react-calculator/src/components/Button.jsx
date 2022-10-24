import React from 'react'

const Button = ({ buttonValue, onClick }) => {
  return (
    <div className="col-3">
        <button className="btn btn-light text-primary shadow p-4 fs-4" value={buttonValue} onClick={onClick}>{buttonValue}</button>
    </div>
)
}

export default Button