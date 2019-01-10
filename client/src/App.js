import React from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import GoogleBooks from "./apis/googlebooks";
import BookList from "./components/BookList";




// import Books from "./pages/Books";

class App extends React.Component {
        state= { books: [] }
        onTermSubmit = async term => {
        const response = await GoogleBooks.get("/search", {
                params: {
                    q: term
                }
            });
            this.setState({ books: response.data.items })
        };
    render(){
        return(
            <div>
            <Nav />
            <div className="ui grid" id="center">
                <div className="fourteen wide centered column">
            <Jumbotron />
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <BookList books={this.state.books} />
            
                
            </div>
            
            </div>
            </div>
    
        );
    }
    
};

export default App;