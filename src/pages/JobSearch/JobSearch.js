import React from 'react'

import JobCard from '../../components/JobCard/JobCard'

export default function JobSearch() {
	return (
		<div>
			<h2 className="text-center my-8">Current jobs</h2>
			<div>
				<JobCard />
				<JobCard />
			</div>
		</div>
	)
}
