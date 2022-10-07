import React from 'react'

const Button = ({ text, handleClick, color }) => {

  return (
    <div>
        <button style={{ backgroundColor: color}} onClick={handleClick} className="btn">{text}</button>
    </div>
  )
}

Button.defaultProps = {
    text: "Add",
}

export default Button