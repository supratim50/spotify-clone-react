import React from 'react'
import "./login.css";
import { LoginAuthentication } from '../../utils/loginAuthentication';

import logo from "../../assets/spotifylogo.png";


const Login = () => {

  return (
    <div className='page'>
        <div className='logo-box'>
          <img className='logo' src={logo} alt='spotify-logo' />
          <button className='button bgPrimary' onClick={LoginAuthentication}>Login with Spotify</button>
        </div>
    </div>
  )
}

export default Login