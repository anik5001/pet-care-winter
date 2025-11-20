import React, { useState } from "react";
import toast from "react-hot-toast";

const FeedbackForm = () => {
  const [feedback, SetFeedback] = useState([]);
  // console.log(feedback);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    toast.success("Thank you for your feedback! 🐾");
    SetFeedback([...feedback, { name: name, email: email, message: message }]);

    form.name.value = "";
    form.email.value = "";
    form.message.value = "";
  };

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          We’d Love Your Feedback 💬
        </h2>
        <p className="text-gray-600 mb-8">
          Tell us what you think about our pet care services or share ideas for
          improvement.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-base-100 shadow-lg p-6 rounded-2xl flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="message"
            placeholder="Your Feedback"
            className="textarea textarea-bordered w-full h-32"
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
