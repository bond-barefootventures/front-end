import React from "react"

import "./css/HomeInfo.css"
import {BusinessCard, BlogCard} from "./"
import homeEvent from "../img/home-event.png"

export default function HomeInfo() {
   return (
      <div className="home-info">
         <section className="what-we-do">
            <h1>What We Do</h1>
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
            <img src={homeEvent} alt="BOND Online Career Fair 2021" />
         </section>

         <section className="blog">
            <h1>Blog</h1>
            <div className="blog-flex">
               <BlogCard />
               <BlogCard />
               <BlogCard />
            </div>
         </section>

         <section className="network">
            <h1>Our Network</h1>

         </section>
      </div>
   )
}