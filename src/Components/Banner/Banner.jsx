import React from "react";
import banner from "../../assets/img/banner.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div class="bg-base-200 text-white py-16 px-8 font-sans rounded-2xl mt-10">
        <div class="container mx-auto flex flex-col md:flex-row justify-evenly  items-center gap-x-6 gap-y-8">
          <div class="md:w-1/2 text-center md:text-left">
            <h2 class="text-3xl md:text-2xl lg:text-5xl font-semibold mb-4">
              Books to freshen up your bookshelf
            </h2>
            <Link to={"/listed"}>
              <button className="btn btn-accent mt-10">View The List</button>
            </Link>
          </div>

          <div class=" flex justify-center">
            <img
              className="object-cover w-full md:w-9/12"
              src={banner}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
