import React from "react"
import {Link} from "react-router-dom"

import "./styling/Banner.css"
import whiteLogo from "../img/white-logo.png"


export default function Banner() {
   return (
      <section className="banner">
         <i class="fa-3x fas fa-quote-left"></i>
         <div className="flex-box-banner">
            <div className="CTA">
               <h1>Let's get you a job</h1>
               <Link to="/about" className="learn-more">
                  <h3>Learn more about us</h3>
                  <i class="fas fa-chevron-right"></i>
               </Link>
            </div>
            <img src={whiteLogo} alt="bond-logo" />
         </div>
      </section>
   )
}