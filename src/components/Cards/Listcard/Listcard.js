import React from 'react';
import "./Listcard.css"

const Listcard = ({imgUrl, title, subTitle, style, styleContainer}) => {
  return (
    <div className={`p-2 list-container flex align-center rounded-2 pointer ${styleContainer ? styleContainer : ''}`}>
        <div className={`image-container mr-2  ${style === "square" ? "square" : "circle"}`}>
            <img src={imgUrl} className={`image`} alt='Something' />
        </div>
        <div>
            <h5 className='textSecondary secondaryHeader p-1'>{title}</h5>
            <p className='textSecondary1 secondaryHeader_2 p-1'>{subTitle}</p>
        </div>
    </div>
  )
}

export default Listcard