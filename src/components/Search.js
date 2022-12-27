import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchSelect, setSearchSelect] = useState("");
  let navigate = useNavigate();
  function handleSearch() {
    if (searchInput && searchSelect) {
      navigate(`/jobs?title=${searchInput}&category=${searchSelect}`);
    } else if (searchInput) {
      navigate(`/jobs?title=${searchInput}`);
    } else if (searchSelect) {
      navigate(`/jobs?category=${searchSelect}`);
    }
  }
  return (
    <div className="relative w-full">
      <img
        src="https://img.freepik.com/free-photo/overhead-view-businesswoman-working-computer-office-place-your-text-ideal-blog-flat-lay-white-background_639032-1378.jpg?size=626&ext=jpg&ga=GA1.1.755197081.1668255134&semt=sph"
        alt=""
        className="w-full h-[calc(100vh-100px)] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-5 items-center justify-center text-white">
        <h1 className=" text-5xl font-bold text-white">Great Job</h1>
        <h1 className=" text-5xl text-white">Greater Talent</h1>
        <div className=" flex gap-3 flex-col md:flex-row my-5">
          <input
            className=" h-12 w-72 focus:outline-none text-black rounded-sm px-3"
            type="text"
            placeholder="Search Keywords"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <select
            className=" text-black w-72 h-12 rounded-sm focus:outline-none px-3 "
            placeholder="Search Location"
            defaultValue={"default"}
            onChange={(e) => setSearchSelect(e.target.value)}
          >
            <option value="default">Choose Category</option>
            <option className="">Arts</option>
            <option className="">Education</option>
            <option className="">Accounting</option>
            <option className="">IT Software</option>
            <option className="">Human Resource</option>
          </select>
          <button
            onClick={handleSearch}
            className=" border-2 border-green-600 bg-green-600 hover:bg-white hover:text-green-600 duration-300 ease-in h-12 px-5 rounded-sm flex felx-row gap-2 items-center"
          >
            <AiOutlineSearch sixe="30" className="" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
