import React from "react";
import { Categories } from "../assets/mockData";
import HeroImage from "../assets/Images/HeroImage.jpg";

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12 ">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">SHOP BY CATEGORIES</div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={HeroImage} alt="" />
          <div>
            <p>Wyatt's eShop</p>
            <h2>WELCOME</h2>
            <p>MILLIONS of Products</p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
