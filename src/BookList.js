import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    // console.log(book.volumeInfo.publishedDate);
                    return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : 'Unavailable'}
                    />
                })
            }
        </div>
    )
}

export default BookList;