import React, { useEffect, useState } from "react";
import "./AboutSlider.css";

function AboutSlider() {
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
    <section className="about_slider">
      {data.map(({ img, title, description }, index) => (
        <article
          key={(index + 1) * 30}
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
            <div
              className={`${
                index !== data.length - 1 ? "about_text" : "about_end_text"
              }`}
            >
              <h1 className="big-text">{title}</h1>
              <p>{description}</p>
              <a
                className={`btn ${index !== data.length - 1 ? "hidden" : null}`}
                href="https://www.facebook.com/barefootventures.org"
              >
                Visit
              </a>
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
    img: "https://static.wixstatic.com/media/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg/v1/fill/w_1349,h_448,al_c,q_85,usm_0.66_1.00_0.01/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.webp",
    title: "Who We Are",
    description:
      "Founded in 2021, BOND operates as a startup within Barefoot Ventures - Vietnam's first running incubator for the creative scene with a vision to become a venture capital firm in the near future. We are a youthful, passionate, and eager-to-learn team that serves as a middleman between businesses and talents.",
  },
  {
    img: "https://static.wixstatic.com/media/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg/v1/fill/w_1349,h_448,al_c,q_85,usm_0.66_1.00_0.01/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.webp",
    title: "Our Mission",
    description:
      "BOND focuses on personalizing and shortening your recruitment process by providing broad networks and realistic solutions. BOND wants people to work where they are deserved & appreciated their value.",
  },
  {
    img: "https://static.wixstatic.com/media/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg/v1/fill/w_1349,h_448,al_c,q_85,usm_0.66_1.00_0.01/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.webp",
    title: "Our Vision",
    description:
      "BOND aims to fill every position with the most suitable talents. BOND aims to be the firm connection between employers and employees in the Vietnamese and Asian job markets.",
  },
  {
    img: "https://static.wixstatic.com/media/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg/v1/fill/w_1349,h_448,al_c,q_85,usm_0.66_1.00_0.01/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.webp",
    title: "Barefoot Ventures",
    description:
      "Barefoot Ventures - Vietnam's first running incubator for the creative scene with a vision to become a venture capital firm in the near future",
  },
];

export default AboutSlider;
