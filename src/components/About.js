import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="relative w-full">
        <img
          src="https://img.freepik.com/free-photo/job-seeker_1098-14271.jpg?size=626&ext=jpg&ga=GA1.2.755197081.1668255134&semt=sph"
          alt=""
          className="w-full h-96"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <div className=" max-w-md flex gap-5 flex-col items-start">
            <h1 className=" text-2xl uppercase -tracking-tighter">
              I am recruiter!
            </h1>
            <p className=" ">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
            <Link to="jobs/new">
              <button className=" h-12 w-48 border-2 border-white hover:bg-white duration-200 ease-in hover:text-black">
                Post new job
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <img
          src="https://img.freepik.com/free-photo/multiracial-hr-managers-laughing-funny-joke-interviewing-woman-applicant_1163-4642.jpg?size=626&ext=jpg&ga=GA1.2.755197081.1668255134&semt=sph"
          alt=""
          className="w-full h-96"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-green-600 opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-5 items-center justify-center text-white">
          <div className=" max-w-md flex gap-5 flex-col items-end">
            <h1 className=" text-2xl uppercase -tracking-tighter">
              I am jobseeker!
            </h1>
            <p className=" ">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
            <Link to="jobs">
              <button className=" h-12 w-48 border-2 border-white hover:bg-white duration-200 ease-in hover:text-green-600">
                Browse jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
