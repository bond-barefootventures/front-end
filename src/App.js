import React from "react"
import {Switch, Route} from "react-router-dom"

import {Navbar, Footer} from "./components"
import {Home, About, Blog, Business, JobSearch, JoinUs} from "./pages"


export default function App() {
	return (
		<div>
			<Navbar />
			<Switch>
					<Route exact path="/"><Home /></Route>
					<Route exact path="/about"><About /></Route>
					<Route exact path="/blog"><Blog /></Route>
					<Route exact path="/business"><Business /></Route>
					<Route exact path="/jobs"><JobSearch /></Route>
					<Route exact path="/join-us"><JoinUs /></Route>
			</Switch>
			<Footer />
		</div>
	)
}