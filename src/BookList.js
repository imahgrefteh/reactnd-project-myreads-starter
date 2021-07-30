import React from "react";
import BookItem from "./BookItem";


function BookList(props) {
    return (
        <ol className="books-grid">
            {props.books.map((book) => {
                return (
                    <li key={book.id}>
                        <BookItem
                            url={book.imageLinks.thumbnail}
                            title={book.title}
                            authors={book.authors.join(", ")}
                        />
                    </li>
                );
            })}
            }
        </ol>
    );
}

export default BookList;
