import React from 'react'

export default function Business() {
	return (
		<div
			style={{
				backgroundImage:
					'url(https://static.wixstatic.com/media/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg/v1/fill/w_1303,h_625,al_c,q_85,usm_0.66_1.00_0.01/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.webp)',
			}}
			className="h-2/3 w-auto bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col text-white"
		>
			<h1 className="my-2">Coming soon</h1>
			<p className="my-8">
				Subscribe to our Newsletter for updated information
			</p>
			<input
				type="text"
				placeholder="Your email"
				className="my-8 outline-none border-b-2 italic p-2 w-1/3 bg-transparent placeholder-white focus:border-brand-blue"
			/>
		</div>
	)
}
