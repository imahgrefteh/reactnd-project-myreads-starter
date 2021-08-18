import React, {Component} from "react";
import Shelf from "./Shelf";
import {Link} from "react-router-dom";
import {getAll} from './BooksAPI';

// const SHELVES = [
//     {
//         title: 'Currently Reading',
//         id: 'currentlyReading'
//     },
//     {
//         title: 'Want To Read',
//         id: 'wantToRead'
//     },
//     {
//         title: 'Read',
//         id: 'read'
//     }
// ];

class BookShelf extends Component {


    constructor(props) {
        super(props);
        this.state = {};
        this.getAllBooksCall = this.getAllBooksCall.bind(this);
    }

    getAllBooksCall = () => {
        console.log("get all books is being called")
        getAll().then(books => this.separateBooks(books));
    }

    componentDidMount() {
        this.getAllBooksCall();
    }


    separateBooks = (books) => {
        // const bookInShelves = [];
        const currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading');
        const wantToReadBooks = books.filter(book => book.shelf === 'wantToRead');
        const readBooks = books.filter(book => book.shelf === 'read');

        this.setState({
            books: [
                {shelf: 'currentlyReadingBooks', bookCollection: currentlyReadingBooks, title: 'Currently Reading'},
                {shelf: 'wantToRead', bookCollection: wantToReadBooks, title: 'Want to Read'},
                {shelf: 'read', bookCollection: readBooks, title: 'Read'} // to do add other or x number of shelfs.
            ]
        });
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <div>
                        {this.state.books && this.state.books.length > 0 && this.state.books.map((book) => {
                            return (<Shelf key={book.title} getAllBooksCall={this.getAllBooksCall.bind(this)}
                                           books={book.bookCollection} Title={book.title}/>);
                        })}
                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BookShelf;