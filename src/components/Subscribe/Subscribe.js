import React from "react"
import "./Subscribe.css"

function Subscribe() {
	return (
		<div className="subscribe container">
			<div className="subscribe_content">
				<h2>Subscribe to our newsletter</h2>
				<div className="subscribe_email_center">
					<label htmlFor="subscribe_email" />
					<input
						className="subscribe_input"
						type="email"
						placeholder="Your email"
						name="subscribe_email"
					/>
				</div>
			</div>
		</div>
	)
}

export default Subscribe
