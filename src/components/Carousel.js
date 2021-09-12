import React, {useState} from "react"
import "./styling/Carousel.css"


function Carousel() {
   // const 
   return (
      <section>
      {data.map(({img, title, description}) => (
         <div className="container" style={{backgroundImage: `url(${img})`}}>
            <i class="bi bi-chevron-left"></i>
            <div className="text">
               <h1>{title}</h1>
               <p>{description}</p>
            </div>
            <i class="bi bi-chevron-right"></i>
         </div>
      ))}
      </section>
   )
}


const data = [
   {
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80",
      title: "Platform for connecting candidates and businesses",
      description: "An online platform that connects businesses with job seekers. Update the latest jobs, provide candidates with information about suitable jobs, connect candidates with potential businesses."
   },
   {
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Our community",
      description: "Join BOND's user community now to get the fastest information"
   }
]

export default Carousel