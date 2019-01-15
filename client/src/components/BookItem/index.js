import React from "react";
import "../BookItem/BookItem.css";
import { NavLink } from 'react-router-dom';




const BookItem = ({ book, onBookSelect }) => {
    
    return (

        
        <div className="book-item item">
            
             
            <img className="ui image" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            <div className="content">
            <div className="ui buttons" id="bttn">
                <NavLink onClick={() => onBookSelect(book)} className="ui button" to={"/books/:id"}>View</NavLink>
                <div className="or"></div>
                <NavLink className="ui brown button" to={"/books/:id"}>Save</NavLink>
            </div>
                <div className="infor">
                <h2 className="header">{book.volumeInfo.title}</h2>
                <h4>{book.volumeInfo.authors}</h4>
                <p id="text">{book.volumeInfo.description}</p>
                </div>
            </div>
            </div>
            
            
            

        
    );
}

export default BookItem;