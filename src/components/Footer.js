import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import {
  FaFacebookF,
  FaGooglePlay,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const faq = [
  " Terms & Conditions",
  "Pravicy & Security",
  "Support",
  "How It Works",
  "Communications",
];

const jobs = [
  "Jobs in Yangon",
  "Jobs in Mandalay",
  "Part Time",
  "Remote",
  "Full Time",
];

const Footer = () => {
  return (
    <div className=" bg-gray-800 text-slate-400 w-full text-sm">
      <div className="w-5/6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        <div className=" flex flex-col gap-5">
          <div className=" font-bold text-2xl text-white">Jobio</div>
          <div className=" flex flex-col gap-1">
            <span>No.(234),SaungTawKuu Street, Yangon</span>
            <span>+959 987 567 234</span>
            <span>info@jobio.com</span>
          </div>
          <div className="flex flex-row gap-5">
            <FaFacebookF size="20" className=" hover:text-green-600" />
            <FaTwitter size="20" className=" hover:text-green-600" />
            <RiInstagramFill size="20" className=" hover:text-green-600" />
            <FaPinterest size="20" className=" hover:text-green-600" />
            <AiOutlineGoogle size="20" className=" hover:text-green-600" />
          </div>{" "}
        </div>
        <div className=" flex flex-col gap-5">
          <h3 className=" text-slate-200 text-lg">
            Frequently Asked Questions
          </h3>
          <div className=" flex flex-col gap-1">
            {faq.map((data, index) => (
              <span className=" hover:text-green-600 hover:translate-x-3 duration-300 ease-in">
                {data}
              </span>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <h3 className=" text-slate-200 text-lg">Find Jobs</h3>
          <div className=" flex flex-col gap-1">
            {jobs.map((data, index) => (
              <span className=" hover:text-green-600 hover:translate-x-3 duration-300 ease-in">
                {data}
              </span>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <h3 className=" text-slate-200 text-lg">Downloads</h3>
          <div className=" flex flex-col gap-5">
            <div className=" border-2 border-green-600 flex flex-row gap-5 w-56 p-2 text-white items-center">
              <BsApple size="25" className=" text-green-600" />
              <div className=" flex- flex-col">
                <div>App Store</div>
                <div>Available now on the</div>
              </div>
            </div>
            <div className=" border-2 border-green-600 flex flex-row gap-5 w-56 p-2 text-white items-center">
              <FaGooglePlay size="25" className=" text-green-600" />
              <div className=" flex- flex-col">
                <div>Google Play</div>
                <div>Get in on</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
