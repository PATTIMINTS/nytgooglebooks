import React from "react";
import BookItem from "../BookItem"

const BookList = ({ books, onBookSelect }) => {
    const renderedList = books.map((book) => {
        return <BookItem onBookSelect={onBookSelect} book={book}/>
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default BookList;