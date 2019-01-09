import React from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";



// import Books from "./pages/Books";

const App = () => {
    return(
        <div>
        <Nav />
        <div className="ui grid" id="center">
            <div className="fourteen wide centered column">
        <Jumbotron />
        <SearchBar />
        </div>
        
        </div>
        </div>

    );
};

export default App;