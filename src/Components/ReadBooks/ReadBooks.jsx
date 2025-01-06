import React from "react";
import { FaLocationDot, FaUserGroup } from "react-icons/fa6";
import { MdOutlineRestorePage } from "react-icons/md";
const ReadBooks = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div>
      <div className="max-w-4xl mx-auto p-4 bg-base-300 shadow-md rounded-lg flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-10">
        <div className="w-full md:w-1/4">
          <img
            src={image}
            alt={bookName}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-3/4">
          <h2 className="text-2xl text-white font-bold mb-1">{bookName}</h2>
          <p className=" mb-2">
            <strong>By:</strong> {author}
          </p>
          <div className="flex flex-wrap items-center sm:gap-10 md:gap-1 lg:gap-10 mb-2">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-white font-bold">Tags :</span>
              {tags.map((tag, index) => (
                <p key={index} className="text-accent ">
                  {" "}
                  #{tag}
                </p>
              ))}
            </div>
            <div className="flex gap-1 items-center">
              <FaLocationDot />{" "}
              <p className=" mb-1">Year of Publishing : {yearOfPublishing}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center sm:gap-10 md:gap-1 lg:gap-10 mb-2">
            <div className="flex gap-1 items-center">
              <FaUserGroup /> <p className=" mb-1">Publisher : {publisher}</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdOutlineRestorePage />{" "}
              <p className=" mb-1">Page : {totalPages}</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap items-center gap-2 sm:gap-10 md:gap-1 lg:gap-10 mb-2 mt-10">
            <div className="flex gap-1 items-center bg-blue-100 text-blue-800 p-1 rounded-2xl px-5">
              <p className=" mb-1">Category : {category}</p>
            </div>
            <div className="flex gap-1 items-center bg-yellow-100 text-yellow-800 rounded-2xl p-1 px-5">
              <p className=" mb-1">Rating : {rating}</p>
            </div>
            <div className="">
              <button className="btn btn-accent">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
