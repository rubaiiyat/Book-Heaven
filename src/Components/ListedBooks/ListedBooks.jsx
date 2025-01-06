import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItems } from "../Utilities/Local";
import ReadBooks from "../ReadBooks/ReadBooks";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const storedBooksId = getItems();

    if (books.length > 0) {
      const bookReads = [];

      for (const id of storedBooksId) {
        const book = books.find((book) => book.bookId === id);

        if (book) {
          bookReads.push(book);
        }

        setReadBooks(book);
        setDisplayBooks(readBooks);

        console.log(book);
      }
    }
  }, []);

  return (
    <div>
      {displayBooks.map((book) => (
        <ReadBooks key={book.bookId} book={book}></ReadBooks>
      ))}
    </div>
  );
};

export default ListedBooks;
