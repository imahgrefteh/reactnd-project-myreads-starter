import React from "react";
import BookItem from "./BookItem";


function BookList(props) {
    return (
        <ol className="books-grid">
            {props.books.map((book) => {
                return (
                    <li key={book.id}>
                        <BookItem
                            book={book} // if this works should we change eveyrhitng.
                            key={book.id + book.title}
                            url={book.imageLinks ? book.imageLinks.thumbnail : null}
                            title={book.title}
                            authors={book.authors ? book.authors.join(", ") : ""}
                            id={book.id}
                            shelf={book.shelf}
                        />
                    </li>
                );
            })}
        </ol>
    );
}

export default BookList;
