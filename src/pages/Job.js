import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { BsCalendar2Date } from "react-icons/bs";

const Job = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3500/jobs/${id}`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      {data && (
        <div className=" max-w-7xl mx-auto w-5/6 flex flex-col lg:flex-row gap-5 py-10 items-start">
          <div className="w-full lg:w-2/3 flex flex-col gap-5">
            <div className=" flex flex-col gap-5 p-5 border-2 border-gray-200 rounded-md">
              <div className=" flex flex-col lg:flex-row justify-between ">
                <div className="flex flex-col items-start gap-2">
                  <h1 className=" text-gray-800 font-normal text-3xl">
                    {data.title}
                  </h1>
                  <h1 className=" text-cyan-500 text-2xl">
                    {data.company.name}
                  </h1>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex flex-row text-lg justify-center items-center rounded-md gap-1">
                    <BiDollar className="text-green-500" size="25" />
                    <div>{data.salary ? data.salary : "Negotiate"}</div>
                  </div>
                  <div className="flex flex-row text-lg justify-center items-center rounded-md gap-1">
                    <MdSecurity className="text-green-500" size="20" />
                    <div>Verified</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row text-lg justify-start items-center rounded-md gap-1">
                  <IoLocationSharp className="" size="20" />
                  <div className=" text-gray-500">{data.company.location}</div>
                </div>
                <div className="flex flex-row text-lg justify-start items-center rounded-md gap-1">
                  <FiClock className="" size="20" />
                  <div className=" text-gray-500">{data.type}</div>
                </div>
                <div className="flex flex-row text-lg justify-start items-center rounded-md gap-1">
                  <BsCalendar2Date className="" size="20" />
                  <div className=" text-gray-500">{data.createdAt}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl">Job Description</h3>
              <p className=" text-gray-500">{data.description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl">Job Requirement</h3>
              <p className=" text-gray-500">{data.requirement}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-5 border-2 border-gray-200 rounded-md">
            <h1 className=" uppercase text-lg font-normal -tracking-tighter">
              apply for this job
            </h1>
            <hr className=" text-black my-5" />
            <form className="flex flex-col gap-5">
              <div className=" flex flex-col gap-2">
                <label className=" flex flex-row gap-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className=" bg-gray-200 h-12 px-3 focus:outline-none rounded-sm"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className=" flex flex-row gap-2">Email</label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  className=" bg-gray-200 h-12 px-3 focus:outline-none rounded-sm"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className=" flex flex-row gap-2">Cv</label>
                <input
                  type="file"
                  placeholder=""
                  name="email"
                  className=" bg-gray-200 h-auto focus:outline-none rounded-sm"
                />
              </div>
              <button
                className=" h-12 w-36 border-2 border-green-500 rounded-3xl bg-green-500 text-white hover:bg-transparent duration-200 ease-in hover:text-green-600 mx-auto"
                onClick={(e) => e.preventDefault()}
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;
