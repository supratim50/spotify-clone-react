import React from 'react';
import "./home.css";
import {IoHomeOutline, IoSearch, IoLibrary, IoAdd, IoArrowForward, IoHeartOutline} from 'react-icons/io5';
import NavLink from "../../components/Nav/NavLink";
import IconBtn from '../../components/Buttons/IconButton/IconBtn';
import TagButton from '../../components/Buttons/TagButton/TagButton';
import Listcard from '../../components/Cards/Listcard/Listcard';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='flex flex-column'>
      <div className='home-box'>
        <div className='flex flex-column nav'>
          {/* nav */}
          <div className='bgSecondary rounded-2' >
            <ul className='px-3 py-2'>
              <NavLink icon={<IoHomeOutline />} text="Home" />
              <NavLink icon={<IoSearch />} text="Search" />
            </ul>
          </div>
          {/* playlist */}
          <div className='bgSecondary rounded-2 mt-2 p-2 flex-fill flex flex-column'>
              <div className='py-2 flex'>
                {/* Library Heading */}
                <NavLink icon={<IoLibrary />} text="Your Library" />
                <div className='flex py-2 textWhite ml-auto'>
                  <IconBtn icon={<IoAdd />} style="mr-2 _24" />
                  <IconBtn icon={<IoArrowForward />} style="_24" />
                </div>
              </div>
              {/* Tags  */}
              <div>
                <div className='px-3 flex align-center'>
                  <TagButton text="Playlists" style="mr-2" />
                  <TagButton text="Artists"  style="mr-2" />
                  <TagButton text="Podcast and Shows" />
                </div>
              </div>
              {/* Playlists and Artists */}
              <div className='mt-2 playlist-box flex-fill'>
                <Listcard 
                  imgUrl="https://i.scdn.co/image/ab6761610000a000135ed990dee7374197351762" 
                  title="Dino James" 
                  subTitle="Artist" 
                />
                <Listcard 
                  imgUrl="https://i.scdn.co/image/ab6761610000101fb19af0ea736c6228d6eb539c" 
                  title="A.R Rahman" 
                  subTitle="Artist" 
                />
                <Listcard 
                  imgUrl="https://i.scdn.co/image/ab6761610000101f0261696c5df3be99da6ed3f3" 
                  title="Arijit Singh" 
                  subTitle="Artist" 
                />
              </div>
          </div>
        </div>
        <div className='bgSecondary rounded-2' >main page </div>
      </div>
    
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home