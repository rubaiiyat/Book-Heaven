import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="text-center">
      <h1 className="mt-10 text-3xl md:text-5xl font-bold text-white">Books</h1>

      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-start ">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
