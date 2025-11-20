import React from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const serviceData = useLoaderData();
  console.log(serviceData);
  const filteredDetailsService = serviceData.find(
    (service) => service.serviceId == id
  );

  const handleBookNow = (e) => {
    e.preventDefault();
    // console.log("book now");
    toast.success("Book Now Successfully,Thank You!");
    // console.log(e.target.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };
  return (
    <div className="max-w-5xl mx-auto shadow-md my-2">
      <div className="card bg-base-100 shadow-sm">
        <figure className="md:px-10 pt-10">
          <img
            src={filteredDetailsService.image}
            alt=""
            className="rounded-xl md:h-[400px]  object-cover overflow-hidden"
          />
        </figure>
        <div className="space-y-7 p-6">
          <h2 className="text-xl  font-medium text-center">
            ServiceName:{" "}
            <span className="text-blue-700">
              {filteredDetailsService.serviceName}
            </span>
          </h2>
          <div className="text-center sm:flex justify-around">
            <p className="text-xl font-medium">
              ProviderName:{" "}
              <span className="text-gray-500">
                {filteredDetailsService.providerName}
              </span>
            </p>
            <p className="text-xl font-medium">
              ProviderEmail:{" "}
              <span className="text-gray-500">
                {filteredDetailsService.providerEmail}
              </span>
            </p>
          </div>
          <div className="flex justify-around px-10">
            <p className="font-bold text-xl">
              $ <span> {filteredDetailsService.price}</span>
            </p>
            <p className="font-bold text-xl">
              ⭐⭐⭐⭐ <span>{filteredDetailsService.rating}</span>
            </p>
          </div>
          <div className=" text-center font-bold sm:flex justify-around">
            <p>
              SlotsAvailable:{" "}
              <span className="text-red-500">
                {filteredDetailsService.slotsAvailable}
              </span>
            </p>
            <p>
              Category:{" "}
              <span className="text-red-500">
                {filteredDetailsService.category}
              </span>
            </p>
          </div>
          <p className="font-bold text-xl text-center">
            Description:{" "}
            <span className="text-gray-500 text-[16px]">
              {filteredDetailsService.description}
            </span>
          </p>

          <div className="flex flex-col justify-center items-center shadow-xl max-w-xl mx-auto sm:p-5">
            <h1 className="text-2xl font-bold">Book Service</h1>
            <form onSubmit={handleBookNow} className="w-full">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                  required
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />

                <div className="mt-2 hover:bg-blue-600">
                  <button className="btn w-full btn-primary">Book Now</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
