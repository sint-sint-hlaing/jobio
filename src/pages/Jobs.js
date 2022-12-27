import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillFolderOpen, AiOutlineSearch } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { TiLocationArrow } from "react-icons/ti";
import { BsCalendar2Date } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Jobs = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchSelect, setSearchSelect] = useState("");
  let navigate = useNavigate();

  const searchParams = new URLSearchParams(window.location.search);
  const searchTitle = searchParams.get("title")
    ? searchParams.get("title")
    : "";
  const searchCategory = searchParams.get("category")
    ? searchParams.get("category")
    : "";

  useEffect(() => {
    axios.get(`http://localhost:3500/jobs`).then((res) => {
      const filterData = res.data.filter(
        (data) =>
          data.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
          data.category.toLowerCase().includes(searchCategory.toLowerCase())
      );
      setData(filterData);
      setSearchInput(searchTitle);
      setSearchSelect(searchCategory);
    });
  }, [searchTitle, searchCategory]);

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
    <div>
      <div
        className=" bg-gray-200 text-black min-h-[100px] h-auto w-full flex flex-row justify-center items-center
     px-3 lg:px-10 cursor-pointer text-lg gap-2 sticky top-0 z-20"
      >
        <input
          className=" bg-white h-12 w-full md:w-1/3 focus:outline-none text-black rounded-sm px-3"
          type="text"
          placeholder="Search Keywords"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <select
          className="  bg-white text-black w-full md:w-1/3 h-12 rounded-sm focus:outline-none px-3"
          placeholder="Search Location"
          defaultValue={"default"}
          onChange={(e) => setSearchSelect(e.target.value)}
          value={searchSelect}
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
          className=" border-2 border-green-500 bg-green-500 hover:bg-white hover:text-green-600 duration-300 ease-in h-12 px-5 rounded-sm flex felx-row gap-2 items-center"
        >
          <AiOutlineSearch sixe="30" className="" />
          <span className=" hidden md:block">Search</span>
        </button>
      </div>
      <div className="w-5/6 max-w-5xl mx-auto flex flex-col gap-5 py-10">
        {data.map((data) => (
          <Link to={`/jobs/${data.id}`}>
            <div className="border-2 border-gray-200 rounded-md p-5  hover:-translate-y-2 duration-300 ease-in-out flex flex-col gap-2">
              <h1 className=" text-green-600 text-2xl">{data.title}</h1>
              <h3 className=" text-gray-500 text-xl">{data.company.name}</h3>
              <div className=" flex flex-col md:flex-row gap-2  md:gap-5">
                <div className="flex flex-row text-cyan-500 text-lg justify-start md:justify-center items-center">
                  <BiDollar size="20" />
                  <div>{data.salary ? data.salary : "Negotiate"}</div>
                </div>
                <div className="flex flex-row justify-start md:justify-center  items-center">
                  <TiLocationArrow size="25" className=" text-yellow-500" />
                  <div className=" text-gray-500">{data.company.location}</div>
                </div>
              </div>
              <p>{data.description}</p>
              <div className="flex flex-col md:flex-row items-end gap-2 justify-between mt-5">
                <div className="flex flex-row  justify-center items-center text-gray-500 gap-2">
                  <AiFillFolderOpen size="25" />
                  <p>
                    <span className="text-black">Category : </span>
                    {data.category}
                  </p>
                </div>
                <div className="flex flex-row  justify-center items-center text-gray-500 gap-2">
                  <BsCalendar2Date size="22" />
                  <p>{data.createdAt}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
