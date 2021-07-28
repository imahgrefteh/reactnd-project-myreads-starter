import React from "react";

function BookImage(props) {
    return (<div className="book-cover" style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${props.url})`,
    }}/>);
}

export default BookImage;