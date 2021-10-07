import React from "react";

import {
  Banner,
  Slider1,
  HomeInfo,
  Slider2,
  Subscribe,
} from "../../components";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Slider1 />
      <Banner />
      <HomeInfo />
      <Slider2 />
      <Subscribe />
    </div>
  );
}
