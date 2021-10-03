import React from "react"
import { Link } from "react-router-dom"

import "./Banner.css"

export default function Banner() {
	return (
		<section className="banner">
			<div className="banner_center">
				<svg
					preserveAspectRatio="none"
					data-bbox="30.5 35.5 139 129"
					viewBox="30.5 35.5 139 129"
					height="55"
					width="60"
					xmlns="http://www.w3.org/2000/svg"
					data-type="shape"
					role="presentation"
					aria-hidden="true"
					fill="white"
				>
					<path d="M86.448 54.327L74.632 35.5c-16.194 7.322-28.078 18.199-35.584 32.494-5.699 10.808-8.548 28.171-8.548 52.158V164.5h51.708v-56.202H57.049c.556-15.619 3.128-27.474 7.784-35.632 4.587-8.089 11.815-14.225 21.615-18.339z" />
					<path d="M147.816 72.736c4.656-8.158 11.884-14.295 21.684-18.409L157.685 35.5c-16.263 7.322-28.147 18.199-35.654 32.494-5.699 10.738-8.549 28.101-8.549 52.158V164.5h51.708v-56.202h-25.159c.557-15.55 3.129-27.404 7.785-35.562z" />
				</svg>
				<div className="flex-box-banner">
					<div className="CTA">
						<h2 className="pl-8">Let's get you a job</h2>
						<Link to="/about" className="learn-more">
							<h3>Learn more about us</h3>
							<i class="fas fa-chevron-right"></i>
						</Link>
					</div>
					<img
						src="https://res.cloudinary.com/barefootventures/image/upload/v1632469422/bond-website/bond-logo/white-logo_xhxbco.png"
						alt="bond-logo"
					/>
				</div>
			</div>
		</section>
	)
}
