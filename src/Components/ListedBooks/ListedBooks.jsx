import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItems } from "../Utilities/Local";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import { getWishListItems } from "../Utilities/LocalWishList";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);

  const [wishList, setWishList] = useState([]);
  const [displayWishList, setDisplayWishList] = useState([]);

  useEffect(() => {
    const storedBooksId = getItems();
    const bookReads = [];
    if (books.length > 0) {
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

    const wishListBooks = [];
    const wishListId = getWishListItems();
    if (books.length > 0) {
      for (const wishId of wishListId) {
        const wishList = books.find((wish) => wish.bookId === wishId);

        if (wishList) {
          wishListBooks.push(wishList);
        }
        const filterWishList = wishListBooks.filter(
          (wishBooks) =>
            !bookReads.some((readBook) => readBook.bookId === wishBooks.bookId)
        );

        setWishList(filterWishList);
        setDisplayWishList(filterWishList);
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
          {displayWishList.map((book) => (
            <WishlistBooks key={book.bookId} book={book}></WishlistBooks>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
