import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import uiText from "@/data/uiText.json";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-[100vw] p-4 bg-background space-y-4">
        <h1 className="text-3xl font-bold">{uiText.about.title}</h1>
        <p className="whitespace-pre-line text-lg leading-relaxed">
          {uiText.about.description}
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
