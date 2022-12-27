import React from "react";
import { AiOutlineApartment } from "react-icons/ai";
import { MdOutlineNaturePeople } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className=" w-5/6 max-w-7xl mx-auto flex  flex-col py-10 gap-10">
      <h1 className=" text-3xl text-center">Popular Categories</h1>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2 ">
         <Link to="/jobs?category=Arts" className="card w-full bg-gray-200 rounded-md p-5 flex justify-center flex-col items-center hover:shadow-gray-500 hover:shadow-md transition duration-150 ease-in">
      
          <AiOutlineApartment size="50" className=" text-green-600 mb-3" />
          <h3>Design, Art and Multimedia</h3>
          <h4 className=" text-gray-500">(22 open positions)</h4>
        </Link>
        <Link to="/jobs?category=Education" className="card w-full bg-gray-200 rounded-md p-5 flex justify-center flex-col items-center hover:shadow-gray-500 hover:shadow-md transition duration-150 ease-in">
          <IoSchoolOutline size="50" className=" text-green-600 mb-3" />
          <h3>Education and Training</h3>
          <h4 className=" text-gray-500">(6 open positions)</h4>
        </Link>
        <Link to="/jobs?category=Accounting" className="card w-full bg-gray-200 rounded-md p-5 flex justify-center flex-col items-center hover:shadow-gray-500 hover:shadow-md transition duration-150 ease-in">
          <RiExchangeDollarLine size="50" className=" text-green-600 mb-3" />
          <h3>Accounting and Finance</h3>
          <h4 className=" text-gray-500">(15 open positions)</h4>
        </Link>
        <Link to="/jobs?category=Human Resource" className="card w-full bg-gray-200 rounded-md p-5 flex justify-center flex-col items-center hover:shadow-gray-500 hover:shadow-md transition duration-150 ease-in">
          <MdOutlineNaturePeople size="50" className=" text-green-600 mb-3" />
          <h3>Human Resource</h3>
          <h4 className=" text-gray-500">(19 open positions)</h4>
        </Link>
      </div>
    </div>
  );
};

export default Category;
