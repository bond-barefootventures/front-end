import React, {useState} from "react"
import "./styling/Carousel.css"


function Carousel() {
   const [currIndex, setcurrIndex] = useState(0)

   function nextSlide() {
      setcurrIndex(currIndex === data.length - 1 ? 0 : currIndex + 1)
   }

   function prevSlide() {
      setcurrIndex(currIndex === 0 ? data.length - 1 : currIndex - 1)
   }

   return (
      <section>
      {data.map(({img, title, description}, index) => (
         <div 
            className={index === currIndex ? "container active" : "container"} 
            style={{backgroundImage: `url(${img})`}}
         >
            <i class="bi bi-chevron-left" onClick={nextSlide}></i>
            <div className="text">
               <h1>{title}</h1>
               <p>{description}</p>
            </div>
            <i class="bi bi-chevron-right" onClick={prevSlide}></i>
            <div className="circles">
               <i class={currIndex === 0 ? "fas fa-circle" : "bi bi-circle"} />
               <i class={currIndex === 1 ? "fas fa-circle" : "bi bi-circle"} />
            </div>
         </div>
      ))}
      </section>
   )
}


const data = [
   {
      img: "https://images.unsplash.com/photo-1596367407372-96cb88503db6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Platform for connecting candidates and businesses",
      description: "An online platform that connects businesses with job seekers. Update the latest jobs, provide candidates with information about suitable jobs, connect candidates with potential businesses."
   },
   {
      img: "https://images.unsplash.com/photo-1600172454520-134a542a2255?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      title: "Our community",
      description: "Join BOND's user community now to get the fastest information"
   }
]

export default Carousel