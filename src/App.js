import React,{useState,useEffect} from 'react';
import './App.css';
import TodoApp from './TodoApp';
import axios from 'axios';
import Movies from './movies';
import PostPagination from './BlogPagination/PostPagination';




const App = () => {
  return (
    <div className="App">
      <h1 style={{color:'black'}}>Pagination of movies</h1>
      <Movies />
      <br/>
      <hr />
      <h1>The Ultimate TODO setup in ReactJS</h1>
      <TodoApp/>
      <hr/>
      <PostPagination />
    </div>
  )
}

export default App
