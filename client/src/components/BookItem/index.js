import React from "react";
import "../BookItem/BookItem.css"

const BookItem = ({ book }) => {
    return (
        <div className="book-item item">
            <img className="ui image" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            <div className="content">
                <div className="header">{book.volumeInfo.title}</div>
                <div>{book.volumeInfo.authors}</div>
            </div>

        </div>
    );
}

export default BookItem;