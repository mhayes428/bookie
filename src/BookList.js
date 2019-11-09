import React from 'react';

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard />
                })
            }
        </div>
    )
}

export default BookList;