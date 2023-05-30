import React from 'react';
import "./Range.css";

const Range = ({mainBoxStyle, min, max, value, onChange}) => {
  return (
    <div className={`main_box ${mainBoxStyle ? mainBoxStyle : ''}`}>
        {/* <div className={`range_box`}>
            <div className='range_fill'></div>
        </div> */}
        <input type='range' className='input' min={min} max={max} value={value} onChange={onChange} />
    </div>
  )
}

export default Range