import React from 'react';
import IconBtn from '../../Buttons/IconButton/IconBtn';
import Listcard from '../../Cards/Listcard/Listcard';

import {IoHeartOutline} from 'react-icons/io5';

const SongCard = () => {
  return (
    <>
        <Listcard 
            imgUrl="https://i.scdn.co/image/ab6761610000a000135ed990dee7374197351762" 
            style="square"
            title="Song Name" 
            subTitle="Artists Name" 
            styleContainer="noHover"
        />
        <IconBtn icon={<IoHeartOutline />} style="_18 noHover ml-auto" />
    </>
  )
}

export default SongCard