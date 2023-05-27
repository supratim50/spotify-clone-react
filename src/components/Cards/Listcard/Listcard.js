import React from 'react';
import "./Listcard.css"

const Listcard = ({imgUrl, artistName, status}) => {
  return (
    <div className='p-2 list-container flex align-center rounded-2 pointer'>
        <div className='image-container mr-2'>
            <img src={imgUrl} className='image' alt='Something' />
        </div>
        <div>
            <h5 className='textSecondary title p-1'>{artistName}</h5>
            <p className='textSecondary1 status p-1'>{status}</p>
        </div>
    </div>
  )
}

export default Listcard