import React, {useEffect, useState} from 'react'
import Login from './pages/login/Login'
import Home from './pages/home/Home';

const App = () => {

  const [accessToken, setAccessToken] = useState();
  
  useEffect(() => {
    setAccessToken(localStorage.getItem('access_token'));
    console.log(accessToken)
  }, [])

  return (
    <>
      {
        accessToken === null ? <Login /> : <Home />
      }
    </>
  )
}

export default App