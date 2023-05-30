import React, {useEffect, useState} from 'react';
import Range from '../../Inputs/Range/Range';
import IconBtn from '../../Buttons/IconButton/IconBtn';

import {
    IoVolumeHighOutline, 
    IoVolumeLowOutline, 
    IoVolumeMediumOutline, 
    IoVolumeOffOutline
} from 'react-icons/io5';

const Volume = () => {
    
  const [volumeRange, setVolumeRange] = useState(0);

  const rangehandler = (e) => {
    setVolumeRange(e.target.value);
  }

  useEffect(() => {
    console.log(typeof(volumeRange));
  }, [volumeRange]);

  return (
    <>
      <div className='flex justify-start' style={{width: 25}}>
      {
          volumeRange == 0
          ? <IconBtn icon={<IoVolumeOffOutline />} style="_24 noHover" />
          :  volumeRange > 0 && volumeRange < 20
          ? <IconBtn icon={<IoVolumeLowOutline />} style="_24 noHover" /> 
          :  volumeRange > 20 && volumeRange <70
          ? <IconBtn icon={<IoVolumeMediumOutline />} style="_24 noHover" />
          : <IconBtn icon={<IoVolumeHighOutline />} style="_24 noHover" />
        }
      </div>
      <div className='flex align-center volumeBox'>
        <Range 
          mainBoxStyle="flex-fill" 
          min="0" 
          max="100"
          value={volumeRange} 
          onChange={rangehandler} 
        /> 
      </div>
    </>
  )
}

export default Volume