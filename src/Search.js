import React, {Component} from "react";
import {Link} from "react-router-dom";
import {searchWithShelf} from "./BooksAPI"
import Shelf from "./Shelf";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        const searchTerm = event.target.value;
        if (searchTerm) {
            searchWithShelf(searchTerm).then(books => this.setState({
                books: [
                    {shelf: 'Search', bookCollection: books, title: 'Search'}
                ]
            }));
        }
        this.setState({value: event.target.value});

        window.isaac = this.state.books;
        console.log('what i am lookgin for', JSON.stringify(this.state.books));
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
                        {this.state.books && this.state.books[0].bookCollection && this.state.books[0].bookCollection.length > 0  ? (
                            this.state.books.map((book) => {
                                return <Shelf key={book.id} books={book.bookCollection} Title={book.title}/>;
                            })
                        ) : (
                            <div>
                                No results found for {this.state.value}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;