// src/pages/Home.tsx
import React from "react";
import DailyReading from "../components/DailyReading";

const Reading: React.FC = () => {
  return (
    <div className="container mx-auto h-full">
      <DailyReading />
    </div>
  );
};

export default Reading;
