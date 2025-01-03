import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();

  const book = books.find((book) => book.bookId === parseInt(id));

  const { image, tags, bookName, author, category, rating } = book;
  console.log(book);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default BookDetails;
