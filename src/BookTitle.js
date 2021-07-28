import React from "react";

function BookTitle(props) {
    return (<span><div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors}</div></span>);
}

export default BookTitle;