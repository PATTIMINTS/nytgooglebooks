import React from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import GoogleBooks from "./apis/googlebooks";
import BookList from "./components/BookList";




// import Books from "./pages/Books";

class App extends React.Component {
        state= { books: [], selectedBook: null };

        onTermSubmit = async term => {
        const response = await GoogleBooks.get("/search", {
                params: {
                    q: term
                }
            });
            this.setState({ books: response.data.items })
        };

        onBookSelect = book => {
            console.log('From the App!', book);
            this.setState({ selectedBook: book });
        };
    render(){
        return(
            <div>
            <Nav />
            <div className="ui grid" id="center">
                <div className="fourteen wide centered column">
            <Jumbotron />
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <BookList onBookSelect={this.onBookSelect}books={this.state.books} />
            
                
            </div>
            
            </div>
            </div>
    
        );
    }
    
};

export default App;