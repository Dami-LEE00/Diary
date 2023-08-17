import React from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import DiaryItem from './DiaryItem';

const DiaryList = ({ dataList, onDelete, onEdit }) => {

  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/')
  }
  return (
    <div className='DiaryList'>
      <Header text={'일기 리스트'} onClick={handleGoHome} />
      <div className='diary_wrapper'>
        <h4>{dataList.length}개의 일기가 있습니다.</h4>
        <div>
        {dataList.map((it) => (
          <DiaryItem 
            key={it.id} {...it} 
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default DiaryList
