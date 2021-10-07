import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Navbar, Footer, SocialIcons } from "./components"
import { Home, About, Blog, Business, JobSearch, JoinUs, Test } from "./pages"
import Popup from '../src/components/Popup/index'

export default function App() {

	useEffect(() => {
		window.onload = function () {
			setTimeout(function () {
				return (
					<Popup />
				)
			}, 5000)
		}
	})

	return (
		<Router>
			<Navbar />
			<Popup />
			<SocialIcons />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/business" component={Business} />
				<Route exact path="/jobs" component={JobSearch} />
				<Route exact path="/join-us" component={JoinUs} />
			</Switch>

			<Footer />
		</Router>
	)
}
