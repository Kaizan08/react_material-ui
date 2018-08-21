import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CourseList from './components/CourseList';
import './App.css';

//https://www.youtube.com/watch?v=PWadEeOuv5o
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CourseList />
      </div>
    );
  }
}

export default App;
