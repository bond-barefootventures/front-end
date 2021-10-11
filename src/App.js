import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Footer, SocialIcons, Popup } from './components'
import {
	Home,
	About,
	Blog,
	Business,
	JobSearch,
	JoinUs,
	Login,
	Signup,
} from './pages'

export default function App() {
	const [popup, setPopup] = useState(false)

	useEffect(() => {
		setTimeout(() => setPopup(true), 60000)
	}, [])

	return (
		<Router>
			{popup && <Popup />}
			<Navbar />
			<SocialIcons />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/business" component={Business} />
				<Route exact path="/jobs" component={JobSearch} />
				<Route exact path="/join-us" component={JoinUs} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
			</Switch>
			<Footer />
		</Router>
	)
}
