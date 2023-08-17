import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = ({ text, onClick}) => {
  return (
    <div className='Header'>
      <h3>{text}</h3>
      <FontAwesomeIcon 
        className='faXmark' 
        icon={faXmark}
        onClick={onClick}
      />
    </div>
  )
}

export default Header
