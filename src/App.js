import React from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import Cards from "./components/cards";
import Footer from "./components/footer";

export default function App() {
  const cardArray = Array.from({ length: 10 }, (_, index) => (
    <Cards key={index} />
  ));

  return (
    <div>
      <Header />
      <Intro />
      <div className="text-white bg-black text-center text-xl p-1">
        Why Edzorb Law App is ❤ by Over 10,000+ Users. Read Reviews
      </div>
      <p className="font-serif font-semibold text-3xl p-24 text-center text-primary">
        The Edzorb Law Difference
      </p>
      {cardArray}
      <Footer />
    </div>
  );
}
