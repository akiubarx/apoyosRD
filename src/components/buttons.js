import React from "react";
import '../css/button.css'

const ButtonB = ({ labelButton, className = 'accesButton' }) => {
  return (
    <button className={className}>
      {labelButton}
    </button>
  )
}

export default ButtonB;