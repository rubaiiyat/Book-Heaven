import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <div className="mt-10">
      <Link to={`/bookDetails/${bookId}`}>
        <section className="p-8  bg-base-200    rounded-2xl min-h-[670px] flex-grow">
          <img className="rounded-2xl" src={image} alt="" />
          <div className="space-x-10 flex  mt-10">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="text-accent text-sm md:text-xs lg:text-lg"
              >
                {tag}
              </p>
            ))}
          </div>
          <h1 className="text-3xl my-5 text-start font-bold text-white">
            {bookName}
          </h1>
          <p className="mb-5 text-start">By : {author}</p>
          <div className="flex justify-between items-center mt-10 ">
            <div>
              <h1>{category}</h1>
            </div>
            <div>
              <h1 className="flex gap-1 items-center">
                {rating} <CiStar className="text-white text-xl" />
              </h1>
            </div>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default Book;
