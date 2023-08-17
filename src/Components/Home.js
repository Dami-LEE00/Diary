import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home'>
      <div className='diary-link'>
        <Link className='link' to={'/editor'}>일기쓰기</Link>
        <Link className='link' to={'/list'}>일기목록</Link>
      </div>
    </div>
  )
}

export default Home
