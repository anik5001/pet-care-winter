import React from "react";
import "animate.css";
const vets = [
  {
    id: 1,
    name: "Dr. Rafiq Hasan",
    title: "Senior Veterinary Surgeon",
    experience: "10+ years of pet health expertise",
    image: "https://i.ibb.co.com/VW55x00r/doctor.webp",
  },
  {
    id: 2,
    name: "Dr. Naila Chowdhury",
    title: "Pet Nutrition Specialist",
    experience: "Focused on balanced diets for winter care",
    image: "https://i.ibb.co.com/MxQLWgXk/doctor2.jpg",
  },
  {
    id: 3,
    name: "Dr. Imran Hossain",
    title: "Animal Wellness Expert",
    experience: "Specialist in grooming and preventive healthcare",
    image: "https://i.ibb.co.com/v6BzTgNg/doctor-3.jpg",
  },
  {
    id: 4,
    name: "Dr. Mehnaz Karim",
    title: "Veterinary Dermatologist",
    experience: "Expert in skin and coat protection during cold weather",
    image: "https://i.ibb.co.com/bMKdVr9g/doctor4.jpg",
  },
];

const MeetOurExpertVet = () => {
  return (
    <section className="card-body pb-14 bg-blue-50">
      <div className=" text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10 animate__flipInX">
          🩺 Meet Our Expert Vets
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="card bg-white shadow-md hover:shadow-xl rounded-2xl p-5 border border-blue-100  hover:scale-105 transition ease-in-out"
            >
              <img
                src={vet.image}
                alt={vet.name}
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-blue-200"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {vet.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium">{vet.title}</p>
              <p className="text-gray-500 text-sm mt-2">{vet.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurExpertVet;
