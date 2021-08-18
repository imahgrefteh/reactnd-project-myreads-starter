import React, {Component} from "react";
import {Link} from "react-router-dom";
import {searchWithShelf} from "./BooksAPI"
import Shelf from "./Shelf";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    soemthing = (searchTerm) => {
        searchWithShelf(searchTerm).then(books => this.setState({
            books: {shelf: 'Search', bookCollection: books, title: 'Search'}
        }));
        this.setState({value: searchTerm});
    }

    handleChange = (event) => {
        this.soemthing(event.target.value);
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
                        {this.state.books && this.state.books.bookCollection && this.state.books.bookCollection.length > 0 ?
                            (
                                <Shelf key={"sfsf"} books={this.state.books.bookCollection}
                                       Title={this.state.books.title} getAllBooksCall={this.soemthing}/>
                            ) : (
                                <div>
                                    {this.state.books ? <div>No results found for {this.state.value} </div> :
                                        <div>please enter Search</div>}
                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;