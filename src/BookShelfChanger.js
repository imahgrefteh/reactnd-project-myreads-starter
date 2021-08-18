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

    handleChange = (e) => {
        const shelf = e.target.value;
        this.setState({selectValue: shelf});
        update(this.book, e.target.value).then(() => this.props.getAllBooksCall(''));
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