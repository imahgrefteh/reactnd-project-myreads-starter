import React from "react";

export const options = [
    {value: 'move', label: 'Move to...'},
    {value: 'currentlyReading', label: 'Currently Reading'},
    {value: 'wantToRead', label: 'Want to Read'},
    {value: 'read', label: 'Read'},
    {value: 'none', label: 'None'}
];

function BookShelfChanger() {
    return (
        <div className="book-shelf-changer">
            <select>{options.map((option) => <option key={option.value}>{option.label}</option>)}</select>
        </div>
    );
}

export default BookShelfChanger;