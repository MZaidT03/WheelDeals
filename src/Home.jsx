import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearchCar from "./components/MostSearchCar";
import InfoSection from "./components/InfoSection";
import { Separator } from "./components/ui/separator";
import Footer from "./components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <MostSearchCar />
      <Separator className="hidden md:block md:border" />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default Home;
