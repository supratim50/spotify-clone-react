import React from 'react';
import "./home.css";
import {IoHomeOutline, IoSearch, IoLibrary, IoAdd, IoArrowForward} from 'react-icons/io5';
import NavLink from "../../components/Nav/NavLink";
import IconBtn from '../../components/Buttons/IconButton/IconBtn';
import TagButton from '../../components/Buttons/TagButton/TagButton';
import Listcard from '../../components/Cards/Listcard/Listcard';

const Home = () => {
  return (
    <div className='home-box'>
        <div >
          {/* nav */}
          <div className='bgSecondary rounded-2' >
            <ul className='px-3 py-2'>
              <NavLink icon={<IoHomeOutline />} text="Home" />
              <NavLink icon={<IoSearch />} text="Search" />
            </ul>
          </div>
          {/* playlist */}
          <div className='bgSecondary rounded-2 mt-2 p-2'>
              <div className='py-2 flex'>
                {/* Library Heading */}
                <NavLink icon={<IoLibrary />} text="Your Library" />
                <div className='flex py-2 textWhite ml-auto'>
                  <IconBtn icon={<IoAdd />} style="mr-2" />
                  <IconBtn icon={<IoArrowForward />}/>
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
              {/* Playlists */}
              <div className='mt-2'>
                <Listcard 
                  imgUrl="https://i.scdn.co/image/ab6761610000a000135ed990dee7374197351762" 
                  artistName="Dino James" 
                  status="Artist" 
                />
                <Listcard 
                  imgUrl="https://i.scdn.co/image/ab6761610000101fb19af0ea736c6228d6eb539c" 
                  artistName="A.R Rahman" 
                  status="Artist" 
                />
                <Listcard 
                  imgUrl="https://i.scdn.co/image/ab6761610000101f0261696c5df3be99da6ed3f3" 
                  artistName="Arijit Singh" 
                  status="Artist" 
                />
              </div>
          </div>
        </div>
        <div className='bgSecondary rounded-2' >main page </div>
    </div>
  )
}

export default Home