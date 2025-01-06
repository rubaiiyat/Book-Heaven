import React from "react";

const ReadBooks = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div>
      <h1>This is our book section</h1>
    </div>
  );
};

export default ReadBooks;
