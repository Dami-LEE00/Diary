import React, { useState, useRef } from 'react';

let date = {
  year: "numeric", 
  month: "long", 
  day: "numeric",
  weekday: "long"
};

const DiaryItem = ({ id, title, author, emotion, content, created_date, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [afterContent, setAfterContent] = useState(content);
  const afterContentInput = useRef();

  const toggleIsEdit = () => setIsEdit(!isEdit);
  const handleDelete = () => {
    if(window.confirm(`${id}번째 일기 <${title}>을 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  }
  const handleEdit = () => {
    if(afterContent.length < 5) {
      afterContentInput.current.focus();
      return;
    }
    if(window.confirm(`${id}번째 일기 <${title}>을 수정하시겠습니까?`)) {
      onEdit(id, afterContent);
      toggleIsEdit();
    }
  }
  const handleQuitEdit = () => {
    setIsEdit(false);
    setAfterContent(content);
  }

  return (
    <div className='DiaryItem'>
      <div className='date'>{new Date(created_date).toLocaleDateString('ko-KR', date)}</div>
      <div className='info'>
        <span className='title'>{title}</span>
        <span>{author} | {emotion}</span>
      </div>
      <div className='content'>
        {isEdit ? (
          <textarea 
            ref={afterContentInput}
            value={afterContent}
            onChange={(e) => setAfterContent(e.target.value)}
          />
          ) : (
            content
          )}
      </div>
      <div className='btn'>
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>수정취소</button>
            <button onClick={handleEdit}>수정완료</button>
          </>
        ) : (
          <>
            <button onClick={handleDelete}>삭제</button>
            <button onClick={toggleIsEdit}>수정</button>
          </>
        )}
      </div>
    </div>
  )
}

export default DiaryItem
