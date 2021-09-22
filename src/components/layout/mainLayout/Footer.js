import React from "react";
import { Link } from "react-router-dom";

import "../../css/Footer.css";
import whiteLogo from "../../../img/white-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <img id="img-footer" src={whiteLogo} alt="BOND logo" />

        <div className="column">
          <h4>About us</h4>
          <div className="column-of-links">
            <Link to="/join-us" className="link">
              Join us
            </Link>
            <Link className="link">FAQ</Link>
            <Link className="link">Account</Link>
          </div>
        </div>

        <div className="column">
          <h4>Services</h4>
          <div className="column-of-links">
            <Link to="/business" className="link">
              For businesses
            </Link>
            <Link to="/business" className="link">
              For universities
            </Link>
            <Link to="/blog" className="link">
              Blog
            </Link>
          </div>
        </div>

        <div className="column">
          <h4>Contact us</h4>
          <div className="column-of-links">
            <div className="info">
              <i class="bi bi-geo-alt"></i>
              <p>Ho Chi Minh City</p>
            </div>
            <div className="info">
              <i class="bi bi-envelope"></i>
              <p>bond@barefootventures.org</p>
            </div>
            <div className="info">
              <i class="bi bi-telephone"></i>
              <p>036-496-3064</p>
            </div>
            <div className="info">
              <i class="bi bi-clock"></i>
              <p>Mon - Fri (9 a.m - 5 p.m)</p>
            </div>
          </div>
        </div>

        <div className="row">
          <a href="https://www.facebook.com/BOND.barefoot">
            <i class="fa-lg fab fa-facebook-f" />
          </a>
          <a href="https://www.linkedin.com/company/barefoot-ventures/">
            <i class="fa-lg fab fa-linkedin-in" />
          </a>
        </div>
      </div>

      <div className="bottom-footer">
        <hr />
        <p className="trade-mark">© 2021 BOND, Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
}
