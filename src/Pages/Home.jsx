import React from "react";
import { useLoaderData } from "react-router";
import ServicesCard from "../Components/ServicesCard";
import WinterCareTips from "../Components/WinterCareTips";
import MeetOurExpertVet from "../Components/MeetOurExpertVet";
import HeroSlider from "../Components/HeroSlider";
import CustomerFeedback from "../Components/CustomerFeedback";
import FeedbackForm from "../Components/FeedbackForm";
import "animate.css";
const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <header>
        <HeroSlider></HeroSlider>
      </header>
      <main className="md:w-11/12 mx-auto ">
        <div className="">
          <h1 className="animate__animated animate__bounce animate__delay-2s text-3xl text-center  text-blue-700 font-bold pt-5">
            Popular Winter Care Services
          </h1>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7  sm:py-5 animate__backInDown">
            {data.map((service) => (
              <ServicesCard
                key={service.serviceId}
                service={service}
              ></ServicesCard>
            ))}
          </div>
        </div>

        <WinterCareTips></WinterCareTips>
        <MeetOurExpertVet></MeetOurExpertVet>
        <CustomerFeedback></CustomerFeedback>
        <FeedbackForm></FeedbackForm>
      </main>
    </>
  );
};

export default Home;
