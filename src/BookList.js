import React from 'react';

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.title}
                                author={book.authors}
                                published={book.publishedDate}
                            />
                })
            }
        </div>
    )
}

export default BookList;