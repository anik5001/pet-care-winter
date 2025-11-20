import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <MoonLoader />
    </div>
  );
};

export default Loading;
