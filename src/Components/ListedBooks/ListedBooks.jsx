import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItems } from "../Utilities/Local";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read");

  useEffect(() => {
    const storedBooksId = getItems();

    if (books.length > 0) {
      const bookReads = [];

      for (const id of storedBooksId) {
        const book = books.find((book) => book.bookId === id);

        if (book) {
          bookReads.push(book);
        }

        setReadBooks(bookReads);
        setDisplayBooks(bookReads);
        console.log(book);
      }
    }
  }, []);

  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {displayBooks.map((book) => (
            <ReadBooks key={book.bookId} book={book}></ReadBooks>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <WishlistBooks></WishlistBooks>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
