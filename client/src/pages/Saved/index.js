import React from "react";
import { Link } from "react-router-dom";
import BookDetail from "../../components/BookDetail";

import Jumbotron from "../../components/Jumbotron";
import API from "../../api/API";



class Saved extends React.Component {
  state = {
    book: [], selectedBook: null

  };

  
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
            <div>
            <Jumbotron>
              
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </Jumbotron>
            
          
            <article>
              <h1>Description</h1>
              <p>
                {this.state.book.description}
              </p>
            </article>
            <BookDetail book={this.state.selectedBook}/>
            
          <div>
            <Link to="/">← Back to Search</Link>
            </div>
            </div>
    );
  }
}
          
    
  


export default Saved;
