import React from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

let date = {
  year: "numeric", 
  month: "long", 
  day: "numeric",
  weekday: "long"
};

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const titleInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: '',
    emotion: '🥰',
    title: '',
    content: ''
  })
  const rewrite = () => {
    setState('');
  }
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/')
  }
  const handleGoList = () => {
    navigate('/list')
  }
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = () => {
    if(state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if(state.title.length < 1) {
      titleInput.current.focus();
      return;
    }
    if(state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.emotion, state.title, state.content);
    alert('저장 완료 🖤');
    setState({
      author: '',
      emotion: '🥰',
      title: '',
      content: ''
    })
  }

  return (
    <div className='DiaryEditor'>
      <Header text={'일기쓰기'} onClick={handleGoHome} />
      <div className='diary_wrapper'>
        <h3>{new Date().toLocaleDateString('ko-KR', date)}</h3>
        <div className='author_emotion'>
          <div className='author'>
            <span>작성자</span>
            <input
              ref={authorInput}
              name='author'
              value={state.author}
              onChange={handleChangeState}
              type='text'
              placeholder='작성자'
            />
          </div>
          <div className='emotion'>
            <span>기분</span>
            <select name='emotion' value={state.emotion} onChange={handleChangeState}>
              <option value='🥰'>🥰</option>
              <option value='😊'>😊</option>
              <option value='😐'>😐</option>
              <option value='😥'>😥</option>
              <option value='😡'>😡</option>
            </select>
          </div>
        </div>
        <div className='title'>
          <span>제목</span>
          <input
            ref={titleInput}
            name='title'
            value={state.title}
            onChange={handleChangeState}
            type='text'
            placeholder='제목을 입력하세요'
          />
        </div>
        <div className='content'>
          <textarea
            ref={contentInput}
            name='content'
            value={state.content}
            onChange={handleChangeState}
            placeholder='내용을 입력하세요' 
          />
        </div>
        <div className='btn'>
          <button onClick={rewrite}>다시쓰기</button>
          <button onClick={handleGoList}>목록</button>
          <button onClick={handleSubmit}>저장</button>
        </div>
      </div>
    </div>
  )
}

export default DiaryEditor
