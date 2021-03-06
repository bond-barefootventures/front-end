import React, { useState } from 'react'

import useClickOutside from '../../hooks/useClickOutside'
import './Popup.css'

const index = () => {
	const [open, setOpen] = useState(true)
	const clickRef = useClickOutside(() => setOpen(false))

	return (
		<div
			className="modal animate-opacity"
			style={{ display: !open && 'none' }}
		>
			<div className="modal-content" ref={clickRef}>
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
						<div className="flex flex-col w-auto pr-12">
							<h3 className="uppercase">Subscribe to our newsletter</h3>
							<p className="my-4 text-sm">Never miss any job updates</p>
							<input
								className="w-4/5 p-2 mb-6 text-sm italic border-b-2 outline-none focus:border-brand-blue"
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
