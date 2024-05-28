// src/pages/Home.tsx
import React from "react";
import Button from "../components/base/Button";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4 bg-mystic-purple text-white h-full flex justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold text-golden-yellow text-center animate-fade-in-1s">
          Tarot Reading
        </h1>
        <div className="py-8 animate-fade-in-2s">
          <p className="text-center">
            Chào mừng bạn đến với ứng dụng Tarot – nơi giúp bạn khám phá bản
            thân, dự đoán tương lai và nhận được những lời khuyên hữu ích cho
            cuộc sống hàng ngày. Với giao diện thân thiện, trực quan và đậm chất
            huyền bí, chúng tôi cam kết mang đến cho bạn những trải nghiệm thú
            vị và sâu sắc về thế giới Tarot.
          </p>
        </div>
        <div className="flex justify-center  animate-fade-in-3s">
          <Button className="rounded-md " onClick={() => navigate("/register")}>
            Khám phá ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
