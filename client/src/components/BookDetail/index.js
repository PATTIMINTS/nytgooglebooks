import React from "react";

const BookDetail = ({ book }) => {
    if (!book) {
        return <div>Loading...</div>;
    }

    return (
    <div>
        <div className="ui segment">
        <h4 className="ui segment">{book.volumeInfo.title}</h4>
        </div>
    
    </div>
    
    );
};




export default BookDetail;