import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import BookList from './BookList';
import BookCard from './BookCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    );
  }
}

export default App;
