import React from "react"

import "./HomeInfo.css"
import { BusinessCard, BlogCard } from "../"

export default function HomeInfo() {
   return (
      <div className="home-info">
         <section className="what-we-do">
            <h1>What We Do</h1>
            <br />
            <div className="cards">
               <BusinessCard
                  icon="fas fa-user-graduate"
                  title="For students"
                  description="Opportunity to apply for many different jobs, receive the latest information and interview schedule as soon as you submit your CV"
                  CTA="Find jobs"
                  to="jobs"
                  background="var(--default-yellow)"
                  color="black"
               />
               <BusinessCard
                  icon="bi bi-building"
                  title="For companies"
                  description="Provide information about suitable candidates, directly connect businesses with potential candidates"
                  CTA="Hire candidates"
                  to="business"
                  background="var(--default-blue)"
                  color="white"
               />
               <BusinessCard
                  icon="fas fa-university"
                  title="For colleges"
                  description="Connect, collaborate and build the best work experience for college students"
                  CTA="Read more"
                  to="business"
                  background="var(--default-yellow)"
                  color="black"
               />
            </div>
         </section>

         <section className="events">
            <h1>Events</h1>
            <br />
            <img
               src="https://res.cloudinary.com/barefootventures/image/upload/v1632469453/bond-website/home-event_gjg4zb.png"
               alt="BOND Online Career Fair 2021"
            />
         </section>

         <section className="blog">
            <h1>Blog</h1>
            <br />
            <div className="blog-flex">
               {blogData.map((item, index) => (
                  <BlogCard
                     key={index}
                     img={item.img}
                     time={item.time}
                     title={item.title}
                     content={item.content}
                  />
               ))}
            </div>
         </section>

         <section className="network">
            <h1>Our Network</h1>
            <br />
            <div className="network-img">
               <img
                  src="https://res.cloudinary.com/barefootventures/image/upload/v1632469333/bond-website/partners-logo/aspire_moffo1.png"
                  alt="aspire-logo"
               />
               <img
                  src="https://res.cloudinary.com/barefootventures/image/upload/v1632469332/bond-website/partners-logo/katalon_qp94ev.png"
                  alt="katalon-logo"
               />
               <img
                  src="https://res.cloudinary.com/barefootventures/image/upload/v1632469333/bond-website/partners-logo/timo_bomcuj.png"
                  alt="timo-logo"
               />
            </div>
         </section>
      </div>
   )
}

const blogData = [
   {
      img: "https://static.wixstatic.com/media/16479e_f43189fb1ff742b99fe58c4c21243774~mv2.jpg/v1/fill/w_365,h_274,fp_0.50_0.50,q_90/16479e_f43189fb1ff742b99fe58c4c21243774~mv2.webp",
      time: "2 hours ago",
      title: "Revealing the important and ways to improve ...",
      content:
         " Have you ever been “sink” in a dense pile of work with no way out? Have you ever stayed up all night to meet a...",
   },
   {
      img: "https://static.wixstatic.com/media/16479e_f43189fb1ff742b99fe58c4c21243774~mv2.jpg/v1/fill/w_365,h_274,fp_0.50_0.50,q_90/16479e_f43189fb1ff742b99fe58c4c21243774~mv2.webp",
      time: "2 hours ago",
      title: "Revealing the important and ways to improve ...",
      content:
         " Have you ever been “sink” in a dense pile of work with no way out? Have you ever stayed up all night to meet a...",
   },
   {
      img: "https://static.wixstatic.com/media/16479e_f43189fb1ff742b99fe58c4c21243774~mv2.jpg/v1/fill/w_365,h_274,fp_0.50_0.50,q_90/16479e_f43189fb1ff742b99fe58c4c21243774~mv2.webp",
      time: "2 hours ago",
      title: "Revealing the important and ways to improve ...",
      content:
         " Have you ever been “sink” in a dense pile of work with no way out? Have you ever stayed up all night to meet a...",
   },
]
