import React from "react"

import useToggler from "../../../hooks/useToggler"
import "./BlogCard.css"

export default function BlogCard(props) {
	const [isToggled, toggle] = useToggler()

	return (
		<div className="blog-card">
			<div className="img-container">
				<img src={props.img} alt="pictures" />
			</div>
			<div className="content-container">
				<p className="tiny-txt fade">{props.time}</p>
				<div className="post-content">
					<h2>{props.title}</h2>
					<p className="small-txt fade">{props.content}</p>
				</div>
			</div>
			<div className="svg-container">
				<div className="border">
					<div className="left-svg">
						<i className="bi bi-chat-left-text" />
						<p>0</p>
					</div>
					<div>
						<i
							onClick={toggle}
							className={
								isToggled ? "bi bi-suit-heart-fill" : "bi bi-suit-heart"
							}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
