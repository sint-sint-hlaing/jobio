import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentJob = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3500/jobs`).then((res) => {
      setData(res.data);
    });
  }, []);
  const sortedData = data.reverse((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });
  const recentData = sortedData.slice(0, 6);

  return (
    <div className=" w-5/6 max-w-7xl mx-auto flex flex-col py-10 gap-10">
      <h1 className=" text-3xl ">Recent Jobs</h1>
      <div className="  grid grid-cols-1 xl:grid-cols-2 gap-10">
        {recentData.map((data, index) => (
          <Link
            to={`/jobs/${data.id}`}
            key={index}
            className="flex justify-between bg-gray-200 rounded-md p-5"
          >
            <div className=" flex flex-row gap-5 justify-center items-center">
              <img
                src="https://img.freepik.com/free-psd/3d-wood-logo-effect-music-studio-modern-professional-template-psd_53876-154905.jpg?size=626&ext=jpg&ga=GA1.2.755197081.1668255134&semt=sph"
                className="w-14 h-14 object-cover"
                alt=""
              />
              <div className=" flex flex-col items-start">
                <h3 className="text-lg">{data.title}</h3>
                <h4 className=" text-green-500">{data.company.name}</h4>
                <h4 className="text-gray-500">{data.company.location}</h4>
              </div>
            </div>
            <div className=" flex flex-row gap-3 items-center">
              <p className=" text-blue-500">{data.type}</p>
              <button className=" h-12 w-36 border-2 border-green-500 rounded-3xl bg-green-500 text-white hover:bg-transparent duration-200 ease-in hover:text-green-600 ">
                Apply Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentJob;
