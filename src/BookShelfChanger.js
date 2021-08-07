import React from "react";

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
        this.state = {value: 'coconut'};
    }


    handleChange = (e) => {
        console.log('select stae', e.target.value)
        console.log('bookID', this.book);
        this.setState({selectValue: e.target.value});
        // 1. need to get book ID.
        // 2. need new shelf.
        //console.log("book", this.book, this.state.selectValue);
        //  update(this.book, e.target.value).then((value => window.location.reload(false)))
        //update(this.book, e.target.value);
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