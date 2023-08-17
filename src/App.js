import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import DiaryEditor from './Components/DiaryEditor';
import DiaryList from './Components/DiaryList';
import { useState, useRef } from 'react';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(1);
  
  const onCreate = (author, emotion, title, content) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      emotion,
      title,
      content,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }
  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
    dataId.current = dataId.current - 1;
  }
  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => 
      it.id === targetId ? {...it, content: newContent} : it
    ))
  }

  return (
    <div className="App">
      <h1>🤍 나만의 일기장 🤍</h1>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/editor' element={<DiaryEditor onCreate={onCreate} />}/>
        <Route path='/list' element={<DiaryList dataList={data} onDelete={onDelete} onEdit={onEdit} />}/>
      </Routes>
      
    </div>

  );
} 

export default App;
