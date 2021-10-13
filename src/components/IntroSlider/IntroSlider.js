import React, { useState, useEffect } from "react";
import "./IntroSlider.css";

function Slider() {
  const [currIndex, setcurrIndex] = useState(0);

  useEffect(
    function () {
      const interval = setInterval(function () {
        nextSlide();
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    },
    [currIndex]
  );

  function nextSlide() {
    setcurrIndex(currIndex === data.length - 1 ? 0 : currIndex + 1);
  }

  function prevSlide() {
    setcurrIndex(currIndex === 0 ? data.length - 1 : currIndex - 1);
  }

  return (
    <section className="slider">
      {data.map(({ img, title, description }, index) => (
        <article
          key={index * 30}
          className={`slide ${
            currIndex === data.length - 1 && index === 0
              ? "next_slide"
              : currIndex === 0 && index === data.length - 1
              ? "prev_slide"
              : index === currIndex
              ? "slide_active"
              : index < currIndex
              ? "prev_slide"
              : "next_slide"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="container content">
            <div className="text">
              <h1 className="big-text">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </article>
      ))}
      <i
        class="bi bi-chevron-left slide_arrow arrow_left"
        onClick={prevSlide}
      ></i>
      <i
        class="bi bi-chevron-right slide_arrow arrow_right"
        onClick={nextSlide}
      ></i>
      <div className="circles">
        {data.map((props, index) => (
          <i
            key={index}
            class={
              currIndex === index ? "lg bi bi-circle-fill" : "bi bi-circle"
            }
            onClick={() => setcurrIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    img: "https://images.unsplash.com/photo-1596367407372-96cb88503db6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Platform for connecting candidates and businesses",
    description:
      "An online platform that connects businesses with job seekers. Update the latest jobs, provide candidates with information about suitable jobs, connect candidates with potential businesses.",
  },
  {
    img: "https://images.unsplash.com/photo-1600172454520-134a542a2255?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    title: "Our community",
    description:
      "Join BOND's user community now to get the fastest information",
  },
];

export default Slider;
