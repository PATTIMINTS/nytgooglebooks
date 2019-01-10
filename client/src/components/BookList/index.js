import React from "react";
import BookItem from "../BookItem"

const BookList = ({ books }) => {
    const renderedList = books.map((book) => {
        return <BookItem book={book}/>
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default BookList;