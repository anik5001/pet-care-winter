import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const CustomerFeedback = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Khan",
      feedback:
        "The winter care package kept my dog warm and happy. Highly recommended!",
      pet: "🐕 Bruno",
    },
    {
      id: 2,
      name: "Arif Hossain",
      feedback:
        "Amazing service! Their vet consultation helped me understand my cat’s needs better.",
      pet: "🐈 Miu",
    },
    {
      id: 3,
      name: "Emily Davis",
      feedback:
        "Loved how caring the staff were. The grooming service was top-notch.",
      pet: "🐾 Coco",
    },
  ];

  return (
    <section className="py-12 bg-base-200 text-center">
      <h2 className="text-3xl font-bold mb-8 text-primary">Happy Customers</h2>
      <div className="grid md:grid-cols-3 gap-6 px-4 md:px-12">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="card bg-base-100 shadow-lg p-5 hover:scale-105 transition-all duration-300"
          >
            <FaQuoteLeft className="text-3xl text-primary mb-4 mx-auto" />
            <p className="italic mb-3">{review.feedback}</p>
            <h3 className="font-semibold text-lg">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.pet}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerFeedback;
