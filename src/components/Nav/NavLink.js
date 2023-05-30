import React from 'react'

const NavLink = ({icon, text}) => {

    const listText = {
        fontSize: 24,
        marginRight: 20,
    }

  return (
    <li className='textSecondary px-3 py-2 flex align-center'>
        <p style={listText}>
            {icon}
        </p>
        <p>{text}</p>
    </li>
  )
}

export default NavLink