import React from "react";
import {update} from "./BooksAPI";

export const options = [
    {value: 'move', label: 'Move to...', disable: true},
    {value: 'currentlyReading', label: 'Currently Reading', disable: false},
    {value: 'wantToRead', label: 'Want to Read', disable: false},
    {value: 'read', label: 'Read', disable: false},
    {value: 'none', label: 'None', disable: false}
];

class BookShelfChanger extends React.Component {


    constructor(props) {
        super(props);
        this.book = {id: this.props.id}
    }

    updateBookShelf = (result) => {
      //  this.setState({book: this.props.book});
        const id = this.book.id;
        this.props.book.shelf = "none"
        console.log('props.book', this.props.book);
        console.log('result', result);
        this.setState({});
    }

    handleChange = (e) => {
        const shelf = e.target.value;
        this.setState({selectValue: shelf});
        update(this.book, e.target.value).then(result => this.updateBookShelf(result));
    }

    function

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.shelf} onChange={this.handleChange}>{options.map((option) => <option
                    disabled={option.disable}
                    value={option.value} key={option.value}>{option.label}</option>)}</select>
            </div>
        );
    }
}

export default BookShelfChanger;