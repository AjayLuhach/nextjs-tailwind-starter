import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-[100vw] p-4 bg-background flex items-center justify-center space-y-4">
        About Page 
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
