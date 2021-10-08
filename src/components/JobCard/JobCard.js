import React from 'react'

export default function JobCard() {
	return (
		<div className="mx-auto md:w-1/2 w-96 h-auto border-2 my-8 flex md:flex-row justify-between items-center px-8 rounded-lg flex-col">
			<div className="flex flex-col py-8">
				<img
					src="https://res.cloudinary.com/barefootventures/image/upload/v1632469333/bond-website/partners-logo/aspire_moffo1.png"
					alt="company-logo"
					className="w-28 mb-4"
				/>
				<h3>Position</h3>
				<p>Level - Full/Part-time</p>
				<p className="mt-4">Location</p>
			</div>
			<button className="btn md:mb-0 mb-8">View job</button>
		</div>
	)
}
