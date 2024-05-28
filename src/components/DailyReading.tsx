// src/pages/DailyReading.tsx
import React from "react";

const READING_BG = "/assets/images/reading-bg.jpg";
const CARD_IMG_1 = "/assets/images/card-bg-1.jpg";
const CARD_IMG_2 = "/assets/images/card-bg-2.jpg";
const CARD_IMG_3 = "/assets/images/card-bg-3.jpg";

const DailyReading: React.FC = () => {
  const pageBg = {
    backgroundImage: `url(${READING_BG})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handleClickCard = (card: string) => {
    console.log(card);
  };
  return (
    <div
      className="container mx-auto px-6 py-12  text-white h-full flex flex-col"
      style={pageBg}
    >
      <div>
        <h1 className="text-3xl font-bold text-golden-yellow">
          Daily Tarot Reading
        </h1>
        <p className="mt-2">Vui lòng chọn 1 trong 3 lá bài bên dưới.</p>
      </div>

      <div className="p-5  flex justify-center items-center flex-1">
        <div className="flex-1">
          <div className="mb-6 flex justify-center ">
            <img
              className="w-[100px] h-auto shadow-2xl shadow-golden-yellow"
              src={CARD_IMG_1}
              alt="card_1"
              onClick={() => handleClickCard("card_1")}
            />
          </div>
          <div className="mb-4 flex justify-between ">
            <img
              className="w-[100px] h-auto shadow-2xl shadow-golden-yellow"
              src={CARD_IMG_2}
              alt="card_2"
              onClick={() => handleClickCard("card_2")}
            />
            <img
              className="w-[100px] h-auto shadow-2xl shadow-golden-yellow"
              src={CARD_IMG_3}
              alt="card_3"
              onClick={() => handleClickCard("card_3")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyReading;
