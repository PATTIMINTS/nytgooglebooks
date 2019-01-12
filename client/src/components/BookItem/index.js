import React from "react";
import "../BookItem/BookItem.css";



const BookItem = ({ book, onBookSelect }) => {
    
    return (
        
        <div className="book-item item">
            
            <img className="ui image" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            <div className="content">
            <div className="ui buttons">
                <a onClick={() => onBookSelect(book)} className="ui button" href={"/books/:id"}id="btn">View</a>
                <div className="or"></div>
                <a className="ui brown button" href={"/books/:id"}>Save</a>
            </div>
                <h2 className="header">{book.volumeInfo.title}</h2>
                <h4>{book.volumeInfo.authors}</h4>
                <p id="text">{book.volumeInfo.description}</p>
            </div>
            </div>

        
    );
}

export default BookItem;