import React from "react";
import { RiUserFollowLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { BsJournalCheck } from "react-icons/bs";

const HowItWork = () => {
  return (
    <div className=" w-5/6 max-w-7xl mx-auto flex  flex-col py-10 gap-10">
      <h1 className=" text-3xl text-center">How It Works</h1>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className=" w-full rounded-md p-5 flex flex-col items-center gap-3">
          <div className=" h-14 w-14 rounded-full flex justify-center items-center bg-gray-200">
            <RiUserFollowLine size="30" className=" text-green-600" />
          </div>
          <h3 className=" text-xl">Register an account</h3>
          <h4 className=" text-gray-500 text-center">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </h4>
        </div>
        <div className=" w-full rounded-md p-5 flex flex-col items-center gap-3">
          <div className=" h-14 w-14 rounded-full flex justify-center items-center bg-gray-200">
            <TbReportSearch size="30" className=" text-green-600" />
          </div>
          <h3 className=" text-xl">Specify & search your job</h3>
          <h4 className=" text-gray-500 text-center">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </h4>
        </div>
        <div className=" w-full rounded-md p-5 flex flex-col items-center gap-3">
          <div className=" h-14 w-14 rounded-full flex justify-center items-center bg-gray-200">
            <BsJournalCheck size="30" className=" text-green-600" />
          </div>
          <h3 className=" text-xl">Apply for job</h3>
          <h4 className=" text-gray-500 text-center">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
