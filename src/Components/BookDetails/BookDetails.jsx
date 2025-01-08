import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveItems } from "../Utilities/Local";
import { saveWishListItems } from "../Utilities/LocalWishList";
import { ToastContainer, toast } from "react-toastify";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();

  const book = books.find((book) => book.bookId === parseInt(id));

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleReadPost = () => {
    const isAdded = saveItems(parseInt(id));

    if (isAdded) {
      toast.success("Book added to Read list!");
    } else {
      toast.error("Book already exists in Read list!");
    }
  };

  const handleWishList = () => {
    const isAdded = saveWishListItems(parseInt(id));
    if (isAdded) {
      toast.success("Book added to Wishlist!");
    } else {
      toast.error(
        "Book already added it Read List! You can't read and add wishlist again"
      );
    }
  };

  return (
    <div>
      <div className="bg-gray-100 dark:bg-base-200 py-8 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-base-200 dark:bg-base-200 mb-4">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold  text-white mb-2">
                {bookName}
              </h2>
              <h2 className="text-lg  text-gray-300 mb-2">By : {author}</h2>
              <h2 className="text-lg  text-gray-300 mb-2">{category}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
                {review}
              </p>
              <div className="space-x-10 flex gap-5 items-center mb-5">
                Tags:
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="text-accent text-sm md:text-xs lg:text-lg"
                  >
                    {" "}
                    #{tag}
                  </p>
                ))}
              </div>
              <hr />

              <div className="mt-5 flex gap-20 items-center">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-sm lg:text-base mb-4">
                    Number of Pages :
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-sm  lg:text-base mb-4">
                    Publisher :
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-sm lg:text-base  mb-4">
                    Year of Publishing :
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-sm lg:text-base  mb-4">
                    Rating :
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-white text-base  md:text-sm lg:text-base font-bold mb-4">
                    {totalPages}
                  </p>
                  <p className="text-gray-600 dark:text-white text-base md:text-sm lg:text-base  font-bold mb-4">
                    {publisher}
                  </p>
                  <p className="text-gray-600 dark:text-white text-base md:text-sm lg:text-base font-bold mb-4">
                    {yearOfPublishing}
                  </p>
                  <p className="text-gray-600 dark:text-white text-base md:text-sm  lg:text-base font-bold mb-4">
                    {rating}
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <button
                  onClick={() => handleReadPost()}
                  className="btn btn-secondary"
                >
                  Read
                </button>
                <ToastContainer />

                <button
                  onClick={() => handleWishList()}
                  className="btn btn-accent"
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
