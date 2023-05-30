import React, {useState, useEffect, useLayoutEffect} from 'react';
import IconBtn from '../../Buttons/IconButton/IconBtn';
import Range from "../../Inputs/Range/Range";
import { 
  IoPlayCircle, 
  IoPlaySkipForward, 
  IoPlaySkipBack, 
  IoShuffleOutline, 
  IoRepeatOutline,
} from 'react-icons/io5';

const Player = () => {
    
    const [range, setRange] = useState(0);
    const [max, setMax] = useState(0);
    const [audioDuration, setAudioDuration] = useState("");
    const [audioPlayed, setAudioPlayed] = useState("0.00");

    const minutesToSeconds = (minute) => {
        setAudioDuration(minute);
        const timeArray = minute.split(".");
        console.log(timeArray);
        const munitesToSeconds = Number(timeArray[0]) * 60;
        setMax(munitesToSeconds + Number(timeArray[1]));
      }
    
      const secondsToMinutes = (seconds) => {
        const time = (seconds / 60).toFixed(2);
        let minute = (Math.floor(time)).toString();
        let second = (seconds - minute * 60).toString();
        if(second.length == 1) 
          second = "0" + second; // For preventing single nuber like 4.6, it should print 4.06
        setAudioPlayed(`${minute}.${second}`)
      }
    
      useEffect(() => {
        minutesToSeconds("3.11");
        console.log(max);
      }, [])
    
      useLayoutEffect(() => {
        secondsToMinutes(range);
      }, [range]);

  return (
    <>
        {/* player buttons */}
        <div className='flex justify-center'>
        <div className='flex justify-between'>
            <IconBtn icon={<IoShuffleOutline />} style="_24 noHover mr-2" />
            <IconBtn icon={<IoPlaySkipBack />} style="_24 noHover mr-2" />
            <IconBtn icon={<IoPlayCircle />} style="_26 noHover mr-2 textSecondary" />
            <IconBtn icon={<IoPlaySkipForward />} style="_24 noHover mr-2" />
            <IconBtn icon={<IoRepeatOutline />} style="_24 noHover textPrimary" />
        </div>
        </div>
        {/* player range */}
        <div className='range-mainbox'>
        <div className='range-box flex justify-between'>
            <p className='paragraph textSecondary1 mr-2'>{audioPlayed}</p>     
            <Range 
                mainBoxStyle="flex-fill" 
                min="0" 
                max={max} 
                value={range} 
                onChange={(e) => setRange(e.target.value)} 
            />   
            <p className='paragraph textSecondary1 ml-2'>{audioDuration}</p>
        </div>
        </div>
    </>
  )
}

export default Player