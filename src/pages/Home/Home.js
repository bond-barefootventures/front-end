import React from 'react'

import {
	Banner,
	IntroSlider,
	HomeInfo,
	TestimonialsSlider,
	Subscribe,
} from '../../components'
import './Home.css'

export default function Home() {
	return (
		<div className="home">
			<IntroSlider />
			<Banner />
			<HomeInfo />
			<TestimonialsSlider />
			<Subscribe />
		</div>
	)
}
