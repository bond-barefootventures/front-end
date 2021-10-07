import React, { useState, useEffect } from "react";
import "./Slider2.css";

export default function Slider2() {
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
    <section className="slider2">
      {data.map(({ title, content, author, location }, index) => (
        <article
          key={index * 60}
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
          style={
            currIndex % 2 === 0
              ? {
                  background: "white",
                  color: "var(--default-blue)",
                }
              : { background: "var(--default-blue)", color: "white" }
          }
        >
          <div className="container slider2_center">
            <div className="slider2_content">
              <h1 className="slider2_title">{title}</h1>
              <svg
                display="flex"
                preserveAspectRatio="none"
                data-bbox="30.5 35.5 139 129"
                viewBox="30.5 35.5 139 129"
                height="55"
                width="60"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                role="presentation"
                aria-hidden="true"
                fill={currIndex % 2 === 0 ? "var(--default-blue)" : "white"}
              >
                <path d="M86.448 54.327L74.632 35.5c-16.194 7.322-28.078 18.199-35.584 32.494-5.699 10.808-8.548 28.171-8.548 52.158V164.5h51.708v-56.202H57.049c.556-15.619 3.128-27.474 7.784-35.632 4.587-8.089 11.815-14.225 21.615-18.339z" />
                <path d="M147.816 72.736c4.656-8.158 11.884-14.295 21.684-18.409L157.685 35.5c-16.263 7.322-28.147 18.199-35.654 32.494-5.699 10.738-8.549 28.101-8.549 52.158V164.5h51.708v-56.202h-25.159c.557-15.55 3.129-27.404 7.785-35.562z" />
              </svg>
              <p className="slider2_text">{content}</p>
              <div className="author_info">
                <p className="author">{author}</p>
                <p>{location}</p>
              </div>
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
    title: "Testimonials",
    content:
      "When I was looking for recruitment news, a chance happening brought me to BOND which connects candidates and employers. Through the job fair, I have received a lot of knowledge through the workshop that BOND organized. When BOND announced that BOND had reviewed my CV, I was very happy. Then, my CV accidentally had an error in connecting to BOND, they promptly informed me to submit an additional CV… Thank you for the professional job handling and BOND's companionship and support for trainees like me. I hope BOND will always develop and accompany the trainees in the future.",
    author: "Nguyen Phan Hoa Thuan",
    location: "Van Lang University",
  },
  {
    title: "Testimonials",
    content:
      "Thank you to BOND for connecting candidates like me to employers. I found the process of sending my CV and Portfolio to BOND quite smooth. It was professional and fast. Besides, I also find BOND's workshops very attractive. Hope to have the opportunity to see BOND again in the future.",
    author: "Le Ngoc Thao",
    location: "University of Industrial Fine Art",
  },
];
