import axios from "axios";


// const KEY = "AIzaSyBji-rsYZf8KBpLGElA1a5YKvyM5O1yESI";

export default axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes?",
    params: {
        
        maxResults: 2,
        printType: "books"


    }
})