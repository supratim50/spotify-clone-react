import React, { useEffect, useLayoutEffect, useState } from 'react';
import "./Footer.css";
import Player from './Player/Player';
import SongCard from './SongCard/SongCard';
import Volume from './Volume/Volume';

const Footer = () => {
  

  return (
    <footer className='footer mt-2 flex flex-fill justify-between align-center textPrimary'>
      {/* song details  */}
        <div className='song-details flex'>
          <SongCard />
        </div>
        {/* Player  */}
        <div className='song-player'>
          <Player />
        </div>
        {/* volum  */}
        <div className='song-details flex align-center justify-end'>
          <Volume />
        </div>
      </footer>
  )
}

export default Footer