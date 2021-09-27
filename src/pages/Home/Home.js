import React from "react";

import { Banner, Slider, HomeInfo, Slider2, Subscribe } from "../../components";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <Banner />
      <HomeInfo />
      <Slider2 />
      <Subscribe />
    </div>
  );
}
