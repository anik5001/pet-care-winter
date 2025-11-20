import React from "react";
import ServicesCard from "../Components/ServicesCard";
import { useLoaderData } from "react-router";

const Services = () => {
  const data = useLoaderData();
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto">
      {data.map((service) => (
        <ServicesCard key={service.serviceId} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
