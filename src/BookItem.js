import React from "react";
import BookImage from "./BookImage";
import BookShelfChanger from "./BookShelfChanger";
import BookTitle from "./BookTitle"

function BookItem(props) {
    return (
        <div className="book">
            <div className="book-top">
                <BookImage
                    url={props.url}/>
                <BookShelfChanger id = {props.id} shelf={props.shelf} book = {props.book} getAllBooksCall={props.getAllBooksCall}/>
            </div>
            <BookTitle  title={props.title} authors={props.authors}/>
        </div>
    );
}

export default BookItem;