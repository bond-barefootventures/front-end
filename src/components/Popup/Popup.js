import React, { useState } from 'react'
import './Popup.css'

const index = () => {
	const [open, setOpen] = useState(true)

	return (
		<div
			className="modal animate-opacity"
			style={{ display: !open && 'none' }}
		>
			<div className="modal-content">
				<div className="modal-inner">
					<span onClick={() => setOpen(false)} className="modal-close">
						&times;
					</span>
					<div className="flex items-center w-full">
						<img
							className="w-1/2"
							src="https://static.wixstatic.com/media/9f3353_6e195849eb0143c3ba0ced5345f91ce4~mv2.gif"
							alt="ani-gif"
						/>
						<div className="flex flex-col w-auto">
							<h3 className="uppercase">Subscribe to our newsletter</h3>
							<p className="text-sm my-4">Never miss any job updates</p>
							<input
								className="border-b-2 outline-none italic p-2 w-4/5 text-sm mb-6 focus:border-brand-blue"
								placeholder="Email"
								type="text"
							/>
							<button className="btn">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
