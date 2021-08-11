import React, {Component} from "react";
import {Link} from "react-router-dom";
import {search} from "./BooksAPI"
import Shelf from "./Shelf";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        const searchTerm = event.target.value;
        if (searchTerm) {
            search(searchTerm).then(books => this.setState({
                books: [
                    {shelf: 'Search', bookCollection: books.items ? [] : books, title: 'Search'}
                ]
            }));
        }
        this.setState({value: event.target.value});
        //console.log('books', this.state.books);
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.value}
                               onChange={this.handleChange}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"/>
                    <div>
                        {this.state.books && this.state.books.length > 0 && this.state.books.map((book) => {
                            return (<Shelf key={book.id} books={book.bookCollection} Title={book.title}/>);
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;