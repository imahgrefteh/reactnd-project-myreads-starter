import React, {Component} from "react";
import BookList from "./BookList";


class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.Title}</h2>
                <div className="bookshelf-books">
                    <BookList books={this.props.books}/>
                </div>
            </div>
        );
    }
}

export default Shelf;
