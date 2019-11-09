import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: '',
      sort: ''
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes?q=search+terms")
      .query({ q: this.searchField })
      .then((data) => {
        console.log(data);
        const cleanData = this.cleanData(data)
        this.setState({ books: cleanData })
      })
  }

  handleSearch = (e) => {
    // console.log(e.target.value);
    this.setState({ searchField: e.target.value })
  }

  handleSort = (e) => {
    // console.log(e.target.value);
    this.setState({ sort: e.target.value })
  }

  cleanData = (data) => {
    const cleanedData = data.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
        book.volumeInfo['publishedData'] = '0000';
      }

      else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
        book.volumeInfo['imageLinks'] = { thumbnail 'https://vignette.wikia.nocookie.net/' };
      }

      return book;
    })

    return cleanedData;
  }

  render() {
    const sortedBooks = this.state.books.sort((a, b) => {
      
    })

    return (
      <div>
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;