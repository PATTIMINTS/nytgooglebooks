import React from "react";
// import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import SearchBar from "../../components/SearchBar";
import GoogleBooks from "../../apis/googlebooks";
import BookList from "../../components/BookList";
import BookDetail from "../../components/BookDetail";





class Books extends React.Component {
        state= { books: [], selectedBook: null };

        componentDidMount() {
            this.onTermSubmit("A Confederacy of Dunces")
        }

        onTermSubmit = async term => {
        const response = await GoogleBooks.get("/search", {
                params: {
                    q: term
                }
            });
            this.setState({ 
            books: response.data.items,
            selectedBook: response.data.items[0]
         })
        };

        onBookSelect = book => {
            console.log('From the App!', book);
            this.setState({ selectedBook: book });
        };
    render(){
        return(

            <div>
            
            <div className="ui grid" id="center">
                <div className="fourteen wide centered column">
            <Jumbotron />
            <SearchBar onFormSubmit={this.onTermSubmit} />
            
            <div className="col lg-12 md-10">
            <BookDetail book={this.state.selectedBook}/>
            
        
            <BookList onBookSelect={this.onBookSelect}books={this.state.books} />
            
            </div>
                
            </div>
            
            </div>
            </div>
    
        );
    }
    
};

export default Books;