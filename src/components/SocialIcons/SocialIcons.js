import React from "react"
import "./SocialIcons.css"

export default function SocialIcons() {
   return (
      <div className="social-icons">
         <a target="_blank" href="https://www.facebook.com/BOND.barefoot">
            <img
               alt="Facebook"
               src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp"
            />
         </a>
         <a
            target="_blank"
            href="https://www.linkedin.com/company/barefoot-ventures/"
         >
            <img
               alt="LinkedIn"
               src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/48a2a42b19814efaa824450f23e8a253.webp"
            />
         </a>
      </div>
   )
}
