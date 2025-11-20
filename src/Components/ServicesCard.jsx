import React from "react";
import { Link } from "react-router";

const ServicesCard = ({ service }) => {
  return (
    <div>
      <div className=" card bg-base-100 shadow-sm mt-2 hover:scale-105 transition ease-in-out">
        <figure className="md:px-10 sm:pt-10">
          <img
            src={service.image}
            alt=""
            className="rounded-xl h-[200px] w-full md:w-[400px] object-cover overflow-hidden"
          />
        </figure>
        <div className="space-y-7 p-6">
          <h2 className="text-xl text-blue-700 md:h-[40px]  font-medium text-center">
            {service.serviceName}
          </h2>

          <div className="flex justify-between px-10">
            <p className="font-bold text-xl">
              $ <span> {service.price}</span>
            </p>
            <p className="font-bold text-xl">
              ⭐⭐⭐⭐ <span>{service.rating}</span>
            </p>
          </div>

          <div className="w-full hover:bg-blue-600">
            <Link
              to={`/service/details/${service.serviceId}`}
              className="btn w-full btn-primary"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
