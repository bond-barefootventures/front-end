import React, { useState } from "react"
import {Link, useLocation} from "react-router-dom"

import "./styling/Navbar.css"
import blueLogo from "../img/blue-logo.png"
import whiteLogo from "../img/white-logo.png"


export default function Navbar() {
	const [scroll, setScroll] = useState(false)
	const {pathname} = useLocation()

	function changeNavbar() {
		if (window.scrollY >= 80) setScroll(true)
		else setScroll(false)
	}

	window.addEventListener("scroll", changeNavbar)

	return (
		<nav className={scroll ? "navbar active" : " navbar"}>
			<div className="all-pages">
				<Link to="/">
					<img src={scroll ? whiteLogo : blueLogo} alt="BOND logo" />
				</Link>

				<Link 
					className={pathname === "/about" ? "page current" : "page"} 
					to="/about"
				>
					About us
				</Link>	

				<Link 
					className={pathname === "/jobs" ? "page current" : "page"} 
					to="/jobs"
				>
					Job search
				</Link>

				<Link 
					className={pathname === "/business" ? "page current" : "page"}
					to="/business"
				>
					For businesses
				</Link>

				<Link 
					className={pathname === "/blog" ? "page current" : "page"} 
					to="/blog"
				>
					Blog
				</Link>

				<Link 
					className={pathname === "/join-us" ? "page current" : "page"} 
					to="/join-us"
				>
					Join us
				</Link>
			</div>
			<div className="icons">
				<div className="sign-in">
					<i class="fa-2x fas fa-user-circle" />
					<p>Log in</p>
				</div>
				<p>Language</p>
			</div>
		</nav>
    )
}