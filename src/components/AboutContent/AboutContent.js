import React from "react";
import "./AboutContent.css";

function AboutContent() {
  return (
    <section className="about_Content container">
      <h3 className="about_content_title">OUR TEAM</h3>
      <div className="member_list">
        {data.map(({ img, name }, index) => (
          <article className="member" key={(index + 1) * 100}>
            <img className="member_img" src={img} alt={name} />
            <p className="member_name">{name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    img: "https://static.wixstatic.com/media/9f3353_1914c8725f7c4d2a9048721e66b48027~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/9f3353_1914c8725f7c4d2a9048721e66b48027~mv2.webp",
    name: "Thao Nguyen",
  },
  {
    img: "https://static.wixstatic.com/media/9f3353_bc3e48d25fbc464197820dae2d0ac2cc~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/9f3353_bc3e48d25fbc464197820dae2d0ac2cc~mv2.webp",
    name: "Nhien Du",
  },
  {
    img: "https://static.wixstatic.com/media/9f3353_639525c4ad9f4397ab8fc4ad0e7d9741~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/9f3353_639525c4ad9f4397ab8fc4ad0e7d9741~mv2.webp",
    name: "Giang Nguyen",
  },
  {
    img: "https://static.wixstatic.com/media/9f3353_4e043498b2ba405c9a0bc13ceebe5f67~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/9f3353_4e043498b2ba405c9a0bc13ceebe5f67~mv2.webp",
    name: "Linh Dinh",
  },
  {
    img: "https://static.wixstatic.com/media/9f3353_7f26e464b9384822b523eb89c39846d0~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/9f3353_7f26e464b9384822b523eb89c39846d0~mv2.webp",
    name: "Nhan Nguyen",
  },
  {
    img: "https://static.wixstatic.com/media/9f3353_fd40ad3ae4ea419cbd15efeb4eb16fc1~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/9f3353_fd40ad3ae4ea419cbd15efeb4eb16fc1~mv2.webp",
    name: "Ly Hoang",
  },
  {
    img: "https://static.wixstatic.com/media/9f3353_d279c625ce2d46088cf3e79341fb06df~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/9f3353_d279c625ce2d46088cf3e79341fb06df~mv2.webp",
    name: "Phuong Nguyen",
  },
  {
    img: "https://static.wixstatic.com/media/9f3353_dfee3c458fad4ef1ac1e5b73dd6a8360~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/9f3353_dfee3c458fad4ef1ac1e5b73dd6a8360~mv2.webp",
    name: "Hieu Le",
  },
];

export default AboutContent;
