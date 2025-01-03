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
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti
        excepturi corporis nesciunt. Ducimus, vel aspernatur excepturi quis
        nihil ea corporis et quam veritatis suscipit cumque numquam quaerat.
        Quis quasi aspernatur repellat hic totam optio pariatur architecto
        officia. Beatae ipsam hic delectus molestiae mollitia doloremque quia
        distinctio deserunt dolore odit.
      </h1>
    </div>
  );
};

export default BookDetails;
