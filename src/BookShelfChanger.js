import React from "react";
import {update} from "./BooksAPI";

export const options = [
    {value: 'move', label: 'Move to...'},
    {value: 'currentlyReading', label: 'Currently Reading'},
    {value: 'wantToRead', label: 'Want to Read'},
    {value: 'read', label: 'Read'},
    {value: 'none', label: 'None'}
];

class BookShelfChanger extends React.Component {


    constructor(props) {
        super(props);
        this.book = {id: this.props.id}
        this.state = {};
    }


    handleChange = (e) => {
        const shelf = e.target.value;
        this.setState({selectValue: shelf});
        if(shelf ==="none" || shelf ==="move"){
            return;
        }
        update(this.book, e.target.value).then((value => window.location.reload(true)));
    }

    function

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.selectValue} onChange={this.handleChange}>{options.map((option) => <option
                    value={option.value} key={option.value}>{option.label}</option>)}</select>
            </div>
        );
    }
}

export default BookShelfChanger;