import React from 'react'

import useToggler from '../../../hooks/useToggler'
import './BlogCard.css'

export default function BlogCard(props) {
	const [isToggled, toggle] = useToggler()

	return (
		<div className="blog-card">
			<div className="img-container">
				<img src={props.img} alt="pictures" />
			</div>
			<div className="content-container">
				<p className="text-xs text-gray-600">{props.time}</p>
				<div className="post-content">
					<h3 className="my-4">{props.title}</h3>
					<p className="text-sm mb-8">{props.content}</p>
				</div>
				<div className="border">
					<div className="left-svg">
						<i className="bi bi-chat-left-text" />
						<p>0</p>
					</div>
					<div>
						<i
							onClick={toggle}
							className={
								isToggled ? 'bi bi-suit-heart-fill' : 'bi bi-suit-heart'
							}
						/>
					</div>
				</div>
			</div>
			{/* <div className="svg-container"> */}
			{/* </div> */}
		</div>
	)
}
