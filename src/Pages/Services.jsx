import React, { useState } from "react";
import ServicesCard from "../Components/ServicesCard";
import { useLoaderData } from "react-router";

const Services = () => {
  const loadData = useLoaderData();
  const [data, setData] = useState(loadData);
  // console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const searchData = loadData.filter((data) =>
      data.serviceName.toLowerCase().includes(search.toLowerCase())
    );

    setData(searchData);
    // console.log("hello search", searchData);
  };

  const handleSort = (value) => {
    const sortData = loadData.filter((data) =>
      data.category.toLowerCase().includes(value.toLowerCase())
    );
    // console.log(sortData);
    setData(sortData);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" grid grid-cols-3  my-10">
        <h1 className="sm:text-3xl text-primary font-bold  ">All Services</h1>
        {/* search */}
        <div>
          <form onSubmit={handleSubmit}>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                name="search"
                required
                placeholder="Search"
              />
            </label>
          </form>
        </div>
        {/* sort */}
        <div>
          <select
            onChange={(e) => handleSort(e.target.value)}
            defaultValue="Category"
            className="select select-ghost"
          >
            <option value="">Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Grooming">Grooming</option>
            <option value="Comfort">Comfort</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
      </div>
      {data.length === 0 ? (
        <div>
          <h1 className="text-3xl font-bold text-center">Not Found!!</h1>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5  mb-15">
          {data.map((service) => (
            <ServicesCard
              key={service.serviceId}
              service={service}
            ></ServicesCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
