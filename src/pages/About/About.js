import React, { useState, useEffect } from "react";
import { AboutSlider, AboutContent } from "../../components";

import "./About.css";

export default function About() {
  return (
    <div className="about">
      <AboutSlider />
      <AboutContent />
    </div>
  );
}
