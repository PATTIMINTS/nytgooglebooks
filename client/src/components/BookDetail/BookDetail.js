import React from "react";

const BookDetail = ({ book }) => {
    return <div>{book.volumeInfo.title}</div>;
};



export default BookDetail;