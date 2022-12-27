import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [requirement, setRequirement] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();

  const data = {
    title,
    category,
    company: {
      name: name,
      location: location,
    },
    type,
    salary,
    description,
    requirement,
    createdAt: date,
  };

  function onSubmit() {
    axios
      .post("http://localhost:3500/jobs", data)
      .then((res) => navigate(`/jobs/${res.data.id}`));
  }
  return (
    <div className=" w-5/6 max-w-5xl mx-auto p-10 flex flex-col gap-5">
      <h1 className=" text-2xl font-normal">Post New Job</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className=" flex flex-col gap-2">
            <label className=" flex flex-row gap-2">
              Job Title{" "}
              <ErrorMessage
                errors={errors}
                name="title"
                as="p"
                className=" text-red-500"
              />
            </label>
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              {...register("title", {
                required: "This field is required*",
              })}
              className=" bg-gray-200 h-12 px-3 focus:outline-none rounded-sm"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label className=" flex flex-row gap-2">
              Category
              {/* <ErrorMessage
              errors={errors}
              name="type"
              as="p"
              className=" text-red-500"
            /> */}
            </label>
            <select
              className=" text-black w-full h-12 rounded-sm focus:outline-none px-3 "
              placeholder=""
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              defaultValue={"default"}
              // name="type"
              // {...register("type", {
              //   required: "This field is required*",
              // })}
            >
              <option value="default">Choose Category</option>
              <option className="">Arts</option>
              <option className="">Education</option>
              <option className="">Accounting</option>
              <option className="">IT Software</option>
              <option className="">Human Resource</option>
            </select>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className=" flex flex-col gap-2">
            <label className=" flex flex-row gap-2">
              Company Name
              <ErrorMessage
                errors={errors}
                name="companyName"
                as="p"
                className=" text-red-500"
              />
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className=" bg-gray-200 h-12 px-3 focus:outline-none rounded-sm"
              name="companyName"
              {...register("companyName", {
                required: "This field is required*",
              })}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label className=" flex flex-row gap-2">
              Company Location
              <ErrorMessage
                errors={errors}
                name="companyLocation"
                as="p"
                className=" text-red-500"
              />
            </label>
            <input
              type="text"
              placeholder="Company Location"
              className=" bg-gray-200 h-12 px-3 focus:outline-none rounded-sm"
              name="companyLocation"
              {...register("companyLocation", {
                required: "This field is required*",
              })}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className=" flex flex-col gap-2">
            <label className=" flex flex-row gap-2">
              Job Type
              {/* <ErrorMessage
              errors={errors}
              name="type"
              as="p"
              className=" text-red-500"
            /> */}
            </label>
            <select
              className=" text-black w-full h-12 rounded-sm focus:outline-none px-3 "
              placeholder=""
              onChange={(e) => setType(e.target.value)}
              value={type}
              defaultValue={"default"}
              // name="type"
              // {...register("type", {
              //   required: "This field is required*",
              // })}
            >
              <option value="default">Choose Job Type</option>
              <option className="">Part Time</option>
              <option className="">Full Time</option>
            </select>
          </div>
          <div className=" flex flex-col gap-2">
            <label className=" flex flex-row gap-2">
              Salary
              <ErrorMessage
                errors={errors}
                name="salary"
                as="p"
                className=" text-red-500"
              />
            </label>
            <input
              type="text"
              placeholder="Salary"
              className=" bg-gray-200 h-12 px-3 focus:outline-none rounded-sm"
              name="salary"
              {...register("salary", {
                required: "This field is required*",
              })}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <label className=" flex flex-row gap-2">
            Description
            <ErrorMessage
              errors={errors}
              name="description"
              as="p"
              className=" text-red-500"
            />
          </label>
          <textarea
            type="text"
            placeholder="Description"
            className=" bg-gray-200 h-20 p-3 focus:outline-none rounded-sm"
            name="description"
            {...register("description", {
              required: "This field is required*",
            })}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label className=" flex flex-row gap-2">
            Requirement
            <ErrorMessage
              errors={errors}
              name="requirement"
              as="p"
              className=" text-red-500"
            />
          </label>
          <textarea
            type="text"
            placeholder="Requirement"
            className=" bg-gray-200 h-20 p-3 focus:outline-none rounded-sm"
            name="requirement"
            {...register("requirement", {
              required: "This field is required*",
            })}
            onChange={(e) => setRequirement(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" h-12 w-36 border-2 border-green-500 rounded-3xl bg-green-500 text-white hover:bg-transparent duration-200 ease-in hover:text-green-600 mx-auto"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddNewJob;
