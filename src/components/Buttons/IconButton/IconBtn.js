import React from 'react';
import "./IconBtn.css";

const IconBtn = ({icon, style}) => {
  return (
    <button className={`button flex justify-center align-center ${style && style}`}>
      {icon}
    </button>
  )
}

export default IconBtn