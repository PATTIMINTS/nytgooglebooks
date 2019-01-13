// import React from "react";
// import { Link } from "react-router-dom";
// import BookDetail from "../../components/BookDetail";

// import Jumbotron from "../../components/Jumbotron";
// import API from "../../api/API";



// class Saved extends React.Component {
//   state = {
//     book: [], selectedBook: null

//   };

  
//   // When this component mounts, grab the book with the _id of this.props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getBook(this.props.match.params.id)
//       .then(res => this.setState({ book: res.data }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//             <div>
//             <Jumbotron>
              
//               <h1>
//                 {this.state.book.title} by {this.state.book.author}
//               </h1>
//             </Jumbotron>
            
          
//             <article>
//               <h1>Description</h1>
//               <p>
//                 {this.state.book.description}
//               </p>
//             </article>
//             <BookDetail book={this.state.selectedBook}/>
            
//           <div>
//             <Link to="/">← Back to Search</Link>
//             </div>
//             </div>
//     );
//   }
// }
          
    
  


// export default Saved;

import React, { Component } from "react";
import Button from "../../components/Button";
import Jumbotron from "../../components/Jumbotron";
import API from "../../api/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";


class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", image: ""})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (

      <Container fluid >
        <Row >
          <Col size="lg-12 md-12 sm-6">
            <Jumbotron>
              <h1>Saved Books</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <Button onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              
              <h3>No Results to Display.</h3>
              
            )}
            
             <Link to={"/"}>
               <h4>-----Back to book search.</h4>
               </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
