import React from "react";
import "animate.css";
const winterTips = [
  {
    id: 1,
    title: "Keep Pets Warm Indoors",
    image: "https://i.ibb.co.com/MDX9k8bM/care1.jpg",
    description:
      "Ensure your pet has a cozy sleeping spot away from cold floors or drafts. Use soft blankets and warm bedding.",
  },
  {
    id: 2,
    title: "Protect Their Paws",
    image: "https://i.ibb.co.com/k6gF5LFG/care2.jpg",
    description:
      "Cold weather and salt can harm paws. Clean them after walks and apply a pet-safe balm to prevent cracking.",
  },
  {
    id: 3,
    title: "Maintain a Healthy Diet",
    image: "https://i.ibb.co.com/PGgyKtxn/care3.png",
    description:
      "Winter can lower your pet’s activity level, so adjust their diet to avoid weight gain while maintaining energy.",
  },
  {
    id: 4,
    title: "Limit Outdoor Time",
    image: "https://i.ibb.co.com/LzP3pZLP/care4.jpg",
    description:
      "Avoid long walks during freezing temperatures. Short, frequent outings are safer for your pet’s health.",
  },
];
const WinterCareTips = () => {
  return (
    <section className="py-14 bg-blue-50 text-gray-800">
      <div className=" px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800 animate__animated animate__bounce animate__delay-2s">
          ❄️ Winter Care Tips for Pets
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 ">
          {winterTips.map((tip) => (
            <div
              key={tip.id}
              className="card bg-white shadow-lg p-6 border border-blue-100 hover:shadow-xl  rounded-xl hover:scale-105 transition ease-in-out"
            >
              <img
                src={tip?.image}
                alt={tip.name}
                className="rounded-xl h-[200px] object-cover mx-auto mb-4 "
              />
              <h3 className="text-xl text-center font-semibold text-blue-700 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterCareTips;
